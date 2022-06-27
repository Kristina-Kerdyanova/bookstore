import { createSlice } from "@reduxjs/toolkit";

interface IUserStore {
  isAuth: boolean;
  email: string | null;
  name: string | undefined;
}

const initialState: IUserStore = {
  isAuth: false,
  email: null,
  name: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.email = action.payload;
    },

    unsetUser: (state) => {
      state.isAuth = false;
      state.email = null;
    },

    setUserName: (state, action) => {
      state.name = action.payload;
    }
  },
})

export const { setUser, unsetUser, setUserName} = userSlice.actions;
export default userSlice.reducer;
