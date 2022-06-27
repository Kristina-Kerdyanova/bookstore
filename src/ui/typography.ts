import { css } from "styled-components";

const H1 = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  text-transform: uppercase;

  align-items: center;

  color: #313037;
`;

const H2 = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;

  color: #313037;
`;

const textGrey = css`
  width: 226px;
  height: 24px;

  font-family: "Helios";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #a8a8a8;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const textBlack = css`
  font-family: "Helios";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;

  color: #313037;
`;

export const typography = {
  H1,
  H2,
  textGrey,
  textBlack,
};
