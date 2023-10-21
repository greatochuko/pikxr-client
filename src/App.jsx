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
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    element: (
      <Authenticate>
        <AppLayout />
      </Authenticate>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile/:username",
        element: <Profile />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "*", element: <PageNotFound /> },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <h1>asljk</h1> */}
    </Provider>
  );
}

export default App;
