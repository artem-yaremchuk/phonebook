import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../../redux/filter/selectors";

export const selectItems = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    const filteredContacts = items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredContacts;
  },
);