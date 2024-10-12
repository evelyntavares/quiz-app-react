import logoImage from '../assets/quiz-logo.png';

const imageDimension = 50;

export default function Header() {
  return (
    <header className="flex flex-col items-center py-12">
      <img
        src={logoImage}
        alt="logo image"
        width={imageDimension}
        height={imageDimension}
      />
      <h1 className="uppercase font-roboto font-bold text-4xl bg-gradient-to-bl from-purple-300 to-purple-600 bg-clip-text text-transparent leading-normal">
        React Quiz
      </h1>
    </header>
  );
}
