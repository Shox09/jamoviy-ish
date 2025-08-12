import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <div>
            <Home />
          </div>
        ),
      },
      { path: "about", element: <div>about</div> },
      { path: "contact_product", element: <div>contact_product</div> },
      { path: "product_avtohim", element: <div>produvt_avtohim</div> },
      { path: "product_ag-tech", element: <div>product_ag=tech</div> },
      { path: "contact", element: <div>contact</div> },
      { path: "main", element: <div>Main</div> },
    ],
  },
]);
