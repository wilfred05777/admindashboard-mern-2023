import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './state';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer:{
    global: globalReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
