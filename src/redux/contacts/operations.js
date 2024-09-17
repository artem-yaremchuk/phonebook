import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", data);
      toast.success(`${data.name} added to contacts`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contact.id}`);
      toast.success(`${contact.name} has been deleted successfully`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { number });
      toast.success(`${name}'s phone number updated`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
