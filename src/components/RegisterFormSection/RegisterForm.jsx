import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi';
import { useUser } from '../../contexts/UserContext';
import TransitionPopup from '../TransitionPopup/TransitionPopup';


const RegisterForm = () => {
    const navigate = useNavigate();
    const { register } = useUser();

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        addressLine1: '',
        addressLine2: '',
        postalCode: '',
        town: '',
        province: 'Stockholm',
        prefix: '',
        phone: '',
        specialNotes: '',
        receivePromotions: null
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showRedirectPopup, setShowRedirectPopup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const addressLine1Ref = useRef(null);
    const addressLine2Ref = useRef(null);
    const postalCodeRef = useRef(null);
    const townRef = useRef(null);
    const prefixRef = useRef(null);
    const phoneRef = useRef(null);
    const promotionsRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.surname.trim()) newErrors.surname = "Surname is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email format is invalid";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "This password is too short. It must contain at least 8 characters.";
        } else if (/^\d+$/.test(formData.password)) {
            newErrors.password = "This password is entirely numeric.";
        } else if (["password", "12345678", "qwertyuiop", "123456789", "gandom123"].includes(formData.password.toLowerCase())) {
            newErrors.password = "This password is too common.";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        if (!formData.addressLine1.trim()) newErrors.addressLine1 = "Address is required";
        if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
        if (!formData.town.trim()) newErrors.town = "Town is required";
        if (!formData.prefix.trim()) newErrors.prefix = "Prefix is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";

        if (!formData.receivePromotions) {
            newErrors.receivePromotions = "Please select whether you want to receive promotions and news.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            const refs = [
                [newErrors.name, nameRef],
                [newErrors.surname, surnameRef],
                [newErrors.email, emailRef],
                [newErrors.password, passwordRef],
                [newErrors.confirmPassword, confirmPasswordRef],
                [newErrors.addressLine1, addressLine1Ref],
                [newErrors.postalCode, postalCodeRef],
                [newErrors.town, townRef],
                [newErrors.prefix, prefixRef],
                [newErrors.phone, phoneRef],
                [newErrors.receivePromotions, promotionsRef],
            ];
            for (const [err, ref] of refs) {
                if (err && ref.current) {
                    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    if (ref.current.focus) ref.current.focus();
                    break;
                }
            }
            return;
        }

        const payload = {
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirmPassword,
            first_name: formData.name,
            last_name: formData.surname,
            phone_prefix: formData.prefix,
            phone: formData.phone,
            receive_promotions: formData.receivePromotions === 'yes',
            address: {
                house_name: formData.addressLine2 || "",
                street_address: formData.addressLine1 || "",
                town: formData.town || "",
                postal_code: formData.postalCode || "",
                province: formData.province ? (formData.province.charAt(0).toUpperCase() + formData.province.slice(1)) : "Stockholm",
                additional_notes: formData.specialNotes || ""
            }
        };

        setIsLoading(true);
        try {
            await register(payload);
            setShowRedirectPopup(true);
            setTimeout(() => {
                navigate('/login');
                window.scrollTo(0, 0);
            }, 1800);
        } catch (err) {
            console.error("Registration failed:", err);
            if (err.response?.data) {
                const data = err.response.data;
                const fieldErrors = {};
                if (data.email) fieldErrors.email = Array.isArray(data.email) ? data.email[0] : data.email;
                if (data.password) fieldErrors.password = Array.isArray(data.password) ? data.password[0] : data.password;
                if (data.confirm_password) fieldErrors.confirmPassword = Array.isArray(data.confirm_password) ? data.confirm_password[0] : data.confirm_password;
                if (data.first_name) fieldErrors.name = Array.isArray(data.first_name) ? data.first_name[0] : data.first_name;
                if (data.last_name) fieldErrors.surname = Array.isArray(data.last_name) ? data.last_name[0] : data.last_name;
                if (data.phone) fieldErrors.phone = Array.isArray(data.phone) ? data.phone[0] : data.phone;
                if (data.phone_prefix) fieldErrors.prefix = Array.isArray(data.phone_prefix) ? data.phone_prefix[0] : data.phone_prefix;

                if (data.non_field_errors) {
                    fieldErrors.submit = Array.isArray(data.non_field_errors) ? data.non_field_errors[0] : data.non_field_errors;
                } else if (Object.keys(fieldErrors).length === 0) {
                    fieldErrors.submit = data.detail || data.message || "Registration failed. Please check details and try again.";
                }
                setErrors(fieldErrors);
            } else {
                setErrors({ submit: "Registration failed. Please check details and try again." });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex justify-center px-4 md:px-8 lg:px-12 w-full">
            <TransitionPopup
                isOpen={showRedirectPopup}
                title="Account Created!"
                message="Your account has been created successfully!"
            />

            <form noValidate onSubmit={handleSubmit} className="bg-[#FAF9F6] p-8 md:p-12 lg:p-16 rounded-[20px] max-w-6xl w-full space-y-6 md:space-y-8 font-inter">
                {/* Name & Surname Section */}
                <div className="space-y-6 md:space-y-8">
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Name :
                        </label>
                        <input ref={nameRef} type="text" name="name" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.name ? 'border border-[#CC0000]' : ''}`} />
                        {errors.name && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.name}</p>}
                    </div>
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Surname :
                        </label>
                        <input ref={surnameRef} type="text" name="surname" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.surname ? 'border border-[#CC0000]' : ''}`} />
                        {errors.surname && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.surname}</p>}
                    </div>
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Email :
                        </label>
                        <input ref={emailRef} type="email" name="email" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.email ? 'border border-[#CC0000]' : ''}`} />
                        {errors.email && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.email}</p>}
                    </div>
                </div>

                {/* Password Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-28 lg:gap-2 w-full max-w-[1000px] pt-2">
                    <div className="w-full md:max-w-[257px] lg:max-w-[326px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Password
                        </label>
                        <div className="relative w-full">
                            <input
                                ref={passwordRef}
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={handleChange}
                                required
                                className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 pr-12 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.password ? 'border border-[#CC0000]' : ''}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
                            >
                                {showPassword ? <PiEyeLight size={24} /> : <PiEyeSlash size={24} />}
                            </button>
                        </div>
                        {errors.password && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.password}</p>}
                    </div>
                    <div className="w-full md:max-w-[257px] lg:max-w-[326px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> confirm password
                        </label>
                        <div className="relative w-full">
                            <input
                                ref={confirmPasswordRef}
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                onChange={handleChange}
                                required
                                className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 pr-12 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.confirmPassword ? 'border border-[#CC0000]' : ''}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
                            >
                                {showConfirmPassword ? <PiEyeLight size={24} /> : <PiEyeSlash size={24} />}
                            </button>
                        </div>
                        {errors.confirmPassword && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.confirmPassword}</p>}
                    </div>
                </div>

                {/* Address Section */}
                <div className="space-y-4 max-w-3xl">
                    <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2"><span className="text-red-500">*</span> Address:</label>
                    <input ref={addressLine1Ref} name="addressLine1" onChange={handleChange} className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.addressLine1 ? 'border border-[#CC0000]' : ''}`} required />
                    <input ref={addressLine2Ref} name="addressLine2" onChange={handleChange} className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.addressLine2 ? 'border border-[#CC0000]' : ''}`} />
                    {errors.addressLine1 && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.addressLine1}</p>}
                </div>

                {/* Postal & Town */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl">
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Postal code:
                        </label>
                        <input ref={postalCodeRef} type="text" name="postalCode" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.postalCode ? 'border border-[#CC0000]' : ''}`} />
                        {errors.postalCode && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.postalCode}</p>}
                    </div>
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Town:
                        </label>
                        <input ref={townRef} type="text" name="town" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.town ? 'border border-[#CC0000]' : ''}`} />
                        {errors.town && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.town}</p>}
                    </div>
                </div>

                {/* Province & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl">
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Province
                        </label>
                        <input name="province" value="Stockholm" disabled className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none text-[#808080] cursor-not-allowed" />
                    </div>
                    <div className="w-full flex gap-3">
                        <div className="w-[60px] md:w-[70px] shrink-0">
                            <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">Prefix</label>
                            <input ref={prefixRef} name="prefix" onChange={handleChange} className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none text-center ${errors.prefix ? 'border border-[#CC0000]' : ''}`} />
                            {errors.prefix && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.prefix}</p>}
                        </div>
                        <div className="w-full">
                            <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">Phone</label>
                            <input ref={phoneRef} name="phone" onChange={handleChange} className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.phone ? 'border border-[#CC0000]' : ''}`} />
                            {errors.phone && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.phone}</p>}
                        </div>
                    </div>
                </div>

                {/* Stockholm Availability Notice */}
                <div className="max-w-3xl flex items-center gap-2 font-inter font-semibold text-[10px] md:text-[14px] xl:text-[20px] leading-[130%] pt-1">
                    <FaMapMarkerAlt className="text-[#E6B220] shrink-0" />
                    <span>We currently deliver only within Stockholm County (Stockholms län).</span>
                </div>

                {/* Special Notes */}
                <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                    <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">Special notes</label>
                    <textarea name="specialNotes" onChange={handleChange} className="w-full h-[60px] md:h-[113px] lg:h-[187px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none resize-none" />
                </div>

                {/* Promotions Toggle */}
                <div ref={promotionsRef} className="space-y-4 pt-4">
                    <p className="font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%]">Do you want to receive promotions and news?</p>
                    <div className="flex gap-8 items-center">
                        <div className="flex items-center gap-4">
                            <span className="font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px]">Yes</span>
                            <div
                                className={`w-8 h-8 md:w-10 md:h-10 rounded-[10px] cursor-pointer transition-colors ${formData.receivePromotions === 'yes' ? 'bg-[#E6B220]' : 'bg-[#D9D9D9]'}`}
                                onClick={() => {
                                    setFormData({ ...formData, receivePromotions: 'yes' });
                                    if (errors.receivePromotions) setErrors({ ...errors, receivePromotions: '' });
                                }}
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px]">No</span>
                            <div
                                className={`w-8 h-8 md:w-10 md:h-10 rounded-[10px] cursor-pointer transition-colors ${formData.receivePromotions === 'no' ? 'bg-[#E6B220]' : 'bg-[#D9D9D9]'}`}
                                onClick={() => {
                                    setFormData({ ...formData, receivePromotions: 'no' });
                                    if (errors.receivePromotions) setErrors({ ...errors, receivePromotions: '' });
                                }}
                            />
                        </div>
                    </div>
                    {errors.receivePromotions && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.receivePromotions}</p>}
                </div>

                {/* Submit */}
                <div className="flex flex-col items-end pt-4 gap-4">
                    {errors.submit && <p className="text-[#CC0000] font-inter text-[12px] md:text-[14px] xl:text-[18px]">{errors.submit}</p>}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-[#E6B220] text-[#F2EDE0] font-inter px-12 py-3 md:py-4 rounded-[8px] font-semibold text-[10px] md:text-[14px] xl:text-[20px] leading-[130%] hover:opacity-90 transition ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? "Submitting..." : "Continue"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;