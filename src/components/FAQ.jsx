import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
    return(
        <>
            
            <div className="w-[747px] mx-auto space-y-6 pb-10">
                <h2 className="font-bold text-center text-5xl text-[#182233]">FAQ</h2>
                <p className="text-center text-lg font-normal text-[#000000AD]">Some frequently asked questions at the academy</p>
                <div className="p-4 px-10 space-y-3 ">
                    <Accordion
                        question='What is First Academy all about?'
                        answer='First Academy is an arm of the FirstBank Corporate University that 
                                was designed to drive upskilling, cross skilling, and hands-on learning 
                                of our tech talents.' 
                    />
                    <Accordion
                        question='What tracks are available in the Academy?'
                        answer='Software Engineering, Data Analytics, Cybersecurity & Infrastrucutre' 
                    />
                    <Accordion
                        question='What is the duration of the training?'
                        answer='The duration of the training program is anticipated to span a period
                                ranging from three to four months, contingent upon the specific track
                                chosen by each of the delegates.' 
                    />
                    <Accordion
                        question='Any plan for accomodation?'
                        answer='First Academy will not be responsible for the accomodation of any delegate
                                apart from foreign delegates from countries such as Ghana, DRC, etc.' 
                    />
                    <Accordion
                        question='Where is the Academy located?'
                        answer='First Academy is located at Plot 2, Abebe Village Road, Iganmu, Lagos, Nigeria' 
                    />
                </div>
            </div>
            
        </>
    )
}

export default FAQ;