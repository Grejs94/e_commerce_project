import styled from "@emotion/styled";

import { theme } from "assets/theme";

import { PriceContainer } from "pages/SearchPage/components/ProductsList/styles";

const { colors } = theme;

export {
  PriceBeforeComma,
  PriceAfterComma,
  SmartContainer,
  Image,
} from "pages/SearchPage/components/ProductsList/styles";

export const PriceContainerChanged = styled(PriceContainer)`
  margin-top: 20px;
`;

export const PeopleWhoBought = styled.p`
  margin: 30px 0 0 0;
  color: ${colors.gray_text};
  text-align: left;
`;
