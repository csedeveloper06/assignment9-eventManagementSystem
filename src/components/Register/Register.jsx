import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const{createUser} = useContext (AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,photo,email,password);

        //create user
        createUser(email,password)
            .then(result =>{
                console.log(result.user)
            })
            .catch(error =>{
                console.error(error)
            })
    }

    return (
        <div className="pb-10">
            <div className="box-border bg-violet-200 pb-10  rounded-xl shadow-xl lg:mt-20">
                <h2 className="text-3xl text-center font-semibold py-5">Please Register Here!</h2>
                <form onSubmit={handleRegister} className="w-3/4 lg:w-1/2 mx-auto">
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                    <p className="text-center m-5">Already have an account?
                        <Link className="to-blue-600 font-bold ml-3" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;