import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./config/query.js";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </Provider>
);
