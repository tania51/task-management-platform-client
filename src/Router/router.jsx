import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Layout from "../Layout/Layout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import CreateTask from "../Pages/Dashboard/CreateTask/CreateTask";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
          loader: () => fetch('http://localhost:5002/allTask')
        },
        {
          path: "/dashboard/create-task",
          element: <CreateTask></CreateTask>
        },
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/signUp",
      element: <Registration></Registration>
    },
  ]);

export default router;