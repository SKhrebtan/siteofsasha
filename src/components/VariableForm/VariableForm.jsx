import {useEffect, useState} from "react";

const ContactUs = () => {
        const [activeTab, setActiveTab] = useState('technical');
    const [indicatorStyle, setIndicatorStyle] = useState({
    });
   useEffect(()=>{
       setIndicatorStyle({
           width: document.getElementById("technical")?.offsetWidth,
           left: -15
       })
   },[])
    const updateIndicator = (e) => {
        const tab = e.currentTarget;
        setIndicatorStyle({
            width: tab.offsetWidth + 2,
            left: tab.offsetLeft - 15
        });
    };

    return (     
                <div className="flex mb-4 w-[100%] flex-wrap justify-center md:justify-start md:items-top items-center md:max-w-[525px] w-[100%]">
                    <nav className="flex w-[100%] md:w-auto space-x-4 mb-6 relative" aria-label="Tabs">
                        <button
                            id={"technical"}
                            className={`pb-2 font-medium text-base ${activeTab === 'technical' ? 'text-white' : 'text-customBorder'}`}
                            onClick={(e) => {
                                setActiveTab('technical');
                                updateIndicator(e);
                            }}
                        >
                            Технікал
                        </button>
                        <button
                            className={`pb-2 font-medium text-base ${activeTab === 'business' ? 'text-white' : 'text-customBorder'}`}
                            onClick={(e) => {
                                setActiveTab('business');
                                updateIndicator(e);
                            }}
                        >
                           Опт
                        </button>
                        <span className="absolute bottom-0 ml-0 h-[2px] bg-black transition-all duration-300 ease-out"
                              style={indicatorStyle}></span>
                    </nav>
                    <div className="md:w-full flex flex-col">
                        <form className="w-full">
                            {activeTab === 'technical' ? <> <input
                                type="email"
                                name="technical"
                                placeholder='Contact us'
                                className="h-12 border placeholder:font-normal border-customBorder rounded-md px-4 py-[14px] mb-[10px] w-[100%] font-semibold text-base text-customGray placeholder-customGray placeholder-opacity-30 focus:bg-customFocusBg focus:border-2 focus:border-customFocusBorder outline-none"
                                style={{lineHeight: '19px'}}
                            />
                                <textarea
                                    placeholder='Contact us'
                                    className="resize-none border border-customBorder rounded-md px-4 py-[14px] h-[147px] mb-[40px] w-[100%] font-semibold text-base text-customGray placeholder-customGray placeholder-opacity-30 placeholder:font-normal focus:bg-customFocusBg focus:border-2 focus:border-customFocusBorder outline-none"
                                    style={{lineHeight: '19px'}}
                                >
                        </textarea></>
                        : <> <input
                                type="email"
                                name="business"
                                placeholder='Contact us'
                                className="h-12 border border-customBorder rounded-md px-4 py-[14px] mb-[10px] w-[100%] font-semibold text-base text-customGray placeholder-customGray placeholder-opacity-30 placeholder:font-normal focus:bg-customFocusBg focus:border-2 focus:border-customFocusBorder outline-none"
                                style={{lineHeight: '19px'}}/>
                                <textarea
                                    placeholder='Contact us'
                                    className="resize-none border border-customBorder rounded-md px-4 py-[14px] h-[147px] mb-[40px] w-[100%] font-semibold text-base text-customGray placeholder-customGray placeholder-opacity-30 placeholder:font-normal focus:bg-customFocusBg focus:border-2 focus:border-customFocusBorder outline-none"
                                    style={{lineHeight: '19px'}}
                                >
                            </textarea>
                            </>}
                        </form>
                    </div>
                    </div>
                   )
}
export default ContactUs;