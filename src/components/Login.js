
import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [fullName, setFullname] = useState("")
    const [signInform, setSignInform] =  useState(true)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="relative min-h-screen bg-[#141414]">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1920")`
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Header */}
            <div className="relative z-20">
                <Header />
            </div>

            {/* Login Form */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-24">

                <div className="w-full max-w-md rounded-md bg-black/60 px-8 py-10 sm:px-12">

                    <h2 className="mb-7 text-3xl font-bold text-white">
                        {signInform ? "Sign In" : "Sign Up"}
                    </h2>

                    <form onSubmit={handleSubmit} noValidate>

                        {/* Fullname */}
                        {signInform &&  
                            <div className="mb-4">
                                <input
                                    type="text"
                                    value={fullName}
                                    onChange={(e) => setFullname(e.target.value)}
                                    placeholder="Enter Fullname"
                                    className="h-14 w-full rounded border border-[#555] bg-[#333] px-4 text-white placeholder:text-[#B3B3B3] outline-none transition focus:border-white"
                                />
                            </div>
                        }
                       

                        {/* Email */}
                        <div className="mb-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email or mobile number"
                                className="h-14 w-full rounded border border-[#555] bg-[#333] px-4 text-white placeholder:text-[#B3B3B3] outline-none transition focus:border-white"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="h-14 w-full rounded border border-[#555] bg-[#333] px-4 text-white placeholder:text-[#B3B3B3] outline-none transition focus:border-white"
                            />
                        </div>

                        {/* Sign In */}
                        <button
                            type="submit"
                            className="w-full rounded bg-[#E50914] py-3 font-semibold text-white transition hover:bg-[#F40612] active:bg-[#B20710]"
                        >
                            Sign In
                        </button>

                    </form>

                    {/* Signup */}
                    <div className="mt-12">

                        { signInform ? (
                            <p className="text-gray-400">
                            New to Netflix?{' '}
                            <span 
                                onClick={() => setSignInform(false)} 
                                className="font-semibold text-white hover:underline cursor-pointer"
                            >
                                Sign up now.
                            </span>
                            </p>
                        ) : (
                            <p className="text-gray-400">
                            Already Registered?{' '}
                            <span 
                                onClick={() => setSignInform(true)} 
                                className="font-semibold text-white hover:underline cursor-pointer"
                            >
                                Sign In now.
                            </span>
                            </p>
                        )
                        }


                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;
