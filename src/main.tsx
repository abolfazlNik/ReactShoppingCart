import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.js";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./config/query.js";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "./store/store.js";
const rootDiv = document.getElementById("root");
if (rootDiv) {
  ReactDOM.createRoot(rootDiv).render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}
