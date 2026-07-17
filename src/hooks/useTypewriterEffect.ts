import { useState, useRef, useEffect } from 'react';

const DEFAULT_SPEED_MS = 12;

export const useTypewriterEffect = (text: string, speed = DEFAULT_SPEED_MS) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isOpen && displayedText === '') {
      setIsTyping(true);
      let i = 0;
      intervalRef.current = setInterval(() => {
        i++;
        setDisplayedText(text.slice(0, i));
        if (i >= text.length) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          setIsTyping(false);
        }
      }, speed);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // comment on next line supresses a fals positive for displayedText and text/speed, it is necessary.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleToggle = () => {
    if (!isOpen) {
      setDisplayedText('');
    }
    setIsOpen((prev) => !prev);
  };

  return { isOpen, displayedText, isTyping, handleToggle };
};
