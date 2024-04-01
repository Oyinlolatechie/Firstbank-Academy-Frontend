import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
    return(
        <>
        <div className="w-[747px] mx-auto space-y-6">
            <h2 className="font-bold text-center">FAQ</h2>
            <p className="text-center">Some frequently asked questions at the academy</p>
            <div className="p-4 rounded-lg bg-[#F8F9F9]">
                <Accordion />
            </div>
        </div>
            
        </>
    )
}

export default FAQ;