import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import countryReducer from './reducers/countrySlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    country: countryReducer
  },
//   middleware: getDefaultMiddleware =>
//   getDefaultMiddleware({
//     thunk: {}
//   })
});

export default store;
