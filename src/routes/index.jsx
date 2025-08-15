import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import About from '../pages/About'
import ContactProduct from '../pages/ContactProduct'

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
      { path: "about", element: <About /> },
      { path: "contact_product", element: <ContactProduct/> },
      { path: "product_avtohim", element: <div>produvt_avtohim</div> },
      { path: "product_ag-tech", element: <div>product_ag=tech</div> },
      { path: "contact", element: <div>contact</div> },
      { path: "main", element: <div>Main</div> },
    ],
  },
]);
