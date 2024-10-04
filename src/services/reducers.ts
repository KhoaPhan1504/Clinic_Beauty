import { combineReducers } from '@reduxjs/toolkit';
import { slideSlice } from './store/slide/slide.slice';
import { counterSlice } from './store/slices/counterSlice';

export const reducers = combineReducers({
  slide: slideSlice.reducer,
  counter: counterSlice.reducer,
});

export type RootStateType = ReturnType<typeof reducers>;
