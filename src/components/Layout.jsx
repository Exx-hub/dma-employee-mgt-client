import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const isAuthenticated = false;
  return (
    <main className="mx-auto w-[80%] max-w-[1250px] relative">
      <Navbar />
      {isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />}
      <h1 className="w-full bg-gray-500">FOOTER</h1>
    </main>
  );
}

export default Layout;
