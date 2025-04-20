import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThaliItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: ThaliItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addThaliItem(state, action: PayloadAction<ThaliItem>) {
      const { id, name, price, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.name === name
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        state.totalAmount += price * quantity;
      } else {
        state.items.push({ id, name, price, quantity });  
        state.totalAmount += price * quantity;
      }
    },

    removeThaliItem(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalAmount -= item.price;
        }
      }
    },

    removeItemCompletely(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalAmount -= item.price * item.quantity;
        state.items.splice(itemIndex, 1);
      }
    },

    clearThaliCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addThaliItem, removeThaliItem, removeItemCompletely, clearThaliCart } =
  cartSlice.actions;

export default cartSlice.reducer;