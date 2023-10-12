import { useState } from 'react';
import { FAQ_LIST } from '../utils/constants';
import FaqData from '../components/_FaqData';

const FAQ = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleAnswer = index => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  return (
    <div className="container text-stone-700">
      <h1 className="font-bold font-oswald text-3xl mb-10 underline text-orange-600 text-center">
        Frequently Asked Questions
      </h1>
      <ul>
        {FAQ_LIST.map((data, index) => (
          <FaqData
            key={data.Question}
            data={data}
            isOpen={openQuestionIndex === index}
            toggleFunc={() => toggleAnswer(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
