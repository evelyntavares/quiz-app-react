import { useEffect, useState } from 'react';

export default function Timer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((previousRemainingTime) => previousRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let cssClass =
    '[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg ';

  if (mode === 'answered') {
    cssClass +=
      '[&::-webkit-progress-bar]:bg-[#6a558a] [&::-webkit-progress-value]:bg-[#f8e59c]';
  } else {
    cssClass +=
      '[&::-webkit-progress-bar]:bg-[#6a558a] [&::-webkit-progress-value]:bg-[#9e5ef8]';
  }

  return (
    <progress
      id="question-timer"
      value={remainingTime}
      max={timeout}
      className={cssClass}
    />
  );
}
