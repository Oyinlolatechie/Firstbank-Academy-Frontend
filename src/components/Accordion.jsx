import React, { useState } from "react";

const Accordion = () => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return(
        <>
        <div className=" text-[#000000AD]">
            <button 
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full"
            >
                <span className="font-bold">This is the question</span>
                {accordionOpen ? <span>-</span> : <span>+</span>}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                accordionOpen 
                ? 'grid-rows-[1fr] opacity-100 py-4'
                : 'grid-rows-[0fr] opacity-0'
            }`}>
                <div className="overflow-hidden text-lg leading-7 font-normal">This is the answer</div>
            </div>
        </div>
            
        </>
    )
}

export default Accordion;