import Emoji from '@/components/Emoji';
import ScrollDown from '@/components/ScrollDown';
import TypingCards from '@/components/TypingCards';
import TypingText from '@/components/TypingText';
import { NAVBAR_HEIGHT } from '@/utils/constants';

export default function Home() {
  return (
    <>
      <section
        className="relative w-100 flex items-center justify-center"
        style={{
          height: `calc(100vh - ${NAVBAR_HEIGHT + 30}px)`,
        }}
      >
        <div className='pb-[10%]'>
          <TypingText delay={25} variant="hello" />
        </div>
        <ScrollDown />
      </section>
      <TypingCards />
    </>
  );
}
