import React, { useState } from "react";

import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const AvailableItemsValue: React.FC<Props> = ({ item }) => {
  const [inputValue, inputSetValue] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [messageBlockade, setMessageBlockade] = useState(false);

  const handleInputChange = (value: string) => {
    if (!Number(value)) {
      return;
    }

    if (Number(value) > item.availableItemsToBought) {
      // if input value is bigger then available item show message else set new input value, added blockade to stop from multiple setMessageBloskkade(false) when clicking multiple time per sec (message hide to fast)
      setMessageBlockade(true);

      if (messageBlockade) {
        return;
      } else {
        setShowMessage(true);

        setTimeout(() => {
          setShowMessage(false);
          setMessageBlockade(false);
        }, 2000);
      }

      return;
    }

    inputSetValue(Number(value));
  };

  return (
    <Styles.Wrapper>
      <Styles.Text>Liczba sztuk</Styles.Text>
      <Styles.InputButtonsAndTextContainer>
        <Styles.Button>-</Styles.Button>
        <Styles.Input
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e.target.value)
          }
        />
        <Styles.Button>+</Styles.Button>
        <Styles.AvailableItemsText>{`z ${item.availableItemsToBought} sztuk`}</Styles.AvailableItemsText>
      </Styles.InputButtonsAndTextContainer>
      <Styles.ToBigValueMessageContainer>
        {showMessage ? (
          <span>{`Podaj min. 1, maks. ${item.availableItemsToBought}`}</span>
        ) : null}
      </Styles.ToBigValueMessageContainer>
    </Styles.Wrapper>
  );
};

export default AvailableItemsValue;
