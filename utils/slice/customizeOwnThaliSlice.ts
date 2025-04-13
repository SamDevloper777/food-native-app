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
  items: Record<string, ThaliItem>; // using a map for O(1) lookup
};

const initialState: ThaliState = {
  items: {},
};

const customizeOwnThaliSlice = createSlice({
  name: 'customizeOwnThali',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<ThaliItem, 'quantity'>>) => {
      const { id, title, cost, url } = action.payload;
      state.items[id] = { id, title, cost, url, quantity: 1 };
    },
    
    removeItem: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
    },
    
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items[action.payload];
      if (item) item.quantity += 1;
    },
    
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items[action.payload];
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        delete state.items[action.payload];
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

// Updated selectors to work with the RootState
export const selectThaliItems = (state: RootState) =>
  Object.values(state.customizeOwnThali.items);

export const isItemSelected = (id: string) => (state: RootState) =>
  Boolean(state.customizeOwnThali.items[id]);

export const getItemQuantity = (id: string) => (state: RootState) =>
  state.customizeOwnThali.items[id]?.quantity || 0;

export default customizeOwnThaliSlice.reducer;