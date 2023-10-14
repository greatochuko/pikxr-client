import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./pages/AppLayout";
import { Provider } from "react-redux";
import store from "./store/store";
import Authenticate from "./components/Authenticate";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Authenticate>
            <HomePage />
          </Authenticate>
        ),
      },
      {
        path: "/explore",
        element: (
          <Authenticate>
            <Explore />
          </Authenticate>
        ),
      },
      {
        path: "/notifications",
        element: (
          <Authenticate>
            <Notifications />
          </Authenticate>
        ),
      },
      {
        path: "/settings",
        element: (
          <Authenticate>
            <Settings />
          </Authenticate>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
