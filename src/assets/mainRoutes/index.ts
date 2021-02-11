import { ItemPage, HomePage, SearchPage } from "pages/index";

const mainPageRoutes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/search",
    component: SearchPage,
    exact: false,
  },
  {
    path: "/item",
    component: ItemPage,
    exact: false,
  },
];

export default mainPageRoutes;
