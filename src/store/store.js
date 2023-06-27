import { configureStore } from '@reduxjs/toolkit';
import { journalSlice } from './journal/journalSlice';

export const store = configureStore({
  reducer: {
    journal: journalSlice.reducer
  }
});
