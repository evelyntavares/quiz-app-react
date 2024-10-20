import Answers from './Answers';
import QUESTION from '../questions.js';
import Timer from './Timer.jsx';
import { useState } from 'react';

export default function Question({ questionIndex, onSelectAnswer }) {
  const question = QUESTION[questionIndex];

  const [answerState, setAnswerState] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  let timer = 10000;

  if (answerState.selectedAnswer) {
    timer = 1000;
  }

  if (answerState.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswerState({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswerState({
        selectedAnswer: answer,
        isCorrect: answer === QUESTION[questionIndex].answers[0] ? true : false,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerStatus = '';

  if (answerState.selectedAnswer) {
    answerStatus = 'answered';

    if (answerState.isCorrect !== null) {
      answerStatus = answerState.isCorrect ? 'correct' : 'wrong';
    }
  }

  return (
    <div>
      <Timer
        key={questionIndex}
        timeout={timer}
        onTimeout={() => onSelectAnswer(null)}
      />
      <h2 className="font-roboto text-2xl text-[#c1b2dd] font-bold mb-4 gap-4">
        {question.text}
      </h2>
      <Answers
        answers={question.answers}
        answerStatus={answerStatus}
        selectedAnswer={answerState.selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
