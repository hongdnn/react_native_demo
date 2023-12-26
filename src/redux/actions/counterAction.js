import { increment, decrement } from '../reducers/counterSlice';

export const incrementAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};
