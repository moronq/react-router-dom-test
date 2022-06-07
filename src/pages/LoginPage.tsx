import React, {useContext} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";



const LoginPage = () => {

    const { signIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const state = location.state as {from: {pathname: string}}
    const fromPage = state?.from?.pathname || '/'
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const user = form.userName.value
        if(user){
            signIn(user, ()=>navigate(fromPage, {replace: true}))
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input type={"text"} name={'userName'}/>
                </label>
                <button type={"submit"}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;