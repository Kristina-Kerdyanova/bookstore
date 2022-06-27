import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { routers } from "../../routes/routers";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userReducer";
import { SignUp } from "../../components/SignUp/SignUp";
import { StyledSubtitle, StyledTitle } from "../../styles";
import { StyledSignUpInput } from "../../components/SignUp/styles";
import { StyledSignUp } from "./styles";
import styled from "styled-components";

export const Register = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispath(setUser(userCredential.user.email));
      })
      .catch(console.error);
  };

  return (
    <StyledRegister>
    <StyledSignUp>
      <StyledTitle>Sign Up</StyledTitle>
      <SignUp />
    </StyledSignUp>
    </StyledRegister>
  );
};


const StyledRegister = styled.div`
  
`
