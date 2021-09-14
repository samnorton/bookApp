import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import StackNavigation from './navigation/StackNavigation';
import booksReducer from './redux/reducers/booksReducers';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(booksReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    );
  }
}

export default App;
