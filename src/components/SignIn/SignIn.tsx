import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routers } from '../../routes/routers';
import { setUser } from '../../store/slices/userReducer';
import { StyledFormSignUp, StyledSignUpInput, StyledButton } from '../SignUp/styles';


export const SignIn = () => {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const { register, handleSubmit } = useForm();


    const onSubmit = (data: any) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                dispath(setUser(userCredential.user.email));
                navigate(routers.ACCOUNT);
            })
            .catch(console.error);
    };

    return (
        <StyledFormSignUp onSubmit={handleSubmit(onSubmit)}>
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
        <StyledButton type="submit">Sign in</StyledButton>
      </StyledFormSignUp>
    );
}
