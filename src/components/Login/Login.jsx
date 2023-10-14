import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import googleImg from '../../assets/google1.png';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//import app from "../../firebase/firebase.config";


const Login = () => {

    const provider = new GoogleAuthProvider();
    // const auth = getAuth(app);

    const handleGoogleSignIn = ()=> {
        signInWithPopup(auth,provider)
        .then((result) =>{
           const user = result.user;
           console.log(user);
         })
        .catch(error => {
            console.error(error);
        })
    }

    const {signIn,auth} = useContext(AuthContext);
    const [loginError,setLoginError] = useState('');
    const [loginSuccess,setLoginSuccess] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // const name = form.get('name');
        // const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        signIn(email,password)
        .then(result =>{
            console.log(result.user)
            setLoginSuccess('user login successfully')
        })
        .catch(error =>{
            setLoginError(error.message);
        })
    }

    return (
        <div className="box-border bg-violet-200 pb-10 rounded-xl shadow-xl lg:mt-20 mb-16">
            <h2 className="text-3xl text-center font-semibold py-5">Please Login Here!</h2>
            <form onSubmit={handleLogin} className="w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" 
                        name="name"
                        placeholder="Name" 
                        className="input input-bordered" 
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Photo URL</span>
                    </label>
                    <input type="text" 
                        name="photo"
                         placeholder="Photo" 
                        className="input input-bordered" 
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" 
                           name="email"
                           placeholder="email" 
                           className="input input-bordered" 
                           required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password</span>
                    </label>
                    <input type="password" 
                           name="password"
                           placeholder="password" 
                           className="input input-bordered" 
                           required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    <button onClick={handleGoogleSignIn} className="btn flex items-center justify-center gap-3 m-3">
                        <img className="w-10 h-10 rounded-full" 
                            src={googleImg} alt="" />Login With Google</button>
                </div>
            </form>
                <p className="text-center m-5">Do not have an account?
                     <Link className="to-blue-600 font-bold ml-3" to='/register'>Register</Link></p>
                {
                    loginError && <p className="text-red-600 text-center">{loginError}</p>
                }
                {
                    loginSuccess && <p className="text-green-600 text-center">{loginSuccess}</p>
                }
        </div>
    );
};

export default Login;