import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import ConfigureStore from './store/ConfigureStore';
import {Provider} from "react-redux"

 const store = ConfigureStore()
 console.log("store" , store.getState())

 store.subscribe(() =>{
  console.log("updateState" , store.getState())
 })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App />
  </Provider>
  </BrowserRouter>
);


