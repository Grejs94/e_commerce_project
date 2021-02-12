import React from "react";
// import ShareIcon from "@material-ui/icons/Share";

import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const InfoComponents: React.FC<Props> = ({ item }) => {
  return (
    <Styles.Wrapper>
      <Styles.HeroImageWrapper>
        <Styles.ResponsiveImage src={item.image} />
      </Styles.HeroImageWrapper>
      <Styles.SpaceBetweenContainer>
        <Styles.PictureNumberContainer>
          <span>1 z 2</span>
        </Styles.PictureNumberContainer>
        <Styles.IconContainer>
          <Styles.ShareIcon />
          <Styles.StarBorderIcon />
        </Styles.IconContainer>
      </Styles.SpaceBetweenContainer>
      <Styles.QualityContainer>
        <span>{item.qualityRatio}</span>
      </Styles.QualityContainer>
    </Styles.Wrapper>
  );
};

export default InfoComponents;
