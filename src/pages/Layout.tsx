import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="mt-28">
      <Header />

      <div className="container mx-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
