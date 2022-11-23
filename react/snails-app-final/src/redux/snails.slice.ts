import { createSlice } from '@reduxjs/toolkit';

const initialState: { [key: string]: number } = {

};

// action = { name: 'asd', bet: 1 }

const snailsSlice = createSlice({
  name: 'snails',
  initialState,
  reducers: {
    addBet: (state, action) => {
      state[action.payload.name] = (state[action.payload.name] || 0) + action.payload.bet
    }
  }
});

export const { addBet } = snailsSlice.actions;

export default snailsSlice.reducer;
