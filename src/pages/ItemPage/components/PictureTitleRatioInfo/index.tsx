import React from "react";

import { IChangedItem } from "interfaces/index";
import { Carousel } from "./components";

import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const PictureTitleRatioInfo: React.FC<Props> = ({ item }) => {
  return (
    <Styles.Wrapper>
      <Carousel item={item} />
      <Styles.SpaceBetweenContainer>
        <div></div>
        <div>
          <Styles.ShareIcon />
          <Styles.StarBorderIcon />
        </div>
      </Styles.SpaceBetweenContainer>
      <Styles.TextInfoContainer>
        <Styles.Title>{item.title}</Styles.Title>
        <Styles.ItemRatioContainer>
          <Styles.ItemRatio>{`${item.degree.averageGrande.intAsString},${item.degree.averageGrande.decimalAsString}`}</Styles.ItemRatio>
          <Styles.RatioIconContainer>
            <Styles.Icon numberOfStars={item.degree.averageGrande.asNumber} />
          </Styles.RatioIconContainer>
          <Styles.PeopleWhoRated>
            {`${item.degree.sum} oceny produktu`}
          </Styles.PeopleWhoRated>
        </Styles.ItemRatioContainer>
      </Styles.TextInfoContainer>
    </Styles.Wrapper>
  );
};

export default PictureTitleRatioInfo;
