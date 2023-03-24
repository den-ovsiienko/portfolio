'use client';

import { IMAGE_URL } from '@/utils/constants';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useState } from 'react';

const cardData = [
  {
    imageSrc: IMAGE_URL,
    text: 'This is card 1',
  },
  {
    imageSrc: IMAGE_URL,
    text: 'This is card 2',
  },
  {
    imageSrc: IMAGE_URL,
    text: 'This is card 3',
  },
];

const ParallaxCard = ({
  imageSrc,
  text,
}: {
  imageSrc: string;
  text: string;
}) => (
  <div className="flex items-center justify-center w-1/2">
    <div className="w-1/2">
      <img src={imageSrc} alt="card" className="w-full h-auto" />
    </div>
    <div className="w-1/2">
      <p>{text}</p>
    </div>
  </div>
);

const ParallaxExample = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const totalCards = cardData.length; // Change this value according to the number of cards you have

  // const handleScroll = () => {
  //   const scrollTop = window.scrollY;
  //   const cardHeight = window.innerHeight / totalCards;
  //   const newCardIndex = Math.floor(scrollTop / cardHeight);

  //   console.log(scrollTop);
  //   console.log(newCardIndex);

  //   if (newCardIndex !== currentCardIndex) {
  //     setCurrentCardIndex(newCardIndex);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [currentCardIndex]);
  return (
    <Parallax pages={cardData.length} style={{ backgroundColor: '#fff' }}>
      {cardData.map((card, index) => (
        <ParallaxLayer key={index} offset={index} speed={1} sticky={{
          start: index,
          end: index + 1,
        }}>
          <div className="h-screen flex items-center justify-center">
            <ParallaxCard imageSrc={card.imageSrc} text={card.text} />
          </div>
        </ParallaxLayer>
      ))}
    </Parallax>
  );
};

export default ParallaxExample;
