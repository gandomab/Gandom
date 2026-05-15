import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderCustomDesign.css';
import { useCart } from '../../contexts/CartContext';

const CalendarSection = () => {
    const { scheduledDelivery, setScheduledDelivery } = useCart();

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 3);

    const [selectedDate, setSelectedDate] = useState(() => {
        return scheduledDelivery?.date ? new Date(scheduledDelivery.date) : minDate;
    });
    const [availableSlots, setAvailableSlots] = useState([]);
    const [selectedSlotId, setSelectedSlotId] = useState(scheduledDelivery?.slotId || null);
    const [loading, setLoading] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedSlotId(null);
        setScheduledDelivery(null);
    };

    const handleSlotSelection = (slot) => {
        setSelectedSlotId(slot.id);
        setScheduledDelivery({
            date: selectedDate.toISOString(),
            slotId: slot.id,
            slotLabel: slot.label,
            formattedDate: selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
        });
    };

    // Mock API Function
    const getMockSlots = (date) => {
        // This simulates what your backend will eventually return
        return [
            { id: "s1", label: "09.00-10.30 AM" },
            { id: "s2", label: "10.30-12.00 PM" },
            { id: "s3", label: "12.00-1.30 PM" },
            { id: "s4", label: "1.30-3.00 PM" },
            { id: "s5", label: "3.00-4.30 PM" },
        ];
    };

    useEffect(() => {
        if (!selectedDate) return;

        setLoading(true);

        const mockData = getMockSlots(selectedDate);
        setAvailableSlots(mockData);
        setLoading(false);

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
                <div className="w-full md:w-64 grid grid-cols-3 gap-2 pt-2 md:flex md:flex-col md:space-y-5 md:gap-0">
                    {loading ? (
                        <div className="w-full col-span-3 grid grid-cols-3 gap-2 md:flex md:flex-col md:space-y-4 md:gap-0">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-full h-10 md:h-12 bg-gray-200 animate-pulse rounded-full"></div>
                            ))}
                        </div>
                    ) : (
                        availableSlots.map((slot) => (
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
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default CalendarSection;