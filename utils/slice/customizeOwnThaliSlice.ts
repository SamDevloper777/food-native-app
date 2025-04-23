import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type ThaliItem = {
  id: string;
  title: string;
  cost: string;
  url: string;
  quantity: number;
};

type Thali = {
  thaliQuantity: number;
  items: ThaliItem[]; // Renamed 'item' to 'items' for clarity (array of items)
};

type ThaliState = {
  items: Record<string, Thali>; // Using thaliId as the key
};

const initialState: ThaliState = {
  items: {},
};

const customizeOwnThaliSlice = createSlice({
  name: 'customizeOwnThali',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ThaliItem & { thaliId: string }>) => {
      const { thaliId, id, title, cost, url } = action.payload;
      
      // Check if the thaliId already exists
      if (state.items[thaliId]) {
        // Find if the item already exists in the items array
        const existingItem = state.items[thaliId].items.find(item => item.id === id);
        
        if (existingItem) {
          // If item exists, increment the quantity
          existingItem.quantity += 1;
        } else {
          // Otherwise, add the new item
          state.items[thaliId].items.push({ id, title, cost, url, quantity: 1 });
        }
        
        // Sort the items by their ID after the update
        state.items[thaliId].items.sort((a, b) => a.id.localeCompare(b.id));
      } else {
        // If thaliId doesn't exist, create a new thali with the item and thaliQuantity of 1
        state.items[thaliId] = {
          items: [{ id, title, cost, url, quantity: 1 }],
          thaliQuantity: 1,
        };
      }
    },

    removeItem: (state, action: PayloadAction<{ thaliId: string, itemId: string }>) => {
      const { thaliId, itemId } = action.payload;
      if (state.items[thaliId]) {
        state.items[thaliId].items = state.items[thaliId].items.filter(item => item.id !== itemId);
        // If no items remain, remove the thali
        if (state.items[thaliId].items.length === 0) {
          delete state.items[thaliId];
        }
      }
    },

    incrementQuantity: (state, action: PayloadAction<{ thaliId: string, itemId: string }>) => {
      const { thaliId, itemId } = action.payload;
      const item = state.items[thaliId]?.items.find(item => item.id === itemId);
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action: PayloadAction<{ thaliId: string, itemId: string }>) => {
      const { thaliId, itemId } = action.payload;
      const item = state.items[thaliId]?.items.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        // Remove the item if quantity would be 0
        state.items[thaliId].items = state.items[thaliId].items.filter(item => item.id !== itemId);
        // If no items remain, remove the thali
        if (state.items[thaliId].items.length === 0) {
          delete state.items[thaliId];
        }
      }
    },

    clearAll: (state) => {
      state.items = {};
    },

    setThaliQuantity: (state, action: PayloadAction<{ thaliId: string, quantity: number }>) => {
      const { thaliId, quantity } = action.payload;
      if (state.items[thaliId]) {
        if (quantity <= 0) {
          // Remove the thali if quantity is 0 or negative
          delete state.items[thaliId];
        } else {
          state.items[thaliId].thaliQuantity = quantity;
        }
      }
    },

    incrementThaliQuantity: (state, action: PayloadAction<{ thaliId: string }>) => {
      const { thaliId } = action.payload;
      if (state.items[thaliId]) {
        state.items[thaliId].thaliQuantity += 1;
      }
    },

    decrementThaliQuantity: (state, action: PayloadAction<{ thaliId: string }>) => {
      const { thaliId } = action.payload;
      if (state.items[thaliId]) {
        if (state.items[thaliId].thaliQuantity > 1) {
          state.items[thaliId].thaliQuantity -= 1;
        } else {
          // Remove the thali if thaliQuantity would be 0
          delete state.items[thaliId];
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearAll,
  setThaliQuantity,
  incrementThaliQuantity,
  decrementThaliQuantity,
} = customizeOwnThaliSlice.actions;

// Selectors
export const selectThaliItems = (state: RootState) => state.customizeOwnThali.items;

export const isItemSelected = (thaliId: string, id: string) => (state: RootState) =>
  Boolean(state.customizeOwnThali.items[thaliId]?.items.find(item => item.id === id));

export const getItemQuantity = (thaliId: string, id: string) => (state: RootState) =>
  state.customizeOwnThali.items[thaliId]?.items.find(item => item.id === id)?.quantity || 0;

export const getThaliQuantity = (thaliId: string) => (state: RootState) =>
  state.customizeOwnThali.items[thaliId]?.thaliQuantity || 0;

export default customizeOwnThaliSlice.reducer;