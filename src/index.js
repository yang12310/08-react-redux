import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';


// 스토어를 만듭니다. 매개변수의 key값은 반드시 reducer 이어야 합니다...
const store = configureStore({
  reducer : rootReducer,
},
  composeWithDevTools()
);
console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  
  </React.StrictMode>
);


