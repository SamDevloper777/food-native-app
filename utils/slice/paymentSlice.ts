import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Thali } from "./customizeOwnThaliSlice";

export interface PaymentState {
  userDetails: {
    userId: string;
    address: any;
  };
  paymentDetails: {
    [key: string]: unknown;
  };
  cartDetails: Record<string, Thali>;
}

const initialState: PaymentState = {
  userDetails: {
    userId: '',
    address: {},
  },
  paymentDetails: {},
  cartDetails: {},
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentDetails(state, action: PayloadAction<PaymentState['paymentDetails']>) {
      state.paymentDetails = action.payload;
    },
    setCartDetails(state, action: PayloadAction<PaymentState['cartDetails']>) {
      state.cartDetails = action.payload;
    },
    setUserDetails(state, action: PayloadAction<PaymentState['userDetails']>) {
      state.userDetails = action.payload;
    },
    clearPaymentDetails(state) {
      state.paymentDetails = initialState.paymentDetails;
    }
  },
});

export const { setPaymentDetails, setCartDetails, setUserDetails, clearPaymentDetails } =
  paymentSlice.actions;

export default paymentSlice.reducer;
