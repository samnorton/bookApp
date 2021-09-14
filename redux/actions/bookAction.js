import {
  FETCHING_BOOKS_REQUEST,
  FETCHING_BOOKS_SUCCESS,
  FETCHING_BOOKS_FAILURE,
} from './types';

export const fetchingBooksRequest = () => ({type: FETCHING_BOOKS_REQUEST});
export const fetchingBooksSuccess = json => ({
  type: FETCHING_BOOKS_SUCCESS,
  payload: json,
});
export const fetchingBooksFailure = error => ({
  type: FETCHING_BOOKS_FAILURE,
  payload: error,
});

export const fetchBooks = () => {
  return async dispatch => {
    dispatch(fetchingBooksRequest());
    try {
      let response = await fetch(
        'https://openlibrary.org/search.json?author=tolkien',
      );
      let json = await response.json();
      dispatch(fetchingBooksSuccess(json.docs));
    } catch (error) {
      dispatch(fetchingBooksFailure(error));
    }
  };
};
