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
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalAmount += action.payload.price;
    },

    removeThaliItem(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity === 1) {
          state.items.splice(itemIndex, 1);
        } else {
          item.quantity -= 1;
        }
        state.totalAmount -= item.price;
      }
    },

    clearThaliCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addThaliItem, removeThaliItem, clearThaliCart } =
  cartSlice.actions;

export default cartSlice.reducer;
