import About from "../components/About";
import Contact from "../components/Contact";
import Body from "../components/Body";
import Grocery from "../components/Grocery";
import RestorentMenu from "../components/RestorentMenu";
import React, { lazy, Suspense } from "react";

export const appRouter = [
          {
            path: "/",
            element: <Body />,
          },
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
                <Grocery/>,
              </Suspense>
            ),
          },
          {
            path: "/restorent/:resId",
            element: <RestorentMenu />,
          },
        ];
const Grocery = lazy(() => import("../components/Grocery"));

