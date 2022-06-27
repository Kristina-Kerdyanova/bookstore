import styled from "styled-components";
import { colors } from "../../ui/colors";
import { typography } from "../../ui/typography";

const StyledSearchBooks = styled.div``;

const StyledPage = styled.p`
  ${typography.H2};
  margin: 0 20px;
`;

const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonPagination = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  width: 30%;
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
  background: rgba(80, 34, 34, 0.1);
  border: none;
  cursor: pointer;
  cursor: pointer;
  border: 0.5px solid ${colors.gray};
  box-shadow: 5px 5px 5px -5px rgba(80, 34, 34, 0.6);
`;

export { ButtonPagination, ControlContainer, StyledSearchBooks, StyledPage };
