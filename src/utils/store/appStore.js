import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../store/cartSlice";

export const appStore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default appStore.reducer;
