import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { concentrationApi } from './features/concentration/concentration';
import modeReducer from './features/darkLightMode/modeSlice'
import dataReducer from './features/data/dataSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [concentrationApi.reducerPath]: concentrationApi.reducer,
    mode: modeReducer,
    data: dataReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(concentrationApi.middleware),
});

setupListeners(store.dispatch)
