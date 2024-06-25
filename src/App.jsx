import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { routes } from "./routes";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) =>
            route.index ? (
              <Route key={index} index element={route.element} />
            ) : (
              <Route key={index} path={route.path} element={route.element} />
            )
          )}
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
