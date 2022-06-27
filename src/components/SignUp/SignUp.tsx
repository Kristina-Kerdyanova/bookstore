import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { routers } from "../../routes/routers";
import { setUser, setUserName } from "../../store/slices/userReducer";
import { StyledLink } from "../Header/styled";
import { StyledSignUpInput, StyledButton, StyledFormSignUp } from "./styles";

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        dispatch(setUserName(data.name));
        dispatch(setUser(userCredential.user.email));
        navigate(routers.NEW_BOOKS);
      })
      .catch(console.error);
  };

  return (
      <StyledFormSignUp onSubmit={handleSubmit(onSubmit)}>
        <StyledSignUpInput
          type="text"
          {...register("name")}
          placeholder="Name"
        />
        <StyledSignUpInput
          type="email"
          {...register("email")}
          placeholder="Email"
        />
        <StyledSignUpInput
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <StyledButton type="submit">Sign up</StyledButton>
        <StyledLink to={routers.SIGN_IN}>I already have a registration</StyledLink>
      </StyledFormSignUp>
  );
};
