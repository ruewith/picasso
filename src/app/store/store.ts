import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postAPI } from '../../entities/Post';

const rootReducer = combineReducers({
  [postAPI.reducerPath]: postAPI.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore();
