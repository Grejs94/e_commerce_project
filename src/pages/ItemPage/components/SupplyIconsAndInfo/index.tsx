import React from "react";

import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";
import { data } from "./helper";

type Props = {
  item: IChangedItem;
};

const SupplyIconsAndInfo: React.FC<Props> = ({ item }) => {
  let hide = false;

  //  set the flag when the component is not to be displayed when it is not known when the delivery will take place
  if (!item.supplyInfo) {
    hide = true;
  }

  return (
    <div>
      {data.map((information) => {
        const body = (
          <>
            <Styles.LeftSiteContainer>
              <Styles.IconContainer>
                <Styles.Icon src={information.iconUrl} />
              </Styles.IconContainer>
              <Styles.TextContainer>
                <p>
                  {/* if components shows delivery days time, add additional information about the number of days */}

                  {information.id === 1
                    ? `${information.text}${item.supplyTime} dni`
                    : information.text}
                </p>

                {/* if components shows free delevery show additional component with text */}
                {information.id === 3 && (
                  <Styles.ExtraText>{information.extraText}</Styles.ExtraText>
                )}
              </Styles.TextContainer>
            </Styles.LeftSiteContainer>
            <div>
              {information.extraButton && (
                <Styles.WordLinkText>
                  {information.extraButton}
                </Styles.WordLinkText>
              )}
            </div>
          </>
        );

        return (
          <Styles.SpaceBetweenContainer key={information.id}>
            {/* if there is no super short time of supply (supply got id 1) dont show this line*/}
            {hide && information.id === 1 ? null : body}
          </Styles.SpaceBetweenContainer>
        );
      })}
    </div>
  );
};

export default SupplyIconsAndInfo;
