import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { value: { Username: "default", Password: "default", Age: 0 } },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = { Username: "", Password: "", Age: 0 };
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
