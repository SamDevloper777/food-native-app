import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import cartReducer from "./slice/cartSlice";
import customizeOwnThaliReducer from "./slice/customizeOwnThaliSlice";
import myThaliReducer from "./slice/myThaliSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    customizeOwnThali: customizeOwnThaliReducer,
    myThali: myThaliReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;