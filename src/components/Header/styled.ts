import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  column-gap: 15px;

  @media (max-width: 470px) {
    flex-wrap: wrap;
    row-gap: 15px;
  }
`;

const StyledLink = styled(Link)`
  color: #000000;
  display: flex;
  text-decoration: none;
  /* justify-content: space-around; */
  align-items: center;
  /* margin-right: 10px; */
`;

export { StyledHeader, StyledLink };
