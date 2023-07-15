import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  createContactsThunk,
  deleteContactThunk,
  getContactsThunk,
} from './Thunk';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const thunksArray = [createContactsThunk, deleteContactThunk, getContactsThunk];
const helpFn = type => thunksArray.map(el => el[type]);
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};
const handleFulfilledDel = (state, { payload }) => {
  state.items = state.items.filter(el => el.id !== payload.id);
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder

      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)

      .addCase(createContactsThunk.fulfilled, handleFulfilledAdd)

      .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)

      .addMatcher(isAnyOf(...helpFn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...helpFn(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...helpFn(FULFILLED)), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
