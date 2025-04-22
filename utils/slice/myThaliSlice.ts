import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define the type for each menu item
type MenuItem = {
  id: string;
  title: string;
  url: string;
};

type FilterParams = {
  mainCourse: string[];
  starters: string[];
  desserts: string[];
};

type ThaliState = {
  items: Record<string, MenuItem>;
  filterParams: FilterParams;
};

const initialState: ThaliState = {
  items: {},
  filterParams: {
    mainCourse: [],
    starters: [],
    desserts: [],
  },
};

const myThaliSlice = createSlice({
  name: 'myThali',
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ id: string; title: string; url: string; category: keyof FilterParams }>
    ) => {
      const { id, title, url, category } = action.payload;

      // Save full item to `items`
      state.items[id] = { id, title, url };

      // Push ONLY title to the category array if it's not already there
      if (!state.filterParams[category].includes(title)) {
        state.filterParams[category].push(title);
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items[id];
      if (!item) return;

      // Remove from items
      delete state.items[id];

      // Remove the title from all filterParams
      for (const category of Object.keys(state.filterParams) as (keyof FilterParams)[]) {
        state.filterParams[category] = state.filterParams[category].filter((title) => title !== item.title);
      }
    },

    clearAll: (state) => {
      state.items = {};
      state.filterParams = {
        mainCourse: [],
        starters: [],
        desserts: [],
      };
    },

    setFilterParams: (state, action: PayloadAction<FilterParams>) => {
      state.filterParams = action.payload;
    },

    addToFilterCategory: (
      state,
      action: PayloadAction<{ category: keyof FilterParams; item: string }>
    ) => {
      const { category, item } = action.payload;
      if (!state.filterParams[category].includes(item)) {
        state.filterParams[category].push(item);
      }
    },

    removeFromFilterCategory: (
      state,
      action: PayloadAction<{ category: keyof FilterParams; item: string }>
    ) => {
      const { category, item } = action.payload;
      state.filterParams[category] = state.filterParams[category].filter((i) => i !== item);
    },
  },
});

export const {
  addItem,
  removeItem,
  clearAll,
  setFilterParams,
  addToFilterCategory,
  removeFromFilterCategory,
} = myThaliSlice.actions;

export const selectThaliItems = (state: RootState) => Object.values(state.myThali.items);
export const selectFilterParams = (state: RootState) => state.myThali.filterParams;
export const isItemSelected = (id: string) => (state: RootState) => Boolean(state.myThali.items[id]);

export default myThaliSlice.reducer;
