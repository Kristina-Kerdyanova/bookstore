import styled from "styled-components";
import { typography } from "../../ui/typography";
import { colors } from "../../ui/colors";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 35px auto;
  border-top: 1px ${colors.secondary} solid;
`;

const ContentRight = styled.p`
  ${typography.textGrey};
  display: flex;
  justify-content: right;
`;

const ContentLeft = styled.p`
${typography.textGrey};
  display: flex;
  justify-content: left;
`

export { StyledFooter, ContentRight, ContentLeft };

