import React from "react";

import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const LeftSiteComponentTexts: React.FC<Props> = ({ item }) => {
  return (
    <Styles.Wrapper>
      <Styles.PaddingWithBorderLeftContainer>
        <Styles.FinalDegreeAsText>
          {item.degree.averageGrande.inWords}
        </Styles.FinalDegreeAsText>
        <Styles.AverageDegree>
          {`${item.degree.averageGrande.intAsString},${item.degree.averageGrande.decimalAsString}`}
          <Styles.MaxAverageDegreePossible>/5</Styles.MaxAverageDegreePossible>
        </Styles.AverageDegree>
        <Styles.NumberOfDegreeAndReview>
          {`${item.degree.sum} ocen`}
        </Styles.NumberOfDegreeAndReview>
      </Styles.PaddingWithBorderLeftContainer>
    </Styles.Wrapper>
  );
};

export default LeftSiteComponentTexts;
