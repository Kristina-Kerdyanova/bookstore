import React, { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routers } from '../routes/routers'

export const Register = () => {
    const navigate = useNavigate();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        navigate(routers.ACCOUNT);
    };


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <input type="text" />
                <input type="text" />
                <button type='submit'>Send</button>
            </form>
            <Link to={routers.SIGN_IN}>Have account</Link>
        </div>
    );
};
