import "./styles/App.scss";
import Header from "./components/Header";

import { Route, Routes, useMatch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DeliveryPage from "./pages/DeliveryPage";
import { AdvicePage } from "./pages/AdvicePage";
import ContactPage from "./pages/ContactPage";
import { SinglePage } from "./pages/SinglePage";
import Footer from "./components/Footer";

const pageList = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "delivery",
    component: DeliveryPage,
  },
  {
    path: "advice",
    component: AdvicePage,
  },
  {
    path: "contact",
    component: ContactPage,
  },
];

const PathDisplay = () => {
  const matches = pageList.map(({ path }) => useMatch(path)).filter(Boolean);
  const currentPath = matches.length ? matches[0].pattern.path : "";

  return <div>Current Path: {currentPath}</div>;
};

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <PathDisplay />
        <Routes>
          {/* {pageList.map(({ path, component: Component }) => {
            return <Route key={path} path={path} element={<component />} />;
          })} */}
          <Route path="/" element={<HomePage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="advice" element={<AdvicePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="contact/:id" element={<SinglePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
