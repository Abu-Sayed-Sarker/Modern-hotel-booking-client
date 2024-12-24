import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import ReactHelmet from "../../Components/ReactHelmet";

const Login = () => {
    <ReactHelmet tittle={"Log In page"}></ReactHelmet>
    const { signInWithGoogle, logIn } = useContext(AuthContext);

    const navigate = useNavigate();


    const signInButton = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log({ email, password });

        try {
            await logIn(email, password)
            toast.success('Signin successful')
            navigate("/")
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }



    /// google log in method


    const googlesignIn = async () => {
        try {
            await signInWithGoogle()

            toast.success('Signin successful')
            navigate('/')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="lg:text-4xl text-teal-500 text-center pt-4 text-2xl">Log in now</h1>
                <form
                    onSubmit={signInButton}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-teal-200 hover:bg-teal-700">Login</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="pl-6">I have no acount <Link to={"/register"}><span className="text-red-500 underline">Register</span></Link></div>
                <div className="flex justify-center p-4 pb-7">
                    <button onClick={googlesignIn} className="flex items-center border border-teal-500 rounded-full gap-3 py-3 px-5 bg-teal-200 hover:bg-teal-700"><FaGoogle /> Google Log In</button>
                </div>

            </div>
        </div>
    );
};

export default Login;