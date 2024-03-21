import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorComponent from "./components/ErrorComponent";
import Dashboard from "./pages/Dashboard";
import Sites from "./pages/Sites";
import CreateSite from "./pages/CreateSite";
import SiteView from "./pages/SiteView";
import AddEmployee from "./pages/AddEmployee";
import Employees from "./pages/Employees";
import EmployeeDetails from "./pages/EmployeeDetails";
import Payroll from "./pages/Payroll";
import TestHome from "./pages/TestHome";
import Login from "./pages/Login";

function App() {
  // PAGES
  // dashboard / home - site count and employee count?
  // sites list?
  // create site -- // create site, add members, assign foreman
  // site view - time in function here --  // site dropdown, then display member list
  // create employee
  // employee view - actions to delete update employee
  // payroll? TBA

  // need login page - and protected routes. if not logged in cannot access anything but sites
  // https://blog.probirsarkar.com/privateroute-in-react-router-v6-how-to-create-protected-routes-in-your-react-app-bcda4c409360
  //https://www.reddit.com/r/reactjs/comments/181odpr/how_can_i_implement_protected_routes_using/

  // need redux toolkit for login??
  // rtk folder structure https://medium.com/@fdikmen/a-redux-toolkit-project-structure-guide-58093baa88a5

  // backend
  // --- create login endpoints

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorComponent />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/sites",
          element: <Sites />,
        },
        {
          path: "/sites/create",
          element: <CreateSite />,
        },
        {
          path: "/sites/:id",
          element: <SiteView />,
        },
        {
          path: "/employees",
          element: <Employees />,
        },
        {
          path: "/employees/create",
          element: <AddEmployee />,
        },
        {
          path: "/employees/:id",
          element: <EmployeeDetails />,
        },
        {
          path: "/payroll",
          element: <Payroll />,
        },
        {
          path: "/test",
          element: <TestHome />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
