import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  ordersList: JSON.parse(localStorage.getItem("ordersList")) || [],
  order: { status: "In Progress" },
};

export const ordersSlice = createSlice({
  name: "ordersSlice",
  initialState: initialValue,
  reducers: {
    orderCreate(state, action) {
      return {
        ordersList: [...state.ordersList],
        order: action.payload,
      };
    },
    ordersListCreate(state, action) {
      return { ordersList: action.payload, order: state.order };
    },
    orderDelete(_, action) {
      return { ordersList: action.payload, order: {} };
    },
    orderEdit(state, action) {
      return {
        ordersList: state.ordersList.map((order) =>
          order.id === action.payload.id
            ? {
                ...order,
                isEdit: !order.isEdit,
              }
            : order
        ),
        order: action.payload,
      };
    },
    orderEditSuccsess(state, action) {
      return {
        ordersList: state.ordersList.map((order) =>
          order.id === action.payload ? state.order : order
        ),
      };
    },
  },
});

export const {
  orderCreate,
  ordersListCreate,
  orderDelete,
  orderEdit,
  orderEditSuccsess,
} = ordersSlice.actions;
export default ordersSlice.reducer;
