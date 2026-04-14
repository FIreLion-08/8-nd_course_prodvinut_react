import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import { trackSliceReducer } from '@/store/features/trackSlice';
import { authSliceReducer } from './features/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: combineReducers({
      tracks: trackSliceReducer,
      auth: authSliceReducer,
    }),
  });
};

// Определить тип хранилища makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Выводим типы "rootState" и "AppDispatch" из самого хранилища
type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Для старого TS
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
