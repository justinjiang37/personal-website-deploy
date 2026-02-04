import { useState, useEffect } from 'react';

function TypewriterEffect({ wordList }: { wordList: string[] }) {
  const words = wordList;

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));

        if (currentText === currentWord) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? 50 : isPaused ? 2000 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words]);

  return (
    <span className="text-gray-900">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Intro() {
  return (
    <div>
      <div className="flex-1">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-normal text-gray-900 mb-4">
            Hey, I&apos;m Justin
          </h1>
          <p className="text-4xl font-normal text-gray-900 mb-4">
            I am a <TypewriterEffect wordList={['SWE in-training', 'private pilot', 'basketball geek', 'amateur producer', 'CECS student at USC']} />
          </p>
          <p className="text-4xl font-normal text-gray-900">
            I aspire to be a <TypewriterEffect wordList={['software engineer', 'quantitative developer', 'someone who can dunk']} />
          </p>
        </div>
      </div>
    </div>
  );
}