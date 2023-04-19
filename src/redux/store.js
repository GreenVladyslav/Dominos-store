import { configureStore } from '@reduxjs/toolkit';
import pizzas from './slices/pizzasSlice';
import drinks from './slices/drinksSlice';
import sides from './slices/sidesSlice';
import desserts from './slices/dessertsSlice';
import filters from './slices/filtersSlice';
import cart from './slices/cartSlice';
import getById from './slices/singlePageSlice';
import user from './slices/userSlice';
import forms from './slices/formSlice';

export default configureStore({
  reducer: { pizzas, drinks, sides, desserts, filters, cart, getById, user, forms },
  devTools: process.env.NODE_ENV !== 'production',
});

// import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import pizzas from './slices/pizzasSlice';
// import drinks from './slices/drinksSlice';
// import sides from './slices/sidesSlice';
// import desserts from './slices/dessertsSlice';
// import filters from './slices/filtersSlice';
// import cart from './slices/cartSlice';
// import getById from './slices/singlePageSlice';
// import user from './slices/userSlice';
// import forms from './slices/formSlice';

// const rootReducer = combineReducers({
//   pizzas,
//   drinks,
//   sides,
//   desserts,
//   filters,
//   cart,
//   getById,
//   user,
//   forms,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export const persistor = persistStore(store);
// export default store;
