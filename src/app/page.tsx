'use client';

import Emoji from '@/components/Emoji';
import ScrollDown from '@/components/ScrollDown';
import TypingCards from '@/components/TypingCards';
import TypingText from '@/components/TypingText';
import { NAVBAR_HEIGHT } from '@/utils/constants';
import {
  IParallax,
  Parallax,
  ParallaxLayer,
  ParallaxLayerProps,
} from '@react-spring/parallax';
import { useRef, useState } from 'react';

export default function Home() {
  const parallaxRef = useRef<IParallax | null>(null);
  const [showScrollDown, setShowScrollDown] = useState<boolean>(true);

  const onScrollCapture = (e: React.UIEvent<HTMLDivElement>) => {
    const scroll = e.currentTarget.scrollTop;
    if (scroll < 100 && !showScrollDown) {
      setShowScrollDown(true);
    } else if (scroll > 100 && showScrollDown) {
      setShowScrollDown(false);
    }
  };
  return (
    <>
      <Parallax ref={parallaxRef} onScrollCapture={onScrollCapture} pages={3}>
        <ParallaxLayer
          // sticky={{
          //   start: 0,
          //   end: 1,
          // }}
          offset={0}
          factor={2}
          // speed={1}
          onScroll={(e) => console.log(e)}
        >
          <img
            className="w-full h-full object-cover"
            src="/parallax/background.svg"
          />
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.2}
          offset={0.25}
          className="max-w-screen-xl-disabled mx-auto"
        >
          <div className="fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
            <TypingText delay={25} variant="hello" />
            <div className=""></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.75}
          speed={0.2}
          className="max-w-screen-xl-disabled mx-auto"
        >
          <img className="w-full h-full object-cover" src="/parallax/sun.svg" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          sticky={{
            start: 0.5,
            end: 1,
          }}
          className="max-w-screen-xl-disabled mx-auto"
        >
          <img
            className="w-full h-full object-cover object-bottom"
            src="/parallax/city-alt.svg"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          factor={1}
          className="max-w-screen-xl-disabled mx-auto flex items-center justify-center"
        >
          <TypingCards />
        </ParallaxLayer>
      </Parallax>
      {showScrollDown && (
        <ScrollDown onClick={() => parallaxRef.current?.scrollTo(2)} />
      )}
    </>
  );
}
