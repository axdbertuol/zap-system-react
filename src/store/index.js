import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      // TODO: gerar nova secretKey aleatória
      secretKey: "my-super-secret-key",
      onError: function (error) {
        // Handle the error.
        console.error(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { store, persistor };
