import { Navigate } from 'react-router-dom';
import { routers } from '../routes/routers';

export const Account = () => {
    const isAuth = false;

    if (isAuth) {
        return <div>Account</div>
    }
    return (
        <Navigate to={routers.SIGN_UP} />
    )
}
