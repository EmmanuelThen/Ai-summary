import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

//? Think of this const Store as the cake, the reducer will allow to get a slice of the cake, so we can reduce the entire state to only grab what we need.
//? The middleware allows us to do something with the state before we get it
// This is from redux docs
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})