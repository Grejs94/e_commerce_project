import React from "react";

import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";
import {
  RightSiteComponentGraphList,
  LeftSiteComponentTexts,
} from "./components";

type Props = {
  item: IChangedItem;
};

const ProductGraph: React.FC<Props> = ({ item }) => {
  console.log(item);

  return (
    <Styles.Wrapper>
      <Styles.SectionTitle>Opinie o produkcie</Styles.SectionTitle>
      <Styles.BFContainer>
        <LeftSiteComponentTexts item={item} />
        <RightSiteComponentGraphList item={item} />
      </Styles.BFContainer>
    </Styles.Wrapper>
  );
};

export default ProductGraph;
