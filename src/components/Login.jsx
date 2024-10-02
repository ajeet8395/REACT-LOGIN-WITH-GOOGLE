// Login.jsx
import React from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleSuccess = (credentialResponse) => {
        console.log(credentialResponse);

        navigate("/dashboard");
    }

    const handleError = () => {
        console.log("Login Failed");
    };

    const login = useGoogleLogin({
        onSuccess: handleSuccess,
        onError: handleError
    });


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-[#f6d365] to-[#fda085]">
            <div className="w-1/4 border border-zinc-900 p-6 bg-white rounded-md">
                <form action="" method="" className="flex flex-col gap-4">
                    <input className="outline-none px-3 py-2 border border-gray-700 rounded-md" type="email" placeholder="Email" />
                    <input className="outline-none px-3 py-2 border border-gray-700 rounded-md" type="password" placeholder="Password" />
                    <input className="outline-none cursor-pointer bg-indigo-600 text-white font-semibold px-3 py-2 hover:bg-indigo-900 transition-all rounded-md" type="submit" placeholder="Password" />
                </form>
                <p className="text-center text-gray-600 border-b py-4">or</p>
                <div className="text-center">
                    {/* <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleError}
                /> */}
                    <button onClick={() => login()}>
                        <img src="/google.svg"
                            alt="Google Logo"
                            className="h-10 w-10 cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
