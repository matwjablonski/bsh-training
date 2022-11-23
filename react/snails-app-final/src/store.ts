import { configureStore } from '@reduxjs/toolkit'
import snailsReducer from './redux/snails.slice';

const store = configureStore({
  reducer: {
    snails: snailsReducer,
  }
});

export default store;
