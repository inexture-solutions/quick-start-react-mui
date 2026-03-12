import storage from "redux-persist/es/storage";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import { configureStore } from "@reduxjs/toolkit";
import type { AnyAction, Reducer } from "redux";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";
import { appReducer } from "@/store/app/app.reducer.ts";
import { setupListeners } from "@reduxjs/toolkit/query";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { apiService } from "@services/api.service.ts";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const persistConfig: PersistConfig<AppState> = {
  keyPrefix: "pro:",
  key: "pro",
  storage: storage,
  stateReconciler: hardSet,
  whitelist: ["auth", "config"],
  debug: import.meta.env.MODE === "development",
  transforms: [
    encryptTransform({
      secretKey: "336205c57461932b98e543c228f236fb077",
      onError: function (error) {
        console.log("Critical Error Transforming Encrypted Data ==>", error);
      },
    }),
  ],
};

export const store = configureStore({
  devTools: import.meta.env.MODE === "development",
  reducer: {
    // Cast combined reducer to align redux-persist (Action<any>) with RTK's UnknownAction
    app: persistReducer<AppState, AnyAction>(
      persistConfig,
      appReducer as unknown as Reducer<AppState, AnyAction>
    ),
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (gdm) =>
    gdm({
      serializableCheck: false,
    }).concat(apiService.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof appReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
