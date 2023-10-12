import chevron from '../utils/SVG/chevron-right.svg';

const FaqData = ({ data, isOpen, toggleFunc }) => {
  const { Question, Answer } = data;

  const hide = 'max-h-0 mb-2 overflow-hidden transition-all duration-300';
  const show = 'max-h-[200px] mb-2 overflow-hidden transition-all duration-300';
  const closed = 'w-6 transition-transform duration-200 ease-in rotate-0';
  const opened = 'w-6 transition-transform duration-200 ease-in rotate-90';

  const answerClass = isOpen ? show : hide;
  const toggleIconClass = isOpen ? opened : closed;

  return (
    <li className="list-none p-2 border-b-[1px] border-b-orange-600">
      <div
        className="flex justify-between cursor-pointer mb-2"
        onClick={toggleFunc}
      >
        <h2 className="text-xl font-medium text-orange-600">{Question}</h2>
        <img className={toggleIconClass} src={chevron} />
      </div>
      <p className={answerClass}>{Answer}</p>
    </li>
  );
};

export default FaqData;
