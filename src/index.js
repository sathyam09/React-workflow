import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProjectReducer from './Store/projectReducer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({projects:ProjectReducer})

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
