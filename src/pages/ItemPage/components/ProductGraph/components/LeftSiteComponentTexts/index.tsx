import React from "react";

import * as Styles from "./styles";

type Props = {};

const LeftSiteComponentTexts: React.FC<Props> = () => {
  return (
    <Styles.Wrapper>
      <Styles.PaddingWithBorderLeftContainer>
        <Styles.FinalDegreeAsText>Rewelayjny</Styles.FinalDegreeAsText>
        <Styles.AverageDegree>
          4,84{" "}
          <Styles.MaxAverageDegreePossible>/5</Styles.MaxAverageDegreePossible>
        </Styles.AverageDegree>
        <Styles.NumberOfDegreeAndReview>
          31 ocen i 2 recenzji
        </Styles.NumberOfDegreeAndReview>
      </Styles.PaddingWithBorderLeftContainer>
    </Styles.Wrapper>
  );
};

export default LeftSiteComponentTexts;
