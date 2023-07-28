import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  total: 0,
};

export const counterSlice = createSlice({
  name: "pcBuilder",
  initialState,
  reducers: {
    selectComponent: (state, action) => {
      if (action.payload.category) {
        if (action.payload.category === "power-supply") {
          state.products["power"] = action.payload;
        } else {
          state.products[`${action.payload.category}`] = action.payload;
        }
        state.total += action.payload?.price;
      }
    },
    removeComponent: (state, action) => {
      if (action.payload.category) {
        const updatedUsers = { ...state.products };
        if (action.payload?.category === "power-supply") {
          delete updatedUsers["power"];
          state.products = updatedUsers;
        } else {
          delete updatedUsers[action.payload?.category];
          state.products = updatedUsers;
        }
        state.total -= action.payload?.price;
      }
    },
  },
});

export const { selectComponent, removeComponent } = counterSlice.actions;

export default counterSlice.reducer;
