import { useState } from 'react';
import Question from './Question';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((previousAnswer) => {
      return [...previousAnswer, selectedAnswer];
    });
  }

  return (
    <div className="bg-gradient-to-b from-[#3e2a60] to-[#321061] box-border m-auto p-8 shadow-[1px_1px_8px_4px_rgba(12, 5, 32, 0.6)] rounded-xl text-center h-96 w-[50rem]">
      <Question
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
