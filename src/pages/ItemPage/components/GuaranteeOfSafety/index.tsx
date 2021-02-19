import React from "react";

import * as Styles from "./styles";

type Props = {};

const GuaranteeOfSafety: React.FC<Props> = () => {
  return (
    <Styles.Wrapper>
      <Styles.IconContainer>
        <Styles.Icon />
      </Styles.IconContainer>
      <Styles.TextContainer>
        <Styles.BoldText>Allegro gwarantuje bezpieczne zakupy</Styles.BoldText>
        <Styles.Text>
          Otrzymasz kupiony przedmiot albo zwrócimy Ci pieniądze.{" "}
          <Styles.TextAsLink>Sprawdź szczegóły</Styles.TextAsLink>.
        </Styles.Text>
      </Styles.TextContainer>
    </Styles.Wrapper>
  );
};

export default GuaranteeOfSafety;
