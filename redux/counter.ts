import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  loading: boolean;
}

const initialState: CounterState = {
  value: 0,
  loading: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.loading = true;
      })
      .addCase(incrementAsync.fulfilled, state => {
        state.loading = false;
        state.value += 1;
      });
  },
});

export const incrementAsync = createAsyncThunk<void, void>(
  'counter/incrementAsync',
  async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(null);
      }, 2000),
    );
    return;
  },
);

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
