import { useRef } from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  const faqRef = useRef(null);
  return (
    <>
      <div ref={faqRef} id="faq" className="md:w-[747px] mx-auto space-y-6 pb-10 text-center">
        <h2 className="w-fit font-bold text-center text-[42px] md:text-5xl text-primary mx-auto">FAQ</h2>
        <p className="text-center text-[18px] pl-8 md:text-lg font-normal text-[#000000AD]">
          Some frequently asked questions at the academy
        </p>
        <div className="p-2 px-6 space-y-3 md:p-4 md:px-10">
          <Accordion
            question="What is First Academy all about?"
            answer="First Academy is an arm of the FirstBank Corporate University that 
                                was designed to drive upskilling, cross skilling, and hands-on learning 
                                of our tech talents."
          />
          <Accordion
            question="What tracks are available in the Academy?"
            answer="Software Engineering, Data Analytics, Cybersecurity & Infrastrucutre"
          />
          <Accordion
            question="What is the duration of the training?"
            answer="The duration of the training program is anticipated to span a period
                                ranging from three to four months, contingent upon the specific track
                                chosen by each of the delegates."
          />
          <Accordion
            question="Any plan for accomodation?"
            answer="First Academy will not be responsible for the accomodation of any delegate
                                apart from foreign delegates from countries such as Ghana, DRC, etc."
          />
          <Accordion
            question="Where is the Academy located?"
            answer="First Academy is located at Plot 2, Abebe Village Road, Iganmu, Lagos, Nigeria"
          />
        </div>
      </div>
    </>
  );
};

export default FAQ;
