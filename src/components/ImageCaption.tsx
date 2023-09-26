import { useEffect, useRef, useState } from 'react';

interface ImageCaptionProps {
    imageUrl: string;
    captionText: string;
    additionalClassName?: string; // Optional prop for additional className
}

const ImageCaption: React.FC<ImageCaptionProps> = ({ imageUrl, captionText, additionalClassName }) => {
  const captionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentCaption = captionRef.current;
      if (currentCaption) {
        const topOffset = currentCaption.getBoundingClientRect().top;
        const isVisible = topOffset < window.innerHeight * 0.9;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call the function on initial render to check visibility

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={captionRef} className={`${isVisible ? 'fade-in' : ''} ${additionalClassName || ''}`}>
      <div className={`${additionalClassName}First`}>
        <img src={imageUrl} className='image'></img>
      </div>
      <div className={`${additionalClassName}Second`}>
        <p className='text'>{captionText}</p>
      </div>
    </div>
  );
};

export default ImageCaption;