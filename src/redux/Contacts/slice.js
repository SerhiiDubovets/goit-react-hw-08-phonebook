import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contactSlice',
//   storage,
//   whitelist: ['contacts'],
// };

export const contactSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = contactSlice.actions;
// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer
// );
export const filterReducer = contactSlice.reducer;
export const getFilter = state => state.filter.filter;
