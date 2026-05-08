import React, { useState } from 'react';
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation: Ensure passwords match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        register(formData);
        // Since address is already filled in this form, we can go directly to payment
        navigate('/payment');
    };

    return (
        <div className="flex justify-center px-4 md:px-8 lg:px-12 w-full">
            <form onSubmit={handleSubmit} className="bg-[#FAF9F6] p-8 md:p-12 lg:p-16 rounded-[20px] max-w-5xl w-full space-y-6 md:space-y-8 font-inter">

                {/* Name & Surname Section */}
                <div className="space-y-6 md:space-y-8 max-w-3xl">
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Name :
                        </label>
                        <input type="text" name="name" onChange={handleChange} required className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none" />
                    </div>
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Surname :
                        </label>
                        <input type="text" name="surname" onChange={handleChange} required className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none" />
                    </div>
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Email :
                        </label>
                        <input type="email" name="email" onChange={handleChange} required className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none" />
                    </div>
                </div>

                {/* Password Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl">
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Password
                        </label>
                        <input type="password" name="password" onChange={handleChange} required className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none" />
                    </div>
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> confirm password
                        </label>
                        <input type="password" name="confirmPassword" onChange={handleChange} required className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none" />
                    </div>
                </div>

                {/* Address Section */}
                <div className="space-y-4 max-w-3xl">
                    <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2"><span className="text-red-500">*</span> Address:</label>
                    <input name="addressLine1" onChange={handleChange} className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none" required />
                    <input name="addressLine2" onChange={handleChange} className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none" />
                </div>

                {/* Postal & Town */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl">
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Postal code:
                        </label>
                        <input type="text" name="postalCode" onChange={handleChange} required className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none" />
                    </div>
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Town:
                        </label>
                        <input type="text" name="town" onChange={handleChange} required className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none" />
                    </div>
                </div>

                {/* Province & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-3xl">
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Province
                        </label>
                        <input name="province" value="stockholm" disabled className=" bg-[#D9D9D9] p-4 rounded-[20px] text-[#808080] cursor-not-allowed" />
                    </div>
                    <div className="w-full flex gap-3">
                        <div className="w-[60px] md:w-[70px] shrink-0">
                            <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">Prefix</label>
                            <input name="prefix" onChange={handleChange} className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none text-center" />
                        </div>
                        <div className="w-full">
                            <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">Phone</label>
                            <input name="phone" onChange={handleChange} className="w-full bg-[#D9D9D9] p-4 rounded-[20px] outline-none" />
                        </div>
                    </div>
                </div>

                <p className="font-inter font-semibold text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mt-4">NB: currently we are only at stockholm län</p>

                {/* Special Notes */}
                <div className="max-w-4xl">
                    <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">Special notes</label>
                    <textarea name="specialNotes" onChange={handleChange} className="w-full bg-[#D9D9D9] p-4 rounded-[20px] h-32 md:h-40 outline-none resize-none" />
                </div>

                {/* Promotions Toggle */}
                <div className="space-y-4 pt-4">
                    <p className="font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%]">Do you want to receive promotions and news?</p>
                    <div className="flex gap-8 items-center">
                        <div className="flex items-center gap-4">
                            <span className="font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px]">Yes</span>
                            <div
                                className={`w-8 h-8 md:w-10 md:h-10 rounded-[10px] cursor-pointer transition-colors ${formData.receivePromotions === 'yes' ? 'bg-[#E6B220]' : 'bg-[#D9D9D9]'}`}
                                onClick={() => setFormData({ ...formData, receivePromotions: 'yes' })}
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px]">No</span>
                            <div
                                className={`w-8 h-8 md:w-10 md:h-10 rounded-[10px] cursor-pointer transition-colors ${formData.receivePromotions === 'no' ? 'bg-[#E6B220]' : 'bg-[#D9D9D9]'}`}
                                onClick={() => setFormData({ ...formData, receivePromotions: 'no' })}
                            />
                        </div>
                    </div>
                </div>

                {/* Submit */}
                <div className="flex justify-end pt-8">
                    <button type="submit" className="bg-[#E6B220] text-[#F2EDE0] font-inter px-12 py-3 md:py-4 rounded-[8px] font-semibold text-[10px] md:text-[14px] xl:text-[20px] leading-[130%] hover:opacity-90 transition">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
