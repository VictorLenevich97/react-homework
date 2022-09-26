import { configureStore } from "@reduxjs/toolkit";

import ordersSlice from "./ordersStore/ordersSlise";

const store = configureStore({
  reducer: ordersSlice,
});

export default store;
