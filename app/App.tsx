import { RouterProvider } from "react-router";
import { routes } from "@/routes";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading="Initializing...">
        <RouterProvider router={routes} />
      </PersistGate>
    </Provider>
  );
};

export default App;
