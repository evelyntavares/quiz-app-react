export default function Answers({
  answers,
  answerStatus,
  selectedAnswer,
  onSelectAnswer,
}) {
  return (
    <ul className="flex flex-col items-stretch gap-3 ">
      {answers.map((answer) => {
        let cssClass = 'font-roboto rounded-3xl py-4 px-8 size-full';

        const isSelected = selectedAnswer === answer;

        if (isSelected) {
          switch (answerStatus) {
            case 'correct':
              cssClass += ' bg-[#5af59d] text-[#2c203d]';
              break;
            case 'wrong':
              cssClass += ' bg-[#f55a98] text-[#2c203d]';
              break;
            case 'answered':
              cssClass += ' bg-[#f5a76c] text-[#2c203d]';
            default:
              break;
          }
        } else {
          cssClass += ' bg-[#6cb7f5] hover:bg-[#9d5af5] hover:text-white ';
        }

        return (
          <li>
            <button
              className={cssClass}
              onClick={() => onSelectAnswer(answer)}
              disabled={answerStatus !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
