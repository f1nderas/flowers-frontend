import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PathDisplay } from "./components/PathDisplay";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <PathDisplay />
      </div>

      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export { Layout };
