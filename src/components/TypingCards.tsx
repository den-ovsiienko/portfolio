'use client';
import { bioString, typingTextVariants } from '@/utils/typingTextVariants';
import React, { useRef, useState } from 'react';
import TypingText from './TypingText';
import { TypewriterClass } from 'typewriter-effect';
import { IMAGE_URL, IMAGE_URL_2, motionShowProps } from '@/utils/constants';
import Card from './Card';
import ReactDomServer from 'react-dom/server';
import Button from './Button';
import { motion, AnimatePresence, useInView } from 'framer-motion';
const data = [
  {
    title: 'GameList GG',
    description:
      "A new era of game tracking has begun! Score, track, and share how many games you've played. Explore game suggestions and find the games the community votes as the best.",
    image: 'https://api.pikwy.com/web/641d422c1dde1e279610d904.jpg',
  },
  {
    title: 'Project 2',
    description:
      'In hac habitasse platea dictumst. Ut ut hendrerit turpis, quis lacinia massa. Nulla ipsum ante, sollicitudin vitae velit nec, congue posuere lorem. Nullam gravida blandit magna, eu aliquam elit feugiat at. Maecenas in tempus dolor. Integer dignissim lacus sed luctus consequat. Phasellus egestas, libero quis dictum lacinia, massa tellus blandit leo, vel semper nunc lacus vel ex. Nullam sed luctus elit. Nam finibus euismod eros, in dignissim odio. Mauris maximus venenatis turpis, quis pretium mauris elementum nec. Quisque mi quam, eleifend eu maximus eget, gravida eu ex. Integer orci diam, placerat id odio a, rhoncus consequat lacus. Curabitur in risus vitae sapien luctus fermentum.',
    image: IMAGE_URL_2,
  },
];
const TypingCards = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const typewriterRef = useRef<TypewriterClass>();
  const ref = useRef<any>(null);
  const isInView = useInView(ref);

  const nextDisabled = currentIndex === data.length - 1;
  const prevDisabled = currentIndex === 0;

  const updateText = (index: number) => {
    const item = data[index];
    typewriterRef.current?.deleteAll().start();
    typewriterRef.current
      ?.stop()
      .changeDelay('natural')
      .typeString(
        ReactDomServer.renderToString(
          <>
            <span className="text-lg bg-primary text-black">{item.title}</span>
            <br />
            <br />
          </>
        )
      )
      .changeDelay(1)
      .pauseFor(500)
      .pasteString(
        ReactDomServer.renderToString(
          <>
            <span className="text-base">{item.description}</span>
          </>
        ),
        null
      )
      .start();
  };

  const onInit = (typewriter: TypewriterClass) => {
    typewriterRef.current = typewriter;
    updateText(currentIndex);
  };

  const handleNext = () => {
    if (nextDisabled) return;
    setCurrentIndex(currentIndex + 1);
    updateText(currentIndex + 1);
  };

  const handleBack = () => {
    if (prevDisabled) return;
    setCurrentIndex(currentIndex - 1);
    updateText(currentIndex - 1);
  };

  const getIndicators = (className: string) => (
    <div
      className={`flex items-center justify-between w-full lg:w-1/2 lg:pl-10, ${className}`}
    >
      <span className="text-sm text-error">
        Project: {currentIndex + 1}/{data.length}
      </span>
      <div>
        <Button
          onClick={handleBack}
          iconLeft="◀️"
          variant="tertiary"
          className="mr-2"
        >
          Back
        </Button>
        <Button onClick={handleNext} iconRight="▶️">
          Next
        </Button>
      </div>
    </div>
  );

  const currentItem = data[currentIndex];
  return (
    <motion.div
      {...motionShowProps}
      viewport={{
        margin: '-25%',
      }}
      className="w-full max-w-screen-lg m-auto"
    >
      <h2 className="mb-5 text-xl font-bold">⭐ My Cool Projects</h2>
      <div className=" flex flex-col items-end justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-2 lg:gam-10 relative">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              className="w-full lg:w-1/2 h-auto rounded shadow-lg aspect-box object-cover"
              src={currentItem.image}
              initial={{ opacity: 0, translateY: '-25%' }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '25%', position: 'absolute' }}
              // transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          {getIndicators('lg:hidden m-0')}
          <div className="flex-1" ref={ref}>
            {isInView && (
              <TypingText
                deleteSpeed={0}
                cursorClassName="text-xl"
                onInit={onInit}
              />
            )}
          </div>
        </div>
        {getIndicators('lg:flex hidden')}
      </div>
    </motion.div>
  );
};

export default TypingCards;
