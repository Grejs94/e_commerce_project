import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectItemsFound, setItemsFound } from "features/products/index";
import { IChangedItem } from "interfaces/index";
import { LoadingIndicator } from "components";
import { formatToPln } from "utils/moneyFormat";

import * as Styles from "./styles";

type Props = {};

const ProductsList: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItemsFound);

  return (
    <div>
      {items.map((item: IChangedItem) => {
        // handle item price display method because API price is very bad eg. (11 ; 11.99; 11.9) several formats!!!

        let price = { beforeComma: "0", afterComma: "0" };

        const setPrice = (number: number) => {
          const gotComma = number.toString().includes(".");

          const indexOfComma = number.toString().indexOf(".");

          let beforeComma = item.price.toString().slice(0, indexOfComma);

          let afterComma = item.price.toString().slice(indexOfComma + 1);

          if (afterComma.length === 1) {
            afterComma = `${afterComma}${"0"}`;
          }

          if (gotComma) {
            price = {
              beforeComma: beforeComma,
              afterComma: afterComma,
            };
          } else {
            price = {
              beforeComma: number.toString(),
              afterComma: "00",
            };
          }
        };
        setPrice(item.price);

        const handleAddToBaskket = (id: number) => {
          const toggleButtonVisible = () => {
            const setButtonVisible = (bool: boolean) =>
              items.map((item: IChangedItem) => ({
                ...item,
                showButton: item.id === id ? bool : item.showButton,
              }));

            //first setTimeout is to wait until Material-ul button animation stops
            setTimeout(() => {
              dispatch(setItemsFound(setButtonVisible(false)));
            }, 500);
            // second setTimeout is to bring button back to live
            setTimeout(() => {
              dispatch(setItemsFound(setButtonVisible(true)));
            }, 2000);
          };
          toggleButtonVisible();
        };

        const SupplyInfo = () => {
          if (item.supplyInfo) {
            return (
              <Styles.GrayInfoBold>
                {item.supplyTime === 1 ? "dostawa jutro" : "dostawa pojutrze"}
              </Styles.GrayInfoBold>
            );
          }

          return null;
        };

        const GreatSeller = () => {
          if (item.greatSeller) {
            return (
              <Styles.greatSellerContainer>
                od
                <Styles.greatSellerImageContainer>
                  <Styles.Image src="https://assets.allegrostatic.com/metrum/icon/super-seller-af2bec0d44.svg" />
                </Styles.greatSellerImageContainer>
                Super Sprzedawcy
              </Styles.greatSellerContainer>
            );
          }

          return null;
        };

        return (
          <Styles.ItemContainer key={item.id}>
            <Styles.ImageContainer>
              <Styles.Image src={item.image} />
            </Styles.ImageContainer>
            <Styles.InfoContainer>
              <p>{item.title}</p>
              <GreatSeller />
              <Styles.PriceContainer>
                <Styles.PriceBeforeComma>
                  {`${price.beforeComma},`}
                  <Styles.PriceAfterComma>
                    {`${price.afterComma} zł`}
                  </Styles.PriceAfterComma>
                </Styles.PriceBeforeComma>
                {item.smart && (
                  <Styles.SmartContainer>
                    <Styles.Image src="https://assets.allegrostatic.com/freebox/icons/FREEBOX_NOMARGIN.svg" />
                  </Styles.SmartContainer>
                )}
              </Styles.PriceContainer>
              <div>
                <Styles.GrayInfo>33 osoby kupiły</Styles.GrayInfo>
                <Styles.GrayInfo>
                  {`${formatToPln(item.deliveryCost)} z dostawą`}
                </Styles.GrayInfo>
                <SupplyInfo />
              </div>
              <Styles.ButtonContainer>
                {item.showButton ? (
                  <Styles.Button onClick={() => handleAddToBaskket(item.id)}>
                    Dodaj do koszyka
                  </Styles.Button>
                ) : (
                  <LoadingIndicator height={25} />
                )}
              </Styles.ButtonContainer>
            </Styles.InfoContainer>
          </Styles.ItemContainer>
        );
      })}
    </div>
  );
};

export default ProductsList;
