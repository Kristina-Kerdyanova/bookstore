import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { routers } from '../routes/routers';
import { RootStore } from '../store/store';

export const Account = () => {
    const { isAuth, email } = useSelector(({user}: RootStore) => user);

    if (isAuth) {
        return <div>{email}</div>
    }
    return (
        <Navigate to={routers.SIGN_UP} />
    )
}
