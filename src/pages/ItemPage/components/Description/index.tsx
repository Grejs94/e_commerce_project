import React from "react";

import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const Description: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <Styles.SectionTitle>Opis</Styles.SectionTitle>
      <Styles.HeroImageWrapper>
        <Styles.ResponsiveImage src={item.image} />
      </Styles.HeroImageWrapper>
      <Styles.TextInfoContainer>
        <Styles.Title>{item.title}</Styles.Title>
      </Styles.TextInfoContainer>
      <Styles.ItemTextInfo>{item.description}</Styles.ItemTextInfo>
    </div>
  );
};

export default Description;
