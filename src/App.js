import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./routes";
import Loading from "./pages/Loading";
import { store, persistor } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
