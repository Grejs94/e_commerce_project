import React from "react";

import { CategoriesList, TopBar } from "./components";

type Props = {
  propsVariant: string;
};

const MainMenu: React.FC<Props> = ({ propsVariant }) => {
  return (
    <div>
      <TopBar propsVariant={propsVariant} />
      <CategoriesList />
    </div>
  );
};

export default MainMenu;
