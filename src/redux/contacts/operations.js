import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitApi.get("/contacts");
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "Unknown error";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await goitApi.post(`/contacts/`, {
        name: body.username,
        number: body.usernumber,
      });
      return data;
    } catch (error) {
      console.error("Error adding contact:", error.response?.data);
      return thunkAPI.rejectWithValue(
        error.response?.data || error.message || "Unknown error"
      );
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await goitApi.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "Unknown error";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ contactId, contactData }, thunkAPI) => {
    try {
      const { data } = await goitApi.patch(
        `/contacts/${contactId}`,
        contactData
      );
      return data;
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "Unknown error";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
