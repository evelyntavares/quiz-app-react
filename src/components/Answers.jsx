export default function Answers({ answers, onSelectAnswer }) {
  return (
    <ul className="flex flex-col items-stretch gap-3 ">
      {answers.map((answer) => (
        <li>
          <button
            className="font-roboto bg-[#6cb7f5] hover:bg-[#9d5af5] hover:text-white rounded-3xl py-4 px-8 size-full"
            onClick={() => onSelectAnswer(answer)}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
}
