import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

// My imports
import { HomeRoute } from "./routes/home/homeRoute.tsx";
import { ErrorRoute } from "./routes/error/errorRoute.tsx";
import { MemoryRoute } from "./routes/memory/MemoryRoute.tsx";
import { MemoryPlay } from "./pages/memory/pages/MemoryPlay/MemoryPlay.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "memory",
        element: <MemoryRoute />,
        children:[
          {
            path:'play',
            element: <MemoryPlay />
          }
        ]
      },
      {
        path: "chat/",
        element: <div>chat</div>,
      },
      {
        path: "profile/",
        element: <div>Profile</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_DOMINE}
      clientId={import.meta.env.VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
