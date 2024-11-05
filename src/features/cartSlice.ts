import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct } from '../types/ProductTypes';

interface InitialState {
    products: {
        id: number,
        quantity: number,
        price: number
    }[]
}
const initialState: InitialState = {
    products: JSON.parse(localStorage.getItem('cart') || '[]')
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: any, action: PayloadAction<CartProduct>) => {
            const productInCart = state.products.find((item: CartProduct) => item.id === action.payload.id);
            if (productInCart) {
                productInCart.quantity++;
            } else {
                state.products.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const productInCart = state.products.find((item: CartProduct) => item.id === action.payload);
            if (productInCart) {
                productInCart.quantity++;
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const productInCart = state.products.find((item: CartProduct) => item.id === action.payload);
            if (productInCart && productInCart.quantity > 1) {
                productInCart.quantity--;
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const productsAfterRemove = state.products.filter((item: CartProduct) => item.id !== action.payload);
            state.products = productsAfterRemove;
        },
        incrementQuantityByNumber: (state, action) => {
            const productInCart = state.products.find((item: CartProduct) => item.id === action.payload.id);
            if (productInCart?.quantity) {
                productInCart.quantity = action.payload.quantity
            }
        }
    }
})

export const cartReducer = cartSlice.reducer;

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, incrementQuantityByNumber } = cartSlice.actions;