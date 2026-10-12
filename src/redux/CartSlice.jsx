import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find(item => item.id === plant.id);
      if (existing) existing.quantity += 1;
      else state.items.push({ ...plant, quantity: 1 });
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity(state, action) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else state.items = state.items.filter(plant => plant.id !== action.payload);
      }
    },
    clearCart(state) { state.items = []; }
  }
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;
export const selectCartCount = state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartTotal = state => state.cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
export default cartSlice.reducer;
