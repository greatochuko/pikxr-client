import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AppLayout from "./AppLayout";
import { Provider } from "react-redux";
import store from "./store/store";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", element: <HomePage /> }],
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
