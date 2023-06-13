import styled from "styled-components";
import { colors } from "../../ui/colors";

const StyledSearchForm = styled.form`
  max-width: 542px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1 solid black;
  @media (max-width: 470px) {
    order: 2;
  }
`;

const StyledInput = styled.input`
  max-width: 542px;
  width: 100%;
  padding: 10px 0;
  padding-left: 15px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 5px;
  box-shadow: 5px 5px 5px -5px rgba(80, 34, 34, 0.6);
`;

export { StyledSearchForm, StyledInput };


