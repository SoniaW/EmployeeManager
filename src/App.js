import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
componentWillMount() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyCLwW9905q093N1oY88ewvkR9JQtiIWVK8',
    authDomain: 'manager-aad67.firebaseapp.com',
    databaseURL: 'https://manager-aad67.firebaseio.com',
    projectId: 'manager-aad67',
    storageBucket: 'manager-aad67.appspot.com',
    messagingSenderId: '1075753190598'
  };

  firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
