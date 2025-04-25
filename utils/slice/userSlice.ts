import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeliveryAddress {
  title: string;
  address: string;
  isDefault: boolean;
}

interface UserState {
  userId: string | null;
  userName: string | null;
  phoneNumber: string | null;
  emailAddress: string | null;
  address: DeliveryAddress[] | null;
  profilePicture: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  paymentMethod: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userId: null,
  userName: null,
  phoneNumber: null,
  emailAddress: null,
  address: null,
  profilePicture: null,
  accessToken: null,
  refreshToken: null,
  paymentMethod: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload, isLoading: false, error: null };
    },
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearUser: (state) => {
      return { ...initialState };
    },
    setDefaultAddress: (state, action: PayloadAction<{ title: string, isDefault: boolean }>) => {
      if (state.address) {
        state.address = state.address.map((addr) =>
          addr.title === action.payload.title
            ? { ...addr, isDefault: action.payload.isDefault }
            : { ...addr, isDefault: false }
        );
      }
    },
  },
});

export const { setUser, updateUser, setLoading, setError, clearUser, setDefaultAddress } = userSlice.actions;
export default userSlice.reducer;
