import React from "react";
import { useDispatch } from "react-redux";

import { fetchProducts } from "features/products/index";

import { MainMenu } from "./components";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  dispatch(fetchProducts());

  return (
    <div>
      <MainMenu />
    </div>
  );
};

export default MainPage;
