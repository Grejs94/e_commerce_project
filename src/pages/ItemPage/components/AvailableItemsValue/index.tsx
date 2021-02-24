import React, { useEffect, useState } from "react";

import { IChangedItem } from "interfaces/index";

import * as Styles from "./styles";

type Props = {
  item: IChangedItem;
};

const AvailableItemsValue: React.FC<Props> = ({ item }) => {
  const [inputValue, inputSetValue] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [messageBlockade, setMessageBlockade] = useState(false);
  const [incrementButtonDisabled, setIncrementButtonDisabled] = useState(false);
  const [dectrementButtonDisabled, setDectrementButtonDisabled] = useState(
    false
  );

  const handleInputChange = (value: string) => {
    // prevent if value is not a number
    if (!Number(value)) {
      return;
    }

    // prevent negative number
    if (Number(value) < 1) {
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

  const ifNeededDisableIncrementBtn = () => {
    if (inputValue === item.availableItemsToBought) {
      setIncrementButtonDisabled(true);
    }
  };

  const ifNeededDisableDecrBtn = () => {
    if (inputValue === 1) {
      setDectrementButtonDisabled(true);
    }
  };

  const handleButtonsClick = (operation: string) => {
    if (operation === "increment") {
      ifNeededDisableIncrementBtn();

      if (inputValue !== item.availableItemsToBought) {
        inputSetValue(inputValue + 1);
        setDectrementButtonDisabled(false);
      }
    }

    if (operation === "decrement") {
      ifNeededDisableDecrBtn();

      if (inputValue !== 1) {
        inputSetValue(inputValue - 1);
        setIncrementButtonDisabled(false);
      }
    }
  };

  useEffect(() => {
    ifNeededDisableIncrementBtn();
    ifNeededDisableDecrBtn();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incrementButtonDisabled, dectrementButtonDisabled]);

  return (
    <Styles.Wrapper>
      <Styles.Text>Liczba sztuk</Styles.Text>
      <Styles.InputButtonsAndTextContainer>
        <Styles.Button
          onClick={() => handleButtonsClick("decrement")}
          disabled={dectrementButtonDisabled}
        >
          -
        </Styles.Button>
        <Styles.Input
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e.target.value)
          }
        />
        <Styles.Button
          onClick={() => handleButtonsClick("increment")}
          disabled={incrementButtonDisabled}
        >
          +
        </Styles.Button>
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
