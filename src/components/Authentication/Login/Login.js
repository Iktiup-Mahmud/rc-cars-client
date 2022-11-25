import React, { useContext, useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';



const Login = () => {

    const [error, setError] = useState('');
    const { login, loginProvider } = useContext(AuthContext);
    const providerGoogle = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handelSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }

    const handelGoogleLogin = () => {
        loginProvider(providerGoogle)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <div className="w-1/2 text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Please give your valid email address and password. Then press the login button. If you want to login with any Google. Then press google button.</p>
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />

                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary font-bold">Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className="form-control">
                            <button className="btn btn-primary">
                                <div onClick={handelGoogleLogin} className='flex justify-between'>
                                    <FaGoogle className='' />
                                    <p className='pl-3 font-bold'>Google</p>
                                </div>
                            </button>
                        </div>
                        <div>
                            <p>Don't have an account?<Link to='/signup' className='link link-info'>Please Signup</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;