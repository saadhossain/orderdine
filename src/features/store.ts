import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import { cartReducer } from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

store.subscribe(() => {
    const { products } = store.getState().cart;
    try {
        localStorage.setItem('cart', JSON.stringify(products));
    } catch (error) {
        console.error("Error saving cart to localStorage:", error);
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch