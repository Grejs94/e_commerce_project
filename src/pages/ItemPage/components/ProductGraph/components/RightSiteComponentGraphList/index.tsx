import React from "react";

import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const RightSiteComponentGraphList: React.FC<Props> = ({ item }) => {
  return (
    <Styles.Wrapper>
      <Styles.PaddingContainer>
        <div>
          {item.degree.degrees.map((line) => (
            <Styles.SingleLineGraphContainer key={line.numbering}>
              <Styles.DegreeASNumber>{line.numbering}</Styles.DegreeASNumber>
              <Styles.StarContainer>
                <Styles.StarIcon src="https://assets.allegrostatic.com/metrum/icon/star-full-fdefd1d2d2.svg" />
              </Styles.StarContainer>

              <Styles.HorizontalBarGraphEmpty>
                <Styles.HorizontalBarGraphFilled
                  opinionPercentage={line.opinionPercentage}
                />
              </Styles.HorizontalBarGraphEmpty>
              <Styles.GradesNumberContainer>
                <Styles.GradesNumberAtThisLevel>
                  {line.numberRatingsIssued}
                </Styles.GradesNumberAtThisLevel>
              </Styles.GradesNumberContainer>
            </Styles.SingleLineGraphContainer>
          ))}
        </div>
      </Styles.PaddingContainer>
    </Styles.Wrapper>
  );
};

export default RightSiteComponentGraphList;
