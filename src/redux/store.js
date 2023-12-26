import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     thunk: {}
//   })
});

export default store;
