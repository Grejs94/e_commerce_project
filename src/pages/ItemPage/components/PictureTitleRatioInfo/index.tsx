import React from "react";

import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const PictureTitleRatioInfo: React.FC<Props> = ({ item }) => {
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
      <Styles.TextInfoContainer>
        <Styles.Title>{item.title}</Styles.Title>
        <Styles.ItemRatioContainer>
          <Styles.ItemRatio>{item.qualityRatio}</Styles.ItemRatio>
          <Styles.RatioIconContainer>
            <Styles.Icon numberOfStars={item.qualityRatioAsNumber} />
          </Styles.RatioIconContainer>
          <Styles.PeopleWhoRated>
            {`${item.assessmentNumber} oceny produktu`}
          </Styles.PeopleWhoRated>
        </Styles.ItemRatioContainer>
      </Styles.TextInfoContainer>
    </Styles.Wrapper>
  );
};

export default PictureTitleRatioInfo;
