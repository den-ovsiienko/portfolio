import { TypewriterClass } from 'typewriter-effect';
import ReactDomServer from 'react-dom/server';

export type TypingTextVariant = keyof typeof typingTextVariants;

export type TypingTextOption = keyof typeof typingTextOptions;

const bioFunc = (typewriter: TypewriterClass) => {
  const string = ReactDomServer.renderToString(
    <span className="text-4xl font-normal leading-relaxed">
      <span className="cursor-default animate-shake">👋</span> Hi, I'm{' '}
      <span className="text-secondary">Denys Ovsiienko</span> - a 22-year-old{' '}
      <span className="text-error">Web</span>,{' '}
      <span className="text-error">Mobile</span> and{' '}
      <span className="text-error">DevOps</span>{' '}
      <span className="font-bold">full stack</span> engineer from 🇺🇦 Ukraine.
    </span>
  );

  typewriter.typeString(string).start();
};

const styleguideFunc = (typewriter: TypewriterClass) => {
  typewriter
    .typeString(
      ReactDomServer.renderToString(
        <span className="text-4xl font-normal">📕 Style Guide</span>
      )
    )
    .start();
};

const typing = (typewriter: TypewriterClass) => {
  typewriter
    .typeString(
      ReactDomServer.renderToString(
        <span className="text-4xl font-normal">Typing Text...</span>
      )
    )
    .start();
};

const helloFunc = (typewriter: TypewriterClass) => {
  const helloString = ReactDomServer.renderToString(
    <span className="text-4xl font-normal">👋 Hello there! </span>
  );

  const nameString = ReactDomServer.renderToString(
    <span className="text-4xl">
      I'm
      <br />
      <span className="text-secondary text-4xl pl-20">Denys Ovsiienco</span>
    </span>
  );

  const newNameString1 = ReactDomServer.renderToString(
    <span className="text-error text-4xl">k</span>
  );
  const newNameString2 = ReactDomServer.renderToString(
    <span className="text-4xl text-secondary">o</span>
  );

  typewriter
    .typeString(helloString)
    .callFunction(() => {
      console.log('String typed out!');
    })
    .pauseFor(500)
    .typeString(nameString)
    .pauseFor(1000)
    .deleteChars(2)
    .typeString(newNameString1)
    .typeString(newNameString2)
    .start();
};

export const typingTextVariants = {
  styleguide: styleguideFunc,
  typing: typing,
  hello: helloFunc,
  bio: bioFunc,
};

export const typingTextOptions = {};
