import {
  UPDATE_POSTS,
  ADD_POST,
  ADD_COMMENT,
  ADD_POST_LIKE,
  REMOVE_POST_LIKE,
} from '../actions/actionTypes';

export default function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS:
      return action.posts;
    case ADD_POST:
      return [action.post, ...state];
    case ADD_COMMENT:
      const newPosts = state.map((post) => {
        if (post._id === action.postId) {
          return {
            ...post,
            comments: [action.comment, ...post.comments],
          };
        }

        return post;
      });
      return newPosts;
    case ADD_POST_LIKE:
      const updatedPosts = state.map((post) => {
        if (post._id === action.postId) {
          return {
            ...post,
            likes: [...post.likes, action.userId],
          };
        }

        return post;
      });
      return updatedPosts;
    case REMOVE_POST_LIKE:
      const updatedPost = state.map((post) => {
        if (post._id === action.postId) {
          const likesArray = post.likes.filter((id) => id !== action.userId);
          return {
            ...post,
            likes: likesArray,
          };
        }

        return post;
      });
      return updatedPost;

    default:
      return state;
  }
}
