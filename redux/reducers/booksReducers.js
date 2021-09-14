import {
  FETCHING_BOOKS_REQUEST,
  FETCHING_BOOKS_SUCCESS,
  FETCHING_BOOKS_FAILURE,
} from '../actions/types';

const initialState = {
  isFetching: false,
  errorMessage: '',
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BOOKS_REQUEST:
      return {...state, isFetching: true};
    case FETCHING_BOOKS_FAILURE:
      return {...state, isFetching: false, errorMessage: action.payload};
    case FETCHING_BOOKS_SUCCESS:
      return {...state, isFetching: false, books: action.payload};
    default:
      return state;
  }
};

export default booksReducer;
