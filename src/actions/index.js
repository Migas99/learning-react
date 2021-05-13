import _ from "lodash";
import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.getPosts();
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// export const fetchUser = (id) => async (dispatch) => {
//   const response = await jsonPlaceHolder.getUser(id);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.getUser(id);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.getUser(id);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const usersIds = _.uniq(_.map(getState().posts, "userId"));
  usersIds.forEach(async (id) => await dispatch(fetchUser(id)));
};
