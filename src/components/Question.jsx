import Answers from './Answers';
import QUESTION from '../questions.js';
import Timer from './Timer.jsx';

const TIMEOUT = 10000;

export default function Question({ questionIndex, onSelectAnswer }) {
  const question = QUESTION[questionIndex];

  return (
    <div>
      <Timer
        key={questionIndex}
        timeout={TIMEOUT}
        onTimeout={() => onSelectAnswer(null)}
      />
      <h2 className="font-roboto text-2xl text-[#c1b2dd] font-bold mb-4 gap-4">
        {question.text}
      </h2>
      <Answers answers={question.answers} onSelectAnswer={onSelectAnswer} />
    </div>
  );
}
