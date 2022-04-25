// Action CreaterとStateとReducerを1つにまとめたものをslicerといい、toolkitを使用し3つ一気に作成する。(pureなreduxでは1つ1つ作っていくしかないがtoolkitのcreateSlice()を使用すれば可能)

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value:0,
  },
  // reducerを作成したら、自動的にaction createrも生成される。
  // increment, decrement etcを実行しますよという”action”
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;