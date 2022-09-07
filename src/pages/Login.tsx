// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { SignIn } from "../components/SignIn/SignIn";
// import { routers } from "../routes/routers";
// import { setUser } from "../store/slices/userReducer";
import { StyledTitle } from "../styles";
import { StyledSignUp } from "./Register/styles";

export const Login = () => {
  // const navigate = useNavigate();
  // const dispath = useDispatch();
  // const { register, handleSubmit } = useForm();

  // const onSubmit = (data: any) => {
  //   const auth = getAuth();

  //   signInWithEmailAndPassword(auth, data.email, data.password)
  //     .then((userCredential) => {
  //       dispath(setUser(userCredential.user.email));
  //       navigate(routers.ACCOUNT);
  //     })
  //     .catch(console.error);
  // };

  return (
    <StyledSignUp>
      <StyledTitle>Sign In</StyledTitle>
      <SignIn />
    </StyledSignUp>
  );
};
