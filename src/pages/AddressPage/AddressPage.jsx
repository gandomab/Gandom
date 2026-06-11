import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { useCart } from '../../contexts/CartContext';
import { addressService, orderService } from '../../services/api';

const AddressPage = () => {
    const navigate = useNavigate();
    const { user, isGuest } = useUser();
    const { cart, scheduledDelivery, setCreatedOrderId } = useCart();

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

    const [errors, setErrors] = useState({});
    const [loadingAddress, setLoadingAddress] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [saveAddressDefault, setSaveAddressDefault] = useState(false);
    const [initialAddress, setInitialAddress] = useState(null);

    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const emailRef = useRef(null);
    const addressLine1Ref = useRef(null);
    const postalCodeRef = useRef(null);
    const townRef = useRef(null);
    const prefixRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect(() => {
        if (!cart || cart.length === 0 || !scheduledDelivery) {
            navigate('/your-cart');
            return;
        }

        if (!user && !isGuest) {
            navigate('/login');
            return;
        }

        if (user) {
            setFormData(prev => {
                let parsedPhone = user.phone || "";
                let parsedPrefix = user.phone_prefix || "";
                if (!parsedPrefix && parsedPhone) {
                    if (parsedPhone.startsWith("+46")) {
                        parsedPrefix = "+46";
                        parsedPhone = parsedPhone.slice(3);
                    } else {
                        const match = parsedPhone.match(/^(0\d{2})(\d+)/);
                        if (match) {
                            parsedPrefix = match[1];
                            parsedPhone = match[2];
                        }
                    }
                }
                return {
                    ...prev,
                    name: user.first_name || "",
                    surname: user.last_name || "",
                    email: user.email || "",
                    phone: parsedPhone,
                    prefix: parsedPrefix
                };
            });

            const fetchSavedAddress = async () => {
                setLoadingAddress(true);
                try {
                    const savedAddress = await addressService.getSavedAddress();
                    if (savedAddress && Object.keys(savedAddress).length > 0) {
                        setInitialAddress(savedAddress);
                        setFormData(prev => ({
                            ...prev,
                            addressLine1: savedAddress.street_address || "",
                            addressLine2: savedAddress.house_name || "",
                            postalCode: savedAddress.postal_code || "",
                            town: savedAddress.town || "",
                            province: savedAddress.province || "stockholm",
                            specialNotes: savedAddress.additional_notes || ""
                        }));
                    }
                } catch (err) {
                    console.error("Error fetching saved address:", err);
                } finally {
                    setLoadingAddress(false);
                }
            };
            fetchSavedAddress();
        }
    }, [user, isGuest, cart, scheduledDelivery, navigate]);

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

        const addressIsEmpty = 
            !formData.addressLine1.trim() && 
            !formData.postalCode.trim() && 
            !formData.town.trim();

        const hasValidSavedAddress = initialAddress &&
            initialAddress.street_address &&
            initialAddress.street_address.trim() &&
            initialAddress.postal_code &&
            initialAddress.postal_code.trim() &&
            initialAddress.town &&
            initialAddress.town.trim();

        const shouldValidateAddress = isGuest || !hasValidSavedAddress || !addressIsEmpty;

        if (!formData.prefix.trim()) newErrors.prefix = "Prefix is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";

        if (shouldValidateAddress) {
            if (!formData.addressLine1.trim()) newErrors.addressLine1 = "Address is required";
            if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
            if (!formData.town.trim()) newErrors.town = "Town is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            if (newErrors.name && nameRef.current) {
                nameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                nameRef.current.focus();
            } else if (newErrors.surname && surnameRef.current) {
                surnameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                surnameRef.current.focus();
            } else if (newErrors.email && emailRef.current) {
                emailRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                emailRef.current.focus();
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
            }
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            const addressObj = {
                house_name: formData.addressLine2 || "",
                street_address: formData.addressLine1 || "",
                town: formData.town || "",
                province: formData.province ? (formData.province.charAt(0).toUpperCase() + formData.province.slice(1)) : "Stockholm",
                postal_code: formData.postalCode || "",
                additional_notes: formData.specialNotes || ""
            };

            if (user && saveAddressDefault && !addressIsEmpty) {
                await addressService.updateSavedAddress(addressObj);
            }

            const orderPayload = {
                items: cart.map(item => ({
                    product_id: item.id,
                    quantity: item.quantity,
                    options: item.options || [],
                    custom_inputs: item.custom_inputs || {},
                    selected_custom_inputs: item.selected_custom_inputs || []
                })),
                delivery: {
                    date: scheduledDelivery.date.split('T')[0],
                    slot_id: scheduledDelivery.slotId
                }
            };

            if (!user) {
                // Guest checkout requires customer details and address
                orderPayload.customer = {
                    first_name: formData.name.trim(),
                    last_name: formData.surname.trim(),
                    email: formData.email.trim(),
                    phone: `${formData.prefix} ${formData.phone}`.trim()
                };
                orderPayload.address = addressObj;
            } else {
                // Logged-in checkout: omit customer, and omit address if it has not been modified
                let isAddressModified = false;
                if (!initialAddress) {
                    isAddressModified = !addressIsEmpty;
                } else {
                    isAddressModified =
                        (addressObj.street_address !== (initialAddress.street_address || "")) ||
                        (addressObj.house_name !== (initialAddress.house_name || "")) ||
                        (addressObj.town !== (initialAddress.town || "")) ||
                        (addressObj.province.toLowerCase() !== (initialAddress.province || "stockholm").toLowerCase()) ||
                        (addressObj.postal_code !== (initialAddress.postal_code || "")) ||
                        (addressObj.additional_notes !== (initialAddress.additional_notes || ""));
                }

                if (isAddressModified) {
                    orderPayload.address = addressObj;
                }
            }

            const response = await orderService.createOrder(orderPayload);
            
            const orderId = response.id;
            localStorage.setItem('createdOrderId', orderId);
            if (setCreatedOrderId) {
                setCreatedOrderId(orderId);
            }

            navigate('/pay');
            window.scrollTo(0, 0);
        } catch (err) {
            console.error("Order creation failed:", err);
            if (err.response?.data) {
                console.error("Order creation validation errors:", err.response.data);
                const data = err.response.data;
                const fieldErrors = {};

                const parseError = (errValue) => {
                    if (!errValue) return "";
                    if (Array.isArray(errValue)) {
                        return parseError(errValue[0]);
                    }
                    if (typeof errValue === 'object') {
                        const keys = Object.keys(errValue);
                        if (keys.length > 0) {
                            return `${keys[0]}: ${parseError(errValue[keys[0]])}`;
                        }
                        return JSON.stringify(errValue);
                    }
                    return String(errValue);
                };

                // 1. Map customer field errors
                if (data.customer) {
                    fieldErrors.submit = parseError(data.customer);
                }

                // 2. Map address field errors
                if (data.address) {
                    fieldErrors.addressLine1 = parseError(data.address);
                }

                // 3. Map delivery errors
                if (data.delivery) {
                    fieldErrors.submit = parseError(data.delivery);
                }

                // 4. Map item stock errors
                if (data.items) {
                    fieldErrors.submit = parseError(data.items);
                }

                // 5. Non-field/general validation errors
                if (data.non_field_errors) {
                    fieldErrors.submit = parseError(data.non_field_errors);
                }

                // Fallback
                if (Object.keys(fieldErrors).length === 0) {
                    fieldErrors.submit = data.detail || data.message || "Failed to create order. Please check details and try again.";
                }
                setErrors(fieldErrors);
            } else {
                setErrors({ submit: "Failed to create order. Please check details and try again." });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center px-1 md:px-8 lg:px-12 w-full py-2md:py-4 lg:py-6 xl:py-8">
            <form noValidate onSubmit={handleSubmit} className="p-8 md:p-12 lg:p-16 rounded-[20px] max-w-[1440px] w-full space-y-6 md:space-y-8 font-inter">

                {/* Title */}
                <h1 className="font-inter font-bold text-[24px] md:text-[32px] xl:text-[40px] leading-[130%] mb-8 md:mb-12">
                    Address
                </h1>
                {loadingAddress && <p className="text-[#E6B220] font-inter text-xs md:text-sm animate-pulse mb-4">Loading saved address...</p>}

                {/* Name & Surname Section */}
                <div className="space-y-6 md:space-y-8">
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Name :
                        </label>
                        <input ref={nameRef} type="text" name="name" value={formData.name} onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.name ? 'border border-[#CC0000]' : ''}`} />
                        {errors.name && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.name}</p>}
                    </div>
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Surname :
                        </label>
                        <input ref={surnameRef} type="text" name="surname" value={formData.surname} onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.surname ? 'border border-[#CC0000]' : ''}`} />
                        {errors.surname && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.surname}</p>}
                    </div>
                    <div className="w-full md:max-w-[451px] lg:max-w-[745px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Email :
                        </label>
                        <input ref={emailRef} type="email" name="email" value={formData.email} onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.email ? 'border border-[#CC0000]' : ''}`} />
                        {errors.email && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.email}</p>}
                    </div>
                </div>

                {/* Address Section */}
                <div className="space-y-4 w-full pt-2">
                    <div className="w-full md:max-w-[626px] lg:max-w-[1000px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Address:
                        </label>
                        <input ref={addressLine1Ref} name="addressLine1" value={formData.addressLine1} onChange={handleChange} className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none mb-4 md:mb-8 ${errors.addressLine1 ? 'border border-[#CC0000]' : ''}`} required />

                        <input name="addressLine2" value={formData.addressLine2} onChange={handleChange} className="w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none" />
                        {errors.addressLine1 && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2 mb-4">{errors.addressLine1}</p>}
                    </div>
                </div>

                {/* Postal & Town */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-28 lg:gap-36 w-full max-w-[1000px]  pt-2">
                    <div className="w-full md:max-w-[257px] lg:max-w-[424px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Postal code:
                        </label>
                        <input ref={postalCodeRef} type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.postalCode ? 'border border-[#CC0000]' : ''}`} />
                        {errors.postalCode && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.postalCode}</p>}
                    </div>
                    <div className="w-full md:max-w-[257px] lg:max-w-[424px]">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Town:
                        </label>
                        <input ref={townRef} type="text" name="town" value={formData.town} onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.town ? 'border border-[#CC0000]' : ''}`} />
                        {errors.town && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.town}</p>}
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
                        <input ref={prefixRef} name="prefix" value={formData.prefix} onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none text-center ${errors.prefix ? 'border border-[#CC0000]' : ''}`} />
                        {errors.prefix && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.prefix}</p>}
                    </div>
                    <div className="w-full">
                        <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                            <span className="text-[#CC0000]">*</span> Phone
                        </label>
                        <input ref={phoneRef} name="phone" value={formData.phone} onChange={handleChange} required className={`w-full h-[20px] md:h-[41px] lg:h-[69px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none ${errors.phone ? 'border border-[#CC0000]' : ''}`} />
                        {errors.phone && <p className="text-[#CC0000] font-inter text-[10px] md:text-[12px] xl:text-[14px] mt-2">{errors.phone}</p>}
                    </div>
                </div>

                {/* Special Notes */}
                <div className="w-full md:max-w-[451px] lg:max-w-[745px] pt-4">
                    <label className="block font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mb-2">
                        Special notes
                    </label>
                    <textarea name="specialNotes" value={formData.specialNotes} onChange={handleChange} className="w-full h-[60px] md:h-[113px] lg:h-[187px] bg-[#D9D9D9] p-4 md:p-5 rounded-[6px] md:rounded-[12px] lg:rounded-[20px] outline-none resize-none" />
                </div>

                <p className="font-inter font-semibold text-[10px] md:text-[14px] xl:text-[24px] leading-[130%] mt-4">NB: currently we are only at stockholm län</p>

                {/* Save Address Default Checkbox (Only for Logged-In Users) */}
                {user && (
                    <div className="flex items-center gap-4 pt-4">
                        <div
                            className={`w-8 h-8 md:w-10 md:h-10 rounded-[10px] cursor-pointer transition-colors flex items-center justify-center ${saveAddressDefault ? 'bg-[#E6B220]' : 'bg-[#D9D9D9]'}`}
                            onClick={() => setSaveAddressDefault(!saveAddressDefault)}
                        >
                            {saveAddressDefault && (
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                        <span className="font-inter font-normal text-[10px] md:text-[14px] xl:text-[24px]">
                            Save this address for future orders
                        </span>
                    </div>
                )}

                {/* Submit */}
                <div className="flex flex-col items-end pt-8 gap-4">
                    {errors.submit && <p className="text-[#CC0000] font-inter text-[12px] md:text-[14px] xl:text-[18px]">{errors.submit}</p>}
                    <button
                        type="submit"
                        disabled={isSubmitting || loadingAddress}
                        className={`bg-[#E6B220] text-[#F2EDE0] font-inter px-12 py-3 md:py-4 rounded-[8px] font-semibold text-[10px] md:text-[14px] xl:text-[20px] leading-[130%] hover:opacity-90 transition ${isSubmitting || loadingAddress ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? "Creating Order..." : "Continue"}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default AddressPage;
