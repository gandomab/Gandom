import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderCustomDesign.css';
import { useCart } from '../../contexts/CartContext';
import { deliveryService } from '../../services/api';

const CalendarSection = () => {
    const { scheduledDelivery, setScheduledDelivery } = useCart();

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 3);

    const [selectedDate, setSelectedDate] = useState(() => {
        if (scheduledDelivery?.date) {
            const cleanDateStr = scheduledDelivery.date.split('T')[0];
            const parts = cleanDateStr.split('-');
            if (parts.length === 3) {
                return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
            }
        }
        return minDate;
    });
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlotId, setSelectedSlotId] = useState(scheduledDelivery?.slotId || null);
    const [fetchedDate, setFetchedDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [reasonMessage, setReasonMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedSlotId(null);
        setScheduledDelivery(null);
        setFetchedDate(null);
        setReasonMessage(null);
        setErrorMessage(null);
    };

    const handleSlotSelection = (slot) => {
        const year = selectedDate.getFullYear();
        const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
        const day = String(selectedDate.getDate()).padStart(2, '0');
        const localDateStr = `${year}-${month}-${day}`;

        // Use the date returned by the API (fetchedDate) if available, otherwise fall back to local calendar date
        const deliveryDate = fetchedDate || localDateStr;

        let dateForFormatting = selectedDate;
        if (fetchedDate) {
            const parts = fetchedDate.split('-');
            if (parts.length === 3) {
                dateForFormatting = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
            }
        }

        setSelectedSlotId(slot.id);
        setScheduledDelivery({
            date: deliveryDate,
            slotId: slot.id,
            slotLabel: slot.label,
            formattedDate: dateForFormatting.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
        });
    };

    useEffect(() => {
        if (!selectedDate) return;

        let isMounted = true;
        setLoading(true);
        setErrorMessage(null);
        setReasonMessage(null);

        const fetchSlots = async () => {
            try {
                const year = selectedDate.getFullYear();
                const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
                const day = String(selectedDate.getDate()).padStart(2, '0');
                const formattedDate = `${year}-${month}-${day}`;

                const data = await deliveryService.getSlots(formattedDate);
                
                if (!isMounted) return;

                if (data.is_available === false) {
                    setReasonMessage(data.reason || "Delivery is not available for this date.");
                    setAvailableSlots([]);
                    setFetchedDate(null);
                } else {
                    const activeSlots = (data.slots || []).filter(slot => slot.available === true);
                    setAvailableSlots(activeSlots);
                    setFetchedDate(data.date);
                }
            } catch (err) {
                console.error("Error fetching delivery slots:", err);
                if (isMounted) {
                    setErrorMessage("Failed to load delivery slots. Please try again later.");
                    setAvailableSlots([]);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchSlots();

        return () => {
            isMounted = false;
        };
    }, [selectedDate]);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start mt-2">
                {/* Calendar UI */}
                <div className="bg-transparent border border-[#111] rounded-[20px] p-6 w-full max-w-md">
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        minDate={minDate}
                        className="border-none w-full"
                        prev2Label={null}
                        next2Label={null}
                        prevLabel={<span className="text-[#111] font-bold">&lt;</span>}
                        nextLabel={<span className="text-[#111] font-bold">&gt;</span>}
                        formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                        showNeighboringMonth={true}
                    />
                </div>

                {/* Time Slot Buttons */}
                <div className="w-full md:w-64 pt-2">
                    {loading ? (
                        <div className="w-full grid grid-cols-3 gap-2 md:flex md:flex-col md:space-y-4 md:gap-0">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-full h-10 md:h-12 bg-gray-200 animate-pulse rounded-full"></div>
                            ))}
                        </div>
                    ) : errorMessage ? (
                        <div className="text-red-500 font-inter text-[12px] md:text-[15px] text-center py-4">
                            {errorMessage}
                        </div>
                    ) : reasonMessage ? (
                        <div className="text-[#CC0000] font-inter font-medium text-[12px] md:text-[15px] text-center py-4 border border-[#CC0000] rounded-xl px-4 bg-red-50">
                            {reasonMessage}
                        </div>
                    ) : availableSlots.length === 0 ? (
                        <div className="text-gray-500 font-inter text-[12px] md:text-[15px] text-center py-4">
                            No delivery slots available for this date.
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-2 md:flex md:flex-col md:space-y-5 md:gap-0">
                            {availableSlots.map((slot) => (
                                <div key={slot.id} className="relative w-full md:max-w-xs">
                                    {/* Yellow highlight behind selected slot */}
                                    {selectedSlotId === slot.id && (
                                        <div className="absolute top-0 bottom-0 -left-1 -right-1 md:-left-2 md:-right-2 bg-[#E6B22099] rounded-md -z-10"></div>
                                    )}
                                    <button
                                        onClick={() => handleSlotSelection(slot)}
                                        className={`relative z-10 w-full py-2 px-1 md:py-3 md:px-4 rounded-full border border-[#111] transition-all font-medium text-[12px] md:text-[15px] text-center whitespace-nowrap
                                            ${selectedSlotId === slot.id
                                                ? 'bg-[#E6B22099] text-[#111]'
                                                : 'bg-transparent text-[#111] hover:bg-[#f3f4f6]'
                                            }`}
                                    >
                                        {slot.label}
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalendarSection;