import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContextSimulate';

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
        province: 'stockholm',
        prefix: '',
        phone: '',
        specialNotes: '',
        receivePromotions: null // 'yes' or 'no'
    });

    const [errors, setErrors] = useState({});
    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const addressLine1Ref = useRef(null);
    const addressLine2Ref = useRef(null);
    const postalCodeRef = useRef(null);
    const townRef = useRef(null);
    const provinceRef = useRef(null);
    const prefixRef = useRef(null);
    const phoneRef = useRef(null);
    const specialNotesRef = useRef(null);
    const promotionsRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.surname.trim()) newErrors.surname = "Surname is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email format is invalid";
        }

        if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long.";
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

            // Scroll to the first error
            if (newErrors.name && nameRef.current) {
                nameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                nameRef.current.focus();
            } else if (newErrors.surname && surnameRef.current) {
                surnameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                surnameRef.current.focus();
            } else if (newErrors.email && emailRef.current) {
                emailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                emailRef.current.focus();
            } else if (newErrors.password && passwordRef.current) {
                passwordRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                passwordRef.current.focus();
            } else if (newErrors.confirmPassword && confirmPasswordRef.current) {
                confirmPasswordRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                confirmPasswordRef.current.focus();
            } else if (newErrors.addressLine1 && addressLine1Ref.current) {
                addressLine1Ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                addressLine1Ref.current.focus();
            } else if (newErrors.postalCode && postalCodeRef.current) {
                postalCodeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                postalCodeRef.current.focus();
            } else if (newErrors.town && townRef.current) {
                townRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                townRef.current.focus();
            } else if (newErrors.prefix && prefixRef.current) {
                prefixRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                prefixRef.current.focus();
            } else if (newErrors.phone && phoneRef.current) {
                phoneRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                phoneRef.current.focus();
            } else if (newErrors.receivePromotions && promotionsRef.current) {
                promotionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

            return;
        }

        register(formData);
        navigate('/login');
        window.scrollTo(0, 0);
    };

    return (
        <div className="flex justify-center px-4 md:px-8 lg:px-12 w-full">
            <form noValidate onSubmit={handleSubmit} className="bg-[#FAF9F6] p-8 md:p-12 lg:p-16 rounded-[20px] max-w-6xl w-full space-y-6 md:space-y-8 font-inter">

                {/* Name & Surname Section */}
                <div className="space-y-6 md:space-y-8">
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Name :
                        </label>
                        <input type="text" name="name" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.name ? 'border border-[#CC0000]' : ''}`} />
                        {errors.name && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.name}</p>}
                    </div>
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Surname :
                        </label>
                        <input type="text" name="surname" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.surname ? 'border border-[#CC0000]' : ''}`} />
                        {errors.surname && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.surname}</p>}
                    </div>
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Email :
                        </label>
                        <input type="email" name="email" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.email ? 'border border-[#CC0000]' : ''}`} />
                        {errors.email && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.email}</p>}
                    </div>
                </div>

                {/* Password Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-28 lg:gap-2 w-full max-w-[1000px]  pt-2">
                    <div className="w-full md:max-w-[257px] lg:max-w-[326px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Password
                        </label>
                        <input ref={passwordRef} type="password" name="password" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.password ? 'border border-[#CC0000]' : ''}`} />
                        {errors.password && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.password}</p>}
                    </div>
                    <div className="w-full md:max-w-[257px] lg:max-w-[326px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> confirm password
                        </label>
                        <input ref={confirmPasswordRef} type="password" name="confirmPassword" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.confirmPassword ? 'border border-[#CC0000]' : ''}`} />
                        {errors.confirmPassword && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.confirmPassword}</p>}
                    </div>
                </div>

                {/* Address Section */}
                <div className="space-y-4 max-w-3xl">
                    <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2"><span className="text-red-500">*</span> Address:</label>
                    <input name="addressLine1" onChange={handleChange} className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.addressLine1 ? 'border border-[#CC0000]' : ''}`} required />
                    <input name="addressLine2" onChange={handleChange} className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.addressLine2 ? 'border border-[#CC0000]' : ''}`} />
                    {errors.addressLine1 && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.addressLine1}</p>}
                    {errors.addressLine2 && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.addressLine2}</p>}
                </div>

                {/* Postal & Town */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl">
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Postal code:
                        </label>
                        <input type="text" name="postalCode" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.postalCode ? 'border border-[#CC0000]' : ''}`} />
                        {errors.postalCode && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.postalCode}</p>}
                    </div>
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Town:
                        </label>
                        <input type="text" name="town" onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.town ? 'border border-[#CC0000]' : ''}`} />
                        {errors.town && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.town}</p>}
                    </div>
                </div>

                {/* Province & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl">
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Province
                        </label>
                        <input name="province" value="stockholm" disabled className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none text-[#808080] cursor-not-allowed" />
                    </div>
                    <div className="w-full flex gap-3">
                        <div className="w-[60px] md:w-[70px] shrink-0">
                            <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">Prefix</label>
                            <input name="prefix" onChange={handleChange} className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none text-center ${errors.prefix ? 'border border-[#CC0000]' : ''}`} />
                            {errors.prefix && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.prefix}</p>}
                        </div>
                        <div className="w-full">
                            <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">Phone</label>
                            <input name="phone" onChange={handleChange} className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.phone ? 'border border-[#CC0000]' : ''}`} />
                            {errors.phone && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.phone}</p>}
                        </div>
                    </div>
                </div>

                <p className="font-inter font-semibold text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mt-4">NB: currently we are only at stockholm län</p>

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
                <div className="flex justify-end pt-4">
                    <button type="submit" className="bg-[#E6B220] text-[#F2EDE0] font-inter px-12 py-3 md:py-4 rounded-[8px] font-semibold text-[10px] md:text-[14px] xl:text-[20px] leading-[130%] hover:opacity-90 transition">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
