import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
// import { apiSlice } from "./api/index.js";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        // [apiSlice.reducerPath]: apiSlice.reducer
    },
    // middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch