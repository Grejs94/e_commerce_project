import React from "react";

import { IChangedItem } from "interfaces/index";

import { data } from "./helper";
import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const RightSiteComponentGraphList: React.FC<Props> = ({ item }) => {
  let degreeArray = [
    {
      numberOfDegree: item.degree["degree5"],
      degreeLVL: "5",
    },
    {
      numberOfDegree: item.degree["degree4"],
      degreeLVL: "4",
    },
    {
      numberOfDegree: item.degree["degree3"],
      degreeLVL: "3",
    },
    {
      numberOfDegree: item.degree["degree2"],
      degreeLVL: "2",
    },
    {
      numberOfDegree: item.degree["degree1"],
      degreeLVL: "1",
    },
  ];

  console.log(degreeArray);

  // const degreeArray = ["5", "4", "3", "2", "1"];

  return (
    <Styles.Wrapper>
      <Styles.PaddingContainer>
        <Styles.AllDegreeGraphsContainer>
          {degreeArray.map((line) => (
            <Styles.SingleLineGraphContainer key={line.degreeLVL}>
              <Styles.DegreeASNumber>{line.degreeLVL}</Styles.DegreeASNumber>
              <Styles.StarContainer>
                <Styles.StarIcon src="https://assets.allegrostatic.com/metrum/icon/star-full-fdefd1d2d2.svg" />
              </Styles.StarContainer>

              <Styles.HorizontalBarGraphEmpty>
                <Styles.HorizontalBarGraphFilled />
              </Styles.HorizontalBarGraphEmpty>
              <Styles.GradesNumberAtThisLevel>
                {line.numberOfDegree}
              </Styles.GradesNumberAtThisLevel>
            </Styles.SingleLineGraphContainer>
          ))}
        </Styles.AllDegreeGraphsContainer>
      </Styles.PaddingContainer>
    </Styles.Wrapper>
  );
};

export default RightSiteComponentGraphList;

// StarIcon
// AllHorizontalBarsContainer
// HorizontalBarGraphEmpty
// HorizontalBarGraphFilled
// GradesNumberAtThisLevel
