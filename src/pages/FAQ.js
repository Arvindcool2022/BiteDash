import { useState } from 'react';
import { FAQ_LIST } from '../utils/constants';
import FaqData from './_FaqData';

const FAQ = () => {
  return (
    <div className="container text-stone-700">
      <h1 className="font-bold font-oswald text-3xl mb-10 underline text-orange-600 text-center">
        Frequently Asked Questions
      </h1>
      <ul>
        {FAQ_LIST.map(data => (
          <FaqData key={data.Question} prop={data} />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

/* {FAQ_LIST.map(data => (
          <li className="list-none">
            <h2
              onClick={toggleAnswer}
              className="text-xl cursor-pointer font-medium text-orange-500 mb-2"
            >
              {data.Question}
              <span className="float-right md:pe-10">+</span>
            </h2>
            <p className={className}>{data.Answer}</p>
          </li>
        ))} */
