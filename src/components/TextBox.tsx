import { useEffect, useRef, useState } from 'react';

interface TextBoxProps {
  title: string;
  content: React.ReactNode;
  additionalClassName?: string; // Optional prop for additional className
}

const TextBox: React.FC<TextBoxProps> = ({ title, content, additionalClassName}) => {
  const textBoxRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentTextBox = textBoxRef.current;
      if (currentTextBox) {
        const topOffset = currentTextBox.getBoundingClientRect().top;
        const bottomOffset = currentTextBox.getBoundingClientRect().bottom;
        const isVisible = topOffset < window.innerHeight && bottomOffset >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={textBoxRef} className={`textbox ${isVisible ? 'fade-in' : ''} ${additionalClassName || ''}`}>
      <h3 className='header'>{title}</h3>
      <p className='text'>{content}</p>
    </div>
  );
};

export default TextBox;