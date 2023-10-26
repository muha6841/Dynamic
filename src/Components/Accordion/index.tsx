import React, { useState } from 'react';

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordions = [
    { title: 'Dynamic Consulting continues to grow and expand?', word: 'Supported by a robust sales force and tight cost controls, Pharm Ltd. experienced sustained double-digit growth over a number of years, only to find that their supply chain struggled to keep pace. In particular, the initial state of the company’s sales.'},
    { title: 'Strategic and commercial approach with issues', word: 'Supported by a robust sales force and tight cost controls, Pharm Ltd. experienced sustained double-digit growth over a number of years, only to find that their supply chain struggled to keep pace. In particular, the initial state of the company’s sales'},
    { title: 'A digital prescription for the pharma industry', word: 'Supported by a robust sales force and tight cost controls, Pharm Ltd. experienced sustained double-digit growth over a number of years, only to find that their supply chain struggled to keep pace. In particular, the initial state of the company’s sales.' },
    { title: 'How do you successfully generate, capture, process?', word: 'Supported by a robust sales force and tight cost controls, Pharm Ltd. experienced sustained double-digit growth over a number of years, only to find that their supply chain struggled to keep pace. In particular, the initial state of the company’s sales.'},
  ];

  return (
    <div className='accordion-detail'>
      {accordions.map((accordion, index) => (
        <div className='para' key={index}>
          <button
            className={`accordion ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleAccordionClick(index)}>
            <div className='text'>{accordion.title}</div>
            <span className={`${activeIndex === index ? "active-accordion" : "default"}`}></span>
          </button>
          {activeIndex === index && <div className='panel'>{accordion.word}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordian;