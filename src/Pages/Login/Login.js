import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const { logIn, providerPopUpLogin, providerGithubLogin } = useContext(AuthContext);
    useTitle('Login')
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(err => console.error(err))

    }

    const githubProvider = new GithubAuthProvider()

    const handleGithubSignIn = () => {
        providerGithubLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGooleSignIn = () => {
        providerPopUpLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => console.error(err))
    }

    return (
        <div className="">

            {
                loading ?
                    <ClipLoader
                        color={'#000000'}
                        loading={loading}
                        // cssOverride={override}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    :

                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary mb-5' type="submit" value="Login" />
                                    <button onClick={handleGooleSignIn} className="btn btn-outline"><FaGoogle></FaGoogle><span className='ml-2'> Sign in With Google</span></button>
                                    <button onClick={handleGithubSignIn} className="btn btn-outline"><FaGithub></FaGithub><span className='ml-2'> Sign in With GitHub</span></button>



                                </div>
                            </form>
                            <p className='text-center my-5'>New here? Please <Link className='text-blue-600 font-bold' to='/register'> Register</Link></p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Login;