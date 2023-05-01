import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import evaluateReducer from '../store/evaluateSlice';

export const store = configureStore({
  reducer: {
    evaluate: evaluateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
