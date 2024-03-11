import React, { useState, useEffect } from 'react';


const wordListBeta: string[] = ['EAGLE', 'EVENS', 'ZIPPY', 'JACKS'];

const getRandomWord = (): string => {
  const randomIndex: number = Math.floor(Math.random() * wordListBeta.length);
  return wordListBeta[randomIndex];
};

const Wordle: React.FC = () => {
  const [targetWord, setTargetWord] = useState<string>(getRandomWord());
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');

  useEffect(() => {
    console.log(targetWord);
    // if (currentGuess.length === targetWord.length) {
    //   evaluateGuess();
    // }
  }, [currentGuess, targetWord]);

  const evaluateGuess = () => {
    setAttempts((prevAttempts) => prevAttempts + 1);
    //check if guess is correct
  };

  const restartGame = () => {
    setTargetWord(getRandomWord());
    setCurrentGuess('');
    setAttempts(0);
    setFeedback('');
  }

  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentGuess(event.target.value.toLowerCase().slice(0, targetWord.length));
  };

  return (
    <div>
      <h1>Wordle</h1>
      <div>Guess the word:</div>
      <div>
        <input
          type="text"
          value={currentGuess}
          onChange={changeInput}
          maxLength={targetWord.length}
        />
        <button onClick={evaluateGuess}>Guess</button>
      </div>
      <div>Attempts: {attempts}</div>
      <div>{feedback}</div>
      <button onClick={restartGame}>Restart Game</button>
    </div>
  );

}

export default Wordle;