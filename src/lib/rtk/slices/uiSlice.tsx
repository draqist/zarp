import { createSlice } from "@reduxjs/toolkit";

const initialState: StateProps = {
  routeToScrollId: "",
};
interface StateProps {
  routeToScrollId: string;
}
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setRouteToScrollId: (state, action) => {
      state.routeToScrollId = action.payload;
    },
    resetRouteToScrollId: (state) => {
      state.routeToScrollId = "";
    },
  },
});

export const { setRouteToScrollId, resetRouteToScrollId } = uiSlice.actions;
export default uiSlice.reducer;
