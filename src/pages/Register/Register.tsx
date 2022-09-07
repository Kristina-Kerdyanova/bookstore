import { SignUp } from "../../components/SignUp/SignUp";
import { StyledSignUp } from "./styles";
import styled from "styled-components";
import { StyledTitle } from "../../styles";

export const Register = () => {
  return (
    <StyledRegister>
      <StyledSignUp>
        <StyledTitle>Sign Up</StyledTitle>
        <SignUp />
      </StyledSignUp>
    </StyledRegister>
  );
};

const StyledRegister = styled.div``;
