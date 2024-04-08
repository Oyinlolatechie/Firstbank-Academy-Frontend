import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return(
        <>

            <div className=" text-[#000000AD] rounded bg-[#F8F9F9] p-4">
                <button 
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    className="flex justify-between w-full"
                >
                    <span className="font-bold">{question}</span>
                    {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                    <svg
                        className="fill-black-500 shrink-0 ml-8"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center transition duration-200 ease-out ${
                                accordionOpen && "!rotate-180"
                            }`}
                        />
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                accordionOpen && "!rotate-180"
                            }`}
                        />
                    </svg>
                </button>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                    accordionOpen 
                    ? 'grid-rows-[1fr] opacity-100 py-4'
                    : 'grid-rows-[0fr] opacity-0'
                }`}>
                    <div className="overflow-hidden text-lg leading-7 font-normal">{answer}</div>
                </div>
            </div>
            
        </>
    )
}

export default Accordion;