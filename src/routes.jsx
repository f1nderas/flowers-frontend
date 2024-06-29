import {
  HomePage,
  DeliveryPage,
  AdvicePage,
  ContactPage,
  SinglePage,
  NotFoundPage,
  LoginPage,
  PrivatePage,
  FavoritesPage,
} from "./index";

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
    path: "favorites",
    element: (
      <RequireAuth>
        <FavoritesPage />
      </RequireAuth>
    ),
    name: "Избранное",
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
