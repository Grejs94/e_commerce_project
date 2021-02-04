import React from "react";

import { CategoriesList, TopBar } from "./components";

type Props = {};

const MainMenu: React.FC<Props> = () => {
  return (
    <div>
      <TopBar />
      <CategoriesList />
    </div>
  );
};

export default MainMenu;
