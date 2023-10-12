import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./pages/AppLayout";
import { Provider } from "react-redux";
import store from "./store/store";
import Authenticate from "./components/Authenticate";

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
