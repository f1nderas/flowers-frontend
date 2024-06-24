import { HomePage } from "./pages/HomePage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { AdvicePage } from "./pages/AdvicePage";
import { ContactPage } from "./pages/ContactPage";
import { SinglePage } from "./pages/SinglePage";
import { NotFoundPage } from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "delivery",
    element: <DeliveryPage />,
  },
  {
    path: "advice",
    element: <AdvicePage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  {
    path: "contact/:id",
    element: <SinglePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export { routes };
