import { useSelector } from 'react-redux';
import {  Navigate } from 'react-router-dom';
import { routers } from '../routes/routers';
import { RootState } from '../store/store';

export const Account = () => {
    const { isAuth, email } = useSelector(({ user }: RootState) => user);

    if (isAuth) {
        return <div>{email}</div>
    }
    
    return (
        <Navigate to={routers.SIGN_UP} />
    )
}
