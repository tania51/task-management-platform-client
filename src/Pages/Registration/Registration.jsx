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
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Registration = () => {
    const { signUp, googleSignUp } = useContext(AuthContext)

    const signUpHandeler = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(name, email, pass, image);

        signUp(email, pass)
            .then(res => {
                console.log(res);
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image
                })
                .then(res => {
                    console.log('profile updated');
                })
                .catch(err => {
                    console.log(RangeError);
                })
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
                <div className="bg-orange-200 px-10 py-6 rounded font-semibold">
                    <Card color="transparent" shadow={false}>
                        <Typography className="font-bold text-2xl lg:text-3xl" variant="h4" color="blue-gray">
                            Sign Up
                        </Typography>
                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={signUpHandeler}>
                            <div className="mb-1 flex flex-col gap-4">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Your Name
                                </Typography>
                                <Input
                                    size="lg"
                                    name="name"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 py-1"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
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
                                        className: "before:content-none after:content-none py-1",
                                    }}
                                    name="password"
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Profile Image
                                </Typography>
                                <Input
                                    type="text"
                                    size="lg"
                                    placeholder="Image URL"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 py-1"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    name="image"
                                />
                            </div>
                            <input type="submit" className="mt-4 bg-orange-500 text-white px-3 py-1 rounded cursor-pointer w-full" value="Sign Up" />
                            <Typography color="gray" className="mt-1 text-center font-normal">
                                Already have an account?
                                <a href="#" className="font-medium text-gray-900">
                                    Sign In
                                </a>

                                <p className="mt-4">--------OR--------</p>
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

export default Registration;