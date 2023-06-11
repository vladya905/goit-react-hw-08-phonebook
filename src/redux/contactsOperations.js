import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsApi, addContactApi, deleteContactApi } from '../api/apiService';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContactsApi();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContactApi(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContactApi(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);