import { SearchContent, HomePageContent } from "pages/MainPage/components";
import { ItemPage } from "pages/index";

const mainPageRoutes = [
  {
    path: "/",
    component: HomePageContent,
    exact: true,
  },
  {
    path: "/search",
    component: SearchContent,
    exact: false,
  },
  {
    path: "/item",
    component: ItemPage,
    exact: false,
  },
];

export default mainPageRoutes;
