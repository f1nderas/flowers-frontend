import { HomePage } from "./pages/HomePage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { AdvicePage } from "./pages/AdvicePage";
import { ContactPage } from "./pages/ContactPage";
import { SinglePage } from "./pages/SinglePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LoginPage } from "./pages/LoginPage";
import { PrivatePage } from "./pages/PrivatePage";
import { RequireAuth } from "./hoc/RequireAuth";

const routes = [
  {
    index: true,
    element: <HomePage />,
    name: "Главная",
  },
  {
    path: "delivery",
    element: <DeliveryPage />,
    name: "Доставка и оплата",
  },
  {
    path: "advice",
    element: <AdvicePage />,
    name: "Советы флориста",
  },
  {
    path: "login",
    element: <LoginPage />,
    name: "Вход",
  },
  {
    path: "private",
    element: (
      <RequireAuth>
        <PrivatePage />
      </RequireAuth>
    ),
    name: "Личный кабинет",
  },
  {
    path: "contact",
    element: <ContactPage />,
    name: "Контакты",
  },
  {
    path: "contact/:id",
    element: <SinglePage />,
    name: "Контакт",
  },

  {
    path: "*",
    element: <NotFoundPage />,
    name: "Страница не найдена",
  },
];

export { routes };
