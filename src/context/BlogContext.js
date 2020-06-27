import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload.blogPosts;
    case "edit_blogpost":
      return state.map(blogPost => blogPost.id === action.payload.id ? action.payload : blogPost);
    case "delete_blogpost":
      return state.filter(x => x.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async (callback) => {
    const response = await jsonServer.get('/blogposts');
    const blogPosts = response.data;
    dispatch({type: 'get_blogposts', payload: { blogPosts }});
    if (callback) callback();
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    if (callback) callback();
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({type: 'edit_blogpost', payload: {id, title, content}});
    if (callback) callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPosts, addBlogPost, editBlogPost, deleteBlogPost },
  []
);
