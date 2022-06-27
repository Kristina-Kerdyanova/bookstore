import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../ui/colors";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StyledLink = styled(Link)`
  color: #000000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
`;

export { StyledHeader, StyledLink };
