import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export const setAuthHeaders = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeaders = () => {
  delete goitApi.defaults.headers.common.Authorization;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("/users/signup", credentials);
      setAuthHeaders(data.token);
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "Unknown error";
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await goitApi.post("/users/login", credentials);
      setAuthHeaders(data.token);
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "Unknown error";
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await goitApi.post("/users/logout");
    clearAuthHeaders();
  } catch (error) {
    const errorMessage =
      error.response?.data || error.message || "Unknown error";
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;

    if (!savedToken) {
      return thunkApi.rejectWithValue(
        "Токен відсутній, необхідна автентифікація"
      );
    }

    setAuthHeaders(savedToken);
    try {
      const { data } = await goitApi.get("/users/current");
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "Unknown error";
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
