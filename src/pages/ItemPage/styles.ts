import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 10px;
  min-height: 200vh;
`;

// common components

export const SpaceBetweenContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const HeroImageWrapper = styled.div`
  padding: 10px;
  height: 47vh;
  width: auto;
  display: flex;
  justify-content: center;
`;

export const ResponsiveImage = styled.img`
  width: auto;
  height: 100%;
`;

// info components

// xxx

// transaction additionalInfo components (icons; info about supply, payment)

// mapped items here using SpaceBetweenContainer and x

export const AdditionalInfoWrapper = styled.div``;

export const InfoWithIconsContainer = styled.div``;
export const WordLinkText = styled.span``;

// description section components

// HeroImageWrapper

// ResponsiveImage

export const DescriptonContainer = styled.div`
  :p {
  }
`;

// Hero Buttons position (fixed/sticky dont remember now)

export const HeroButtonsContainer = styled.div``;

export const SingleHeroButtonContainer = styled.div``;

// SpaceBetweenContainer

export const Hr = styled.hr`
  background-image: initial;
  background-color: rgb(34, 38, 39);
  border-color: initial;
  background: #ddd;
  border: 0;
  box-sizing: border-box;
  display: block;
  height: 1px;
  margin: 0;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
`;
