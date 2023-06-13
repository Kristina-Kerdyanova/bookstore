import styled from "styled-components";
import { typography } from "./ui/typography";

const StyledApp = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0px auto;
`;


const StyledTitle = styled.h1`
  ${typography.H1};
  margin: 48px 0;
`;

const StyledSubtitle = styled.h1`
  ${typography.H2};
  margin-bottom: 1rem;
`;

const StyledTextBlack = styled.p`
  ${typography.textBlack}
  margin-bottom: 10px;
`;

export { StyledApp, StyledTitle, StyledSubtitle, StyledTextBlack };