import {
    Button,
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import signUpImg from "../../assets/login.jpg"
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {signIn, googleSignUp} = useContext(AuthContext)

    const signInHandeler = e => {
        e.preventDefault();
        const form = e.target;
        
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass);

        signIn(email, pass)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err.message);
        })
        
        form.reset();
    }

    // google handeler
    const googleHandeler = e => {
        e.preventDefault();

        googleSignUp()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="mx-10 lg:mx-20 md:flex md:gap-10 h-screen items-center justify-center">
                {/* registration image section */}
                <div>
                    <img src={signUpImg} alt="" />
                </div>

                {/* form section */}
                <div className="bg-orange-200 p-10 rounded font-semibold">
                    <Card color="transparent" shadow={false}>
                        <Typography className="font-bold text-2xl lg:text-3xl" variant="h4" color="blue-gray">
                            Sign In
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={signInHandeler}>
                            <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Your Email
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 py-1"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    name="email"
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Password
                                </Typography>
                                <Input
                                    type="password"
                                    size="lg"
                                    placeholder="********"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 py-1"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    name="password"
                                />
                            </div>
                              <input type="submit" className="mt-4 bg-orange-500 text-white px-3 py-1 rounded cursor-pointer w-full" value="Sign In" />
                            {/* <Button color="amber" className="btn mt-4 btn-primary" fullWidth>Sign Up</Button> */}
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Do not have an account?
                                <a href="#" className="font-medium text-gray-900">
                                    Sign Up
                                </a>
                            </Typography>
                        </form>

                        {/* google authentication */}
                        <div className="bg-orange-500 text-white px-3 py-1 rounded cursor-pointer w-full flex items-center justify-center gap-3" onClick={googleHandeler}>

                            <FcGoogle />
                            <Button>
                                Google</Button>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Login;