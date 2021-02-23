import React from "react";

import { IChangedItem } from "interfaces/index";

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

  const expandedDegreeArray = degreeArray.map((degree) => {
    const OpinonPercentage = Math.floor(
      (degree.numberOfDegree * 100) / item.assessmentNumber
    );

    return {
      ...degree,
      opinionPercentage: OpinonPercentage,
    };
  });

  return (
    <Styles.Wrapper>
      <Styles.PaddingContainer>
        <div>
          {expandedDegreeArray.map((line) => (
            <Styles.SingleLineGraphContainer key={line.degreeLVL}>
              <Styles.DegreeASNumber>{line.degreeLVL}</Styles.DegreeASNumber>
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
                  {line.numberOfDegree}
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
