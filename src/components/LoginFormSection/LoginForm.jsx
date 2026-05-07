import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi';
import { useUser } from '../../contexts/UserContextSimulate';// remove/upadte this when connected to backend

const LoginForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // User context to simulate the login, register and guest checkout
    const { login, setIsGuest } = useUser();

    // 1. Existing User: Sign In
    const handleSignIn = () => {
        login("existing@user.com");
        navigate('/payment'); // Skips address because they are "existing"
    };

    // 2. New User: Register
    const handleRegisterClick = () => {
        navigate('/register');
    };

    // 3. New User: Guest
    const handleGuestClick = () => {
        setIsGuest(true);
        navigate('/address'); // Guests must provide an address
    };

    return (
        <div className="md:min-h-[80vh] flex items-center justify-center py-12 px-8 md:p-12 lg:p-10 xl:p-6">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 lg:gap-20 xl:gap-36">

                {/* LEFT SIDE: LOG IN */}
                <div className="flex flex-col">
                    <h1 className="font-inter font-bold text-[#000000] text-[20px] md:text-[32px] xl:text-[48px] leading-[150%] mb-4 md:mb-8">Log in</h1>

                    <form onSubmit={handleSignIn} className="space-y-4 md:space-y-6">
                        <div>
                            <label className="block font-inter font-normal text-[12px] md:text-[16px] xl:text-[24px] leading-[130%] mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full bg-[#D9D9D9] p-4 rounded-2xl outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.set)}
                            />
                        </div>

                        <div>
                            <label className="block font-inter font-normal text-[12px] md:text-[16px] xl:text-[24px] leading-[130%] mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full bg-[#D9D9D9] p-4 rounded-2xl outline-none pr-12"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                                >
                                    {showPassword ? <PiEyeLight size={24} /> : <PiEyeSlash size={24} />}
                                </button>
                            </div>
                        </div>

                        <p className="font-inter font-normal text-[12px] md:text-[16px] xl:text-[24px] leading-[130%]">
                            Forgot your password?
                        </p>

                        <button
                            onClick={handleSignIn}
                            type="submit"
                            className="bg-[#E6B220] hover:opacity-90 transition text-[#F2EDE0] px-10 py-3 rounded-xl font-inter font-bold text-[10px] md:text-[15px] xl:text-[22px] leading-[150%]"
                        >
                            Sign in
                        </button>
                    </form>
                </div>

                {/* RIGHT SIDE: NEW CUSTOMER */}
                <div className="flex flex-col">
                    <h2 className="font-inter font-bold text-[#000000] text-[20px] md:text-[32px] xl:text-[48px] leading-[150%] mb-4 md:mb-8">New Customer?</h2>

                    <div className="space-y-1 md:space-y-6">
                        <div>
                            <p className="font-inter font-normal text-[12px] md:text-[16px] xl:text-[24px] leading-[130%] mb-2 md:mb-4">Register here</p>
                            <button
                                onClick={handleRegisterClick}
                                className="bg-[#E6B220] hover:opacity-90 transition text-[#F2EDE0] px-10 py-3 rounded-xl font-inter font-bold text-[10px] md:text-[15px] xl:text-[22px] leading-[150%]"
                            >
                                Register
                            </button>
                        </div>

                        <div className="pt-4">
                            <p className="font-inter font-normal text-[12px] md:text-[16px] xl:text-[24px] leading-[130%] mb-2 md:mb-4">Or</p>
                            <button
                                onClick={handleGuestClick}
                                className="font-inter font-medium text-[12px] md:text-[16px] xl:text-[24px] text-[#0C8CE9] leading-[130%]"
                            >
                                continue as guest
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginForm;