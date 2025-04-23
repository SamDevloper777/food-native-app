import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type ThaliItem = {
  id: string;
  title: string;
  cost: string;
  url: string;
  quantity: number;
};

type ThaliState = {
  items: Record<string, ThaliItem[]>; // Using thaliId as the key and an array of ThaliItems as the value
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
        // Find if the item already exists in the array
        const existingItem = state.items[thaliId].find(item => item.id === id);
        
        if (existingItem) {
          // If item exists, just increment the quantity
          existingItem.quantity += 1;
        } else {
          // Otherwise, add the new item
          state.items[thaliId].push({ id, title, cost, url, quantity: 1 });
        }
        
        // Sort the items by their ID after the update
        state.items[thaliId].sort((a, b) => a.id.localeCompare(b.id));
      } else {
        // If thaliId doesn't exist, create a new entry with the item
        state.items[thaliId] = [{ id, title, cost, url, quantity: 1 }];
      }
    },

    removeItem: (state, action: PayloadAction<{ thaliId: string, itemId: string }>) => {
      const { thaliId, itemId } = action.payload;
      if (state.items[thaliId]) {
        state.items[thaliId] = state.items[thaliId].filter(item => item.id !== itemId);
      }
      if (state.items[thaliId].length === 0) {
        delete state.items[thaliId];
      }
    },

    incrementQuantity: (state, action: PayloadAction<{ thaliId: string, itemId: string }>) => {
      const { thaliId, itemId } = action.payload;
      const item = state.items[thaliId]?.find(item => item.id === itemId);
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action: PayloadAction<{ thaliId: string, itemId: string }>) => {
      const { thaliId, itemId } = action.payload;
      const item = state.items[thaliId]?.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items[thaliId] = state.items[thaliId]?.filter(item => item.id !== itemId);
      }
    },

    clearAll: (state) => {
      state.items = {};
    },
  },
});

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearAll,
} = customizeOwnThaliSlice.actions;

// Selectors
export const selectThaliItems = (state: RootState) => state.customizeOwnThali.items;

export const isItemSelected = (thaliId: string, id: string) => (state: RootState) =>
  Boolean(state.customizeOwnThali.items[thaliId]?.find(item => item.id === id));

export const getItemQuantity = (thaliId: string, id: string) => (state: RootState) =>
  state.customizeOwnThali.items[thaliId]?.find(item => item.id === id)?.quantity || 0;

export default customizeOwnThaliSlice.reducer;
