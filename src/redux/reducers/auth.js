import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../libs/supabase";

const initialState = {
  error: null,
  data: {},
  isLoading: false,
};

export const onSignUp = createAsyncThunk(
  "signup",
  async ({ name, email, password }) => {
    try {
      await supabase.auth.signUp({
        email,
        password,
      });
      await supabase.from("pengguna").insert({
        name: name,
        email: email,
        password: password,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const onSignIn = createAsyncThunk(
  "signin",
  async ({ email, password }) => {
    try {
      await supabase.auth.signInWithPassword({
        email,
        password,
      });
      const data = await supabase
        .from("pengguna")
        .select("*")
        .eq("email", email)
        .single();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(onSignUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(onSignUp.fulfilled, (state, action) => {
        state.isLoading = false;
      });
    builder
      .addCase(onSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(onSignIn.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log(action.payload.data);
        state.data = action.payload.data;
        state.error = action.payload.error;
      });
  },
});

export default authSlice.reducer;
