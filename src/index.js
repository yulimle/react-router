import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { act } from 'react-dom/test-utils';
import rootReducer from './store';
import { configureStore } from '@reduxjs/toolkit';

// let store = createStore(reducer);
const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const rootReducer = createStore(combineReducers, reduxDevTool);
const store = configureStore({ reducer: rootReducer }, reduxDevTool);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
