// handle item price display method because API price is very bad eg. (11 ; 11.99; 11.9) several formats!!!

export const setPriceBeforeComma = (number: number) => {
  const gotComma = number.toString().includes(".");
  const indexOfComma = number.toString().indexOf(".");

  let beforeComma = number.toString().slice(0, indexOfComma);

  if (gotComma) {
    return beforeComma;
  } else {
    return number.toString();
  }
};

export const setAfterComma = (number: number) => {
  const gotComma = number.toString().includes(".");
  const indexOfComma = number.toString().indexOf(".");

  let afterComma = number.toString().slice(indexOfComma + 1);

  if (afterComma.length === 1) {
    afterComma = `${afterComma}${"0"}`;
  }

  if (gotComma) {
    return afterComma;
  } else {
    return "00";
  }
};
