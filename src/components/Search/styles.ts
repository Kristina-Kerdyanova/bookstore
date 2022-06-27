import styled from "styled-components";
import { colors } from "../../ui/colors";

const StyledSearchForm = styled.form`
  width: 542px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
  border: 1 solid black;
`;

const StyledInput = styled.input`
  max-width: 542px;
  border-radius: 0.5px;
  width: 100%;
  padding: 10px 0;
  padding-left: 15px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 5px;
  border: 0.5px solid ${colors.gray};
  box-shadow: 5px 5px 5px -5px rgba(80, 34, 34, 0.6);
`;

export { StyledSearchForm, StyledInput };


