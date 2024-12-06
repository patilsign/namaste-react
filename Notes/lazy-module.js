import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestorentMenu from "./src/components/RestorentMenu";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const Grocery = lazy(() => import('./src/components/Grocery'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
/*       {
        path: "/",
        element: <Body />,
      }, */
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading....</h2>}>
            <Grocery />,
          </Suspense>
        ),
      },
      {
        path: "/restorent/:resId",
        element: <RestorentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
