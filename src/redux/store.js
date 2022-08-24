import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { persistedReducer } from './Contacts/slice';
// import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contactApi';
import { filterReducer } from './Contacts/slice';
import { authReducer } from './auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactApi.middleware,
  ],
});
// setupListeners(store.dispatch);

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     [contactApi.reducerPath]: contactApi.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactApi.middleware,
//   ],
// });
// setupListeners(store.dispatch);
