import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { routers } from '../routes/routers';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userReducer';

export const Register = () => {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const { register, handleSubmit } = useForm();


    const onSubmit = (data: any) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                dispath(setUser(userCredential.user.email));
                navigate(routers.ACCOUNT);
            })
            .catch(console.error);
    };


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register('email')} />
                <input type="password" {...register('password')} />
                <button type='submit'>Send</button>
            </form>
            <Link to={routers.SIGN_IN}>Have account</Link>
        </div>
    );
};
