import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type CartItem = {
  id: string;
  title: string; // Changed from `name` to `title`
  cost: string;  // Changed from `price` (number) to `cost` (string)
  url: string;   // Added `url`
  quantity: number;
  description?: string; // Optional, since it's not in the image object
};

interface CartState {
  items: Record<string, CartItem[]>; // thaliId: CartItem[]
}

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<CartItem & { thaliId: string }>
    ) => {
      const { thaliId, id, title, cost, url, quantity, description } = action.payload;

      if (state.items[thaliId]) {
        const existingItem = state.items[thaliId].find((item) => item.id === id);
        if (existingItem) {
          existingItem.quantity += quantity; // Use the passed quantity
        } else {
          state.items[thaliId].push({ id, title, cost, url, quantity, description });
        }
      } else {
        state.items[thaliId] = [{ id, title, cost, url, quantity, description }];
      }

      state.items[thaliId].sort((a, b) => a.id.localeCompare(b.id));
    },

    removeFromCart: (
      state,
      action: PayloadAction<{ thaliId: string; itemId: string }>
    ) => {
      const { thaliId, itemId } = action.payload;
      if (state.items[thaliId]) {
        state.items[thaliId] = state.items[thaliId].filter((item) => item.id !== itemId);
        if (state.items[thaliId].length === 0) {
          delete state.items[thaliId];
        }
      }
    },

    incrementItemQty: (
      state,
      action: PayloadAction<{ thaliId: string; itemId: string }>
    ) => {
      const item = state.items[action.payload.thaliId]?.find(
        (item) => item.id === action.payload.itemId
      );
      if (item) item.quantity += 1;
    },

    decrementItemQty: (
      state,
      action: PayloadAction<{ thaliId: string; itemId: string }>
    ) => {
      const { thaliId, itemId } = action.payload;
      const item = state.items[thaliId]?.find((item) => item.id === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items[thaliId] = state.items[thaliId].filter(
            (item) => item.id !== itemId
          );
          if (state.items[thaliId].length === 0) {
            delete state.items[thaliId];
          }
        }
      }
    },

    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementItemQty,
  decrementItemQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;