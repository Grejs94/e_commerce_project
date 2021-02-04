import { SearchContent, HomePageContent } from "pages/MainPage/components";

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
];

export default mainPageRoutes;
