import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout/Layout";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <App /> }],
  },
];

export const router = createBrowserRouter(routes);
