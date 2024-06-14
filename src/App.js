import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import UserInfo from "./presentation/UserInfo";
import EmployeeForm from "./presentation/user/employee-form/EmployeeForm";
import ForgetPassword from "./presentation/user/forget-password/ForgetPassword";
import Login from "./presentation/user/login/Login";
import Register from "./presentation/user/register/Register";
import NavBar from "./shared/Navbar";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <NavBar />,
      children: [
        {
          path: "/userinfo",
          element: <UserInfo />,
        },
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/employee",
          element: <EmployeeForm />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
