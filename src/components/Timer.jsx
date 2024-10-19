import { useEffect, useState } from 'react';

export default function Timer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('setting timeout');

    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('setting interval');
    const interval = setInterval(() => {
      setRemainingTime((previousRemainingTime) => previousRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-timer"
      value={remainingTime}
      max={timeout}
      className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-[#6a558a] 
      [&::-webkit-progress-value]:bg-[#9e5ef8]"
    />
  );
}
