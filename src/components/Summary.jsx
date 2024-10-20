import QUESTIONS from '../questions';
import finishedQuizImage from '../assets/quiz-complete.png';

export default function Summary({ userAnswers }) {
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / QUESTIONS.length) * 100
  );

  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / QUESTIONS.length) * 100
  );

  const wrongAnswerShare = 100 - (correctAnswersShare + skippedAnswersShare);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gradient-to-b from-[#a17eda] to-[#895fc4] max-w-[40rem] rounded-lg box-border shadow-[1px 1px 8px 1px rgba(0, 0, 0, 0.6)] p-8 m-8 flex flex-col items-center">
        <img
          src={finishedQuizImage}
          alt="finished game image"
          className="block object-contain rounded-full border-solid border-2 border-[#3a2353] drop-shadow-[0_0_4px_rgba(0, 0, 0, 0.6)] w-32 h-32 bg-[#c18cfa] p-4"
        />
        <h2 className="font-roboto text-5xl text-[#3a2353] uppercase my-8 ">
          Quiz completed!
        </h2>
        <section className="flex  flex-1 gap-12 w-[60%] m-8 pb-8 border-b-2 border-b-[#594276]">
          <p className="flex flex-col flex-1 m-0">
            <span className="font-roboto text-5xl text-[#594276]">
              {correctAnswersShare}%
            </span>
            <span className="uppercase font-roboto text-sm text-[#30273a]">
              Answered correctly
            </span>
          </p>
          <p className="flex flex-col flex-1 m-0">
            <span className="font-roboto text-5xl text-[#594276]">
              {wrongAnswerShare}%
            </span>
            <span className="uppercase font-roboto text-sm text-[#30273a]">
              Answered incorrectly
            </span>
          </p>
          <p className="flex flex-col flex-1 m-0">
            <span className="font-roboto text-5xl text-[#594276]">
              {skippedAnswersShare}%
            </span>
            <span className="uppercase font-roboto text-sm text-[#30273a]">
              skipped
            </span>
          </p>
        </section>
        <ul>
          {userAnswers.map((answer, index) => {
            const correctAnswer = QUESTIONS[index].answers[0];
            let cssClass;

            switch (answer) {
              case correctAnswer:
                cssClass = 'font-bold text-[#054e37]';
                break;
              case null:
                cssClass = 'text-[#d1baf2]';
                break;
              default:
                cssClass = 'text-[#730b4b]';
                break;
            }

            return (
              <li
                key={index}
                className="flex flex-col items-center font-roboto my-10"
              >
                <h3 className="text-lg text-center bg-[#2c203d] text-[#d8cde8] w-8 h-8 rounded-[50%]">
                  {index + 1}
                </h3>
                <p className="text-lg text-[#30273a] ">
                  {QUESTIONS[index].text}
                </p>
                <p className={cssClass}>{answer ?? 'Skipped'}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
