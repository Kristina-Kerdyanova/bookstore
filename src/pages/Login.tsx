import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { routers } from '../routes/routers';
import { setUser } from '../store/slices/userReducer';

export const Login = () => {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const { register, handleSubmit } = useForm();


    const onSubmit = (data: any) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                dispath(setUser(userCredential.user.email));
                navigate(routers.SIGN_IN);
                navigate(routers.ACCOUNT);
            })
            .catch(console.error);
            navigate(routers.SIGN_UP);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register('email')} />
                <input type="password" {...register('password')} />
                <button type='submit'>Send</button>
            </form>
        </div>
    );
};

