import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type ThaliItem = {
  id: string;
  title: string;
  cost: string;
  quantity: number;
};

export type Thali = {
  thaliQuantity: number;
  kitchenId: string;
  items: ThaliItem[];
};

type ThaliState = {
  items: Record<string, Thali>;
};

const initialState: ThaliState = {
  items: {},
};

const customizeOwnThaliSlice = createSlice({
  name: 'customizeOwnThali',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ThaliItem & { thaliId: string; kitchenId: string }>) => {
      const { thaliId, id, title, cost, kitchenId } = action.payload;
      
      if (state.items[thaliId]) {
        const existingItem = state.items[thaliId].items.find(item => item.id === id);
        
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items[thaliId].items.push({ id, title, cost, quantity: 1});
        }
        
        state.items[thaliId].items.sort((a, b) => a.id.localeCompare(b.id));
      } else {
        state.items[thaliId] = {
          items: [{ id, title, cost, quantity: 1 }],
          thaliQuantity: 1,
          kitchenId,
        };
      }
    },

    setKitchenId: (state, action: PayloadAction<{ thaliId: string; kitchenId: string }>) => {
      const { thaliId, kitchenId } = action.payload;
      if (state.items[thaliId]) {
        state.items[thaliId].kitchenId = kitchenId;
      }
    },

    removeItem: (state, action: PayloadAction<{ thaliId: string; itemId: string }>) => {
      const { thaliId, itemId } = action.payload;
      if (state.items[thaliId]) {
        state.items[thaliId].items = state.items[thaliId].items.filter(item => item.id !== itemId);
        if (state.items[thaliId].items.length === 0) {
          delete state.items[thaliId];
        }
      }
    },

    incrementQuantity: (state, action: PayloadAction<{ thaliId: string; itemId: string }>) => {
      const { thaliId, itemId } = action.payload;
      const item = state.items[thaliId]?.items.find(item => item.id === itemId);
      if (item) item.quantity += 1;
    },

    decrementQuantity: (state, action: PayloadAction<{ thaliId: string; itemId: string }>) => {
      const { thaliId, itemId } = action.payload;
      const item = state.items[thaliId]?.items.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        state.items[thaliId].items = state.items[thaliId].items.filter(item => item.id !== itemId);
        if (state.items[thaliId].items.length === 0) {
          delete state.items[thaliId];
        }
      }
    },

    clearAll: (state) => {
      state.items = {};
    },

    setThaliQuantity: (state, action: PayloadAction<{ thaliId: string; quantity: number }>) => {
      const { thaliId, quantity } = action.payload;
      if (state.items[thaliId]) {
        if (quantity <= 0) {
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
          delete state.items[thaliId];
        }
      }
    },
  },
});

export const {
  addItem,
  setKitchenId,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearAll,
  setThaliQuantity,
  incrementThaliQuantity,
  decrementThaliQuantity,
} = customizeOwnThaliSlice.actions;

export const selectThaliItems = (state: RootState) => state.customizeOwnThali.items;

export const isItemSelected = (thaliId: string, id: string) => (state: RootState) =>
  Boolean(state.customizeOwnThali.items[thaliId]?.items.find(item => item.id === id));

export const getItemQuantity = (thaliId: string, id: string) => (state: RootState) =>
  state.customizeOwnThali.items[thaliId]?.items.find(item => item.id === id)?.quantity || 0;

export const getThaliQuantity = (thaliId: string) => (state: RootState) =>
  state.customizeOwnThali.items[thaliId]?.thaliQuantity || 0;

export const getKitchenId = (thaliId: string) => (state: RootState) =>
  state.customizeOwnThali.items[thaliId]?.kitchenId || '';

export default customizeOwnThaliSlice.reducer;