import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContextSimulate';

const AddressPage = () => {
    const navigate = useNavigate();
    const { register } = useUser();

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        postalCode: '',
        town: '',
        province: 'stockholm',
        prefix: '',
        phone: '',
        specialNotes: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/payment');
    };

    return (
        <div className="flex justify-center px-1 md:px-8 lg:px-12 w-full py-2md:py-4 lg:py-6 xl:py-8">
            <form onSubmit={handleSubmit} className="p-8 md:p-12 lg:p-16 rounded-[20px] max-w-[1440px] w-full space-y-6 md:space-y-8 font-inter">

                {/* Title */}
                <h1 className="font-inter font-bold text-[24px] md:text-[32px] xl:text-[40px] leading-[130%] mb-8 md:mb-12">
                    Address
                </h1>

                {/* Name & Surname Section */}
                <div className="space-y-6 md:space-y-8">
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Name :
                        </label>
                        <input type="text" name="name" onChange={handleChange} required className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none" />
                    </div>
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Surname :
                        </label>
                        <input type="text" name="surname" onChange={handleChange} required className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none" />
                    </div>
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Email :
                        </label>
                        <input type="email" name="email" onChange={handleChange} required className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none" />
                    </div>
                </div>

                {/* Address Section */}
                <div className="space-y-4 w-full pt-2">
                    <div className="w-full md:max-w-[626px] lg:max-w-[1000px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Address:
                        </label>
                        <input name="addressLine1" onChange={handleChange} className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none mb-4 md:mb-8" required />
                        <input name="addressLine2" onChange={handleChange} className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none" />
                    </div>
                </div>

                {/* Postal & Town */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-28 lg:gap-36 w-full max-w-[1000px]  pt-2">
                    <div className="w-full md:max-w-[257px] lg:max-w-[424px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Postal code:
                        </label>
                        <input type="text" name="postalCode" onChange={handleChange} required className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none" />
                    </div>
                    <div className="w-full md:max-w-[257px] lg:max-w-[424px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Town:
                        </label>
                        <input type="text" name="town" onChange={handleChange} required className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none" />
                    </div>
                </div>

                {/* Province */}
                <div className="w-full md:max-w-[451px] lg:max-w-[745px] pt-2">
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Province
                        </label>
                        <input name="province" value="stockholm" disabled className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] text-[#808080] cursor-not-allowed" />
                    </div>
                </div>

                {/* Prefix & Phone */}
                <div className="w-full md:max-w-[451px] lg:max-w-[745px] flex gap-3 md:gap-6 pt-2">
                    <div className="w-[80px] md:w-[100px] lg:w-[120px] shrink-0">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2 whitespace-nowrap">
                            <span className="text-[#CC0000]">*</span> Prefix
                        </label>
                        <input name="prefix" onChange={handleChange} required className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none text-center" />
                    </div>
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Phone
                        </label>
                        <input name="phone" onChange={handleChange} required className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none" />
                    </div>
                </div>

                {/* Special Notes */}
                <div className="w-full md:max-w-[451px] lg:max-w-[745px] pt-4">
                    <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                        <span className="text-[#CC0000]">*</span> Special notes
                    </label>
                    <textarea name="specialNotes" onChange={handleChange} className="w-full h-[60px] md:h-[113px] lg:h-[187px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none resize-none" />
                </div>

                <p className="font-inter font-semibold text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mt-4">NB: currently we are only at stockholm län</p>

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

export default AddressPage;
