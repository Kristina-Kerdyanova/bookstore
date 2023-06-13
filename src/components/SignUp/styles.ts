import styled from "styled-components";
import { colors } from "../../ui/colors";

const StyledFormSignUp = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px;
  width: 100%;
  max-width: 500px;
  padding: 10px;
`;

const StyledSignUpInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 16px;
  width: 95%;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 5px;
  box-shadow: 5px 5px 5px -5px rgba(80, 34, 34, 0.6);

  @media (max-width: 767px) {
    margin: 15px 0;
  }
`;

const StyledButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  width: 100%;
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

export { StyledFormSignUp, StyledSignUpInput, StyledButton };
