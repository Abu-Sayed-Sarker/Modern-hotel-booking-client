import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import ReactHelmet from "../../Components/ReactHelmet";
import SignUpImg from '../../assets/Sign up-pana.png'





const Register = () => {

    <ReactHelmet tittle={"Register page"}></ReactHelmet>
    const { setUser, registerAcount, updateUserProfile, signInWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate();



    // register button

    const handleRegister = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value
        const password = form.password.value

        if (password.length < 5) {
            toast.error("Password must be at 6 character")
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Must have a lowercase letter in the password")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Must have a Uppercase letter in the password")
            return;
        }
        try {
            const result = await registerAcount(email, password)
            await updateUserProfile(name, photo)
            setUser({ ...result.user, photoURL: photo, displayName: name })
            toast.success('Signin successful')
            navigate('/')
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
        <div className="flex items-center justify-center w-11/12 mx-auto mt-10">
            <div>
                <img src={SignUpImg} alt="" className="w-1/2" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="lg:text-4xl text-teal-500 text-center pt-4 text-2xl">Register now</h1>
                <form
                    onSubmit={handleRegister}
                    className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Enater your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name="photo" placeholder="URL" className="input input-bordered" required />
                    </div>
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
                        <button className="btn bg-teal-200 hover:bg-teal-700">Register</button>
                    </div>
                </form>
                <div className="divider">OR</div>
                <div className="pl-6">I already have a acount <Link to={"/login"}><span className="text-red-500 underline">Log in</span></Link></div>

                <div className="flex justify-center p-4 pb-7">
                    <button onClick={googlesignIn} className="flex items-center border border-teal-500 rounded-xl gap-3 py-3 px-5 bg-teal-200 hover:bg-teal-700"><FaGoogle /> Google Log In</button>
                </div>

            </div>
        </div>
    );
};

export default Register;