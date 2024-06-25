import { useLocation, Link } from "react-router-dom";
import { routes } from "../routes";

const PathDisplay = () => {
  const location = useLocation();
  const routePaths = routes.map((route) => ({
    path: route.path ? `/${route.path}` : "/",
    name: route.name,
  }));

  const currentRoute = routePaths.find(
    (route) => route.path === location.pathname
  );
  const currentPath = currentRoute ? currentRoute.name : "";

  if (location.pathname === "/") {
    return null;
  }
  return (
    <div>
      <Link to="/">Главная</Link>
      {currentPath && ` / ${currentPath}`}
    </div>
  );
};

export { PathDisplay };
