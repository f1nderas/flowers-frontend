import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { routes } from "./routes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
