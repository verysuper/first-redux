import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const { createStore } = require('redux');
function counter(state = 0, action){
  switch( action.type ){
    case "add":
      return state +1;
    default:
      return state;
  }  
}
const store = createStore(counter)
store.subscribe(function(){
  console.log('有更新', store.getState())
})
store.dispatch({type:"add"})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
