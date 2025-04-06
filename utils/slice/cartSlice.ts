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
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity; // Add the payload quantity to existing item
        state.totalAmount += price * quantity; // Update total based on added quantity
      } else {
        state.items.push({ id, name, price, quantity }); // Use the payload quantity for new item
        state.totalAmount += price * quantity; // Update total for new item
      }
    },

    removeThaliItem(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1; // Decrease quantity by 1
          state.totalAmount -= item.price; // Reduce total by single item price
        } else {
          state.items.splice(itemIndex, 1); // Remove item if quantity is 1
          state.totalAmount -= item.price; // Reduce total by single item price
        }
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