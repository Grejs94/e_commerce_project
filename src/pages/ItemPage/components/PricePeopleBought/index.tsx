import React from "react";

import { setPriceBeforeComma, setAfterComma } from "pages/helpers";
import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const PricePeopleBought: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <Styles.PriceContainerChanged>
        <Styles.PriceBeforeComma>
          {`${setPriceBeforeComma(item.price)},`}
          <Styles.PriceAfterComma>
            {`${setAfterComma(item.price)} zł`}
          </Styles.PriceAfterComma>
        </Styles.PriceBeforeComma>
        {item.smart && (
          <Styles.SmartContainer>
            <Styles.Image src="https://assets.allegrostatic.com/freebox/icons/FREEBOX_NOMARGIN.svg" />
          </Styles.SmartContainer>
        )}
      </Styles.PriceContainerChanged>
      <Styles.PeopleWhoBought>
        {`${item.peopleWhoBought} osoby kupiły`}
      </Styles.PeopleWhoBought>
    </div>
  );
};

export default PricePeopleBought;
