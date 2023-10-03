import { useState } from 'react';
import chevron from '../utils/SVG/chevron-right.svg';

const FaqData = ({ prop }) => {
  const { Question, Answer } = prop;
  console.log(Question, Answer);

  const hide =
    'max-h-0 mb-2 overflow-hidden transition-all duration-300 ease-in';
  const show =
    'max-h-[200px] mb-4 overflow-hidden transition-all duration-300 ease-in';
  const [answerClass, setAnswerClass] = useState(hide);

  const open = 'w-6 transition-transform duration-200 ease-in rotate-0';
  const close = 'w-6 transition-transform duration-200 ease-in rotate-90';

  const [toggleIconClass, setToggleIconClass] = useState(open);

  const toggleAnswer = () => {
    if (answerClass === hide) {
      setAnswerClass(show);
      setToggleIconClass(close);
    } else {
      setAnswerClass(hide);
      setToggleIconClass(open);
    }
  };
  return (
    <li className="list-none p-2 border-b-[1px] border-b-orange-600">
      <div
        className="flex justify-between cursor-pointer mb-2"
        onClick={toggleAnswer}
      >
        <h2 className="text-xl font-medium text-orange-600">{Question}</h2>
        <img className={toggleIconClass} src={chevron} />
      </div>
      <p className={answerClass}>{Answer}</p>
    </li>
  );
};

export default FaqData;
