import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// configureStore()で簡単にstoreの部分を作る。
// storeはどこでも使えるようにしておきたい為、index.js内の<App />を<Provider store={store}>で囲む。go to index.js
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
