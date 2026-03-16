const DiscoverMoreButton = ({ title, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex mx-auto items-center justify-center align-middle bg-[#DEA401] 
                    text-white font-semibold leading-[130%] whitespace-nowrap
                    text-[10px] md:text-[14px] lg:text-[16px]
                    w-[90px] h-[33px] md:w-[125px] md:h-[39px] lg:w-[227px] lg:h-[64px] 
                    rounded-[23px] md:rounded-[10px] lg:rounded-[8px] hover:opacity-90 transition"
        >
            {title}
        </button>
    );
};

export default DiscoverMoreButton;