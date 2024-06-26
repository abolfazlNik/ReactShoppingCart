import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import queryClient from "../config/query";
import { getProducts, getTodos } from "../api/products";

const links = [
  { title: "checkout", pathname: "/checkout" },
  { title: "products", pathname: "/products" },
  { title: "todos", pathname: "/todos" },
  { title: "posts", pathname: "/posts" },
];

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <header className="fixed top-0 w-full h-20 bg-blue-50 px-10 flex items-center justify-evenly z-10">
      {links.map((link, index) => (
        <Link
          onMouseEnter={async () => {
            await queryClient.prefetchQuery({
              queryKey: ["getProducts"],
              queryFn: getProducts,
            });
            await queryClient.prefetchInfiniteQuery({
              queryKey: ["getTodos"],
              queryFn: getTodos,
              initialPageParam: 1,
            });
          }}
          to={link.pathname}
          key={index}
          className={`font-semibold ${
            pathname === link.pathname ? "text-blue-700" : "text-gray-600"
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
