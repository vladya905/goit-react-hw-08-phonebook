import { createSelector } from '@reduxjs/toolkit';

const selectContacts = (state) => state.contacts.items;
const selectFilter = (state) => state.contacts.filter;

export const getContacts = createSelector([selectContacts], (contacts) => contacts);

export const getFilter = createSelector([selectFilter], (filter) => filter);

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  }
);