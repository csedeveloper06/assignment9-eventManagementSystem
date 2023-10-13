import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
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
                </div>
            </form>
                <p className="text-center m-5">Do not have an account?
                     <Link className="to-blue-600 font-bold ml-3" to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;