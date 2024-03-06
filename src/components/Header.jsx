import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const links = [
  { title: "checkout", pathname: "/checkout" },
  { title: "products", pathname: "/products" },
  { title: "todos", pathname: "/todos" },
];

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <header className="fixed top-0 w-full h-20 bg-blue-50 px-10 flex items-center justify-evenly">
      {links.map((link, index) => (
        <Link
          to={link.pathname}
          key={index}
          className={`font-semibold text-gray-600 ${
            pathname === link.pathname && "text-blue-700"
          }`}
        >
          {link.title}
        </Link>
      ))}
      <Sidebar />
    </header>
  );
};

export default Header;
