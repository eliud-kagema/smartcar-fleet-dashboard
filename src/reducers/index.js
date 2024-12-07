import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;  
    },
    logoutUser: (state) => {
      state.user = null;
      state.loading = false; 
    },
    setLoading: (state) => {
      state.loading = true;  
    },
  },
});

export const { setUser, logoutUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
