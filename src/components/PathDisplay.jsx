import { useLocation } from "react-router-dom";
import { routes } from "../routes";

const PathDisplay = () => {
  const location = useLocation();
  const routePaths = routes.map((route) => route.path);
  const currentPath = routePaths.includes(location.pathname)
    ? location.pathname
    : "";

  return <div>Current Path: {currentPath}</div>;
};

export { PathDisplay };
