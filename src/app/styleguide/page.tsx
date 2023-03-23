import Button from '@/components/Button';
import Card from '@/components/Card';
import Emoji from '@/components/Emoji';
import Input from '@/components/Input';
import Navbar from '@/components/Navbar';
import TypingText from '@/components/TypingText';
import { IMAGE_URL } from '@/utils/constants';

const colors = [
  { name: 'Primary', color: 'bg-primary' },
  { name: 'Secondary', color: 'bg-secondary' },
  { name: 'Headline', color: 'bg-headline' },
  { name: 'Body', color: 'bg-body' },
  { name: 'Overlay', color: 'bg-overlay' },
  { name: 'Error', color: 'bg-error' },
];

export default function Styleguide() {
  return (
    <>
      <TypingText variant="styleguide" />

      {/* Colors */}
      <section className="mt-8">
        <h2 className="text-2xl border-b">Colors</h2>
        <div>
          {colors.map((item, index) => (
            <div
              className={`inline-flex w-fit flex-col items-center gap-2 mt-2 ${
                index != 0 ? 'ml-4' : ''
              }`}
              key={item.name}
            >
              <div className={`w-20 h-20 ${item.color} rounded-full`} />
              <span className="text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Fonts */}
      <section className="mt-8">
        <h2 className="text-2xl border-b">Fonts</h2>
        <div className="gap-2 mt-2">
          <p className="text-5xl">Text 5XL</p>
          <p className="text-4xl">Text 4XL</p>
          <p className="text-3xl">Text 3XL</p>
          <p className="text-2xl">Text 2XL</p>
          <p className="text-xl">Text XL</p>
          <p className="text-lg">Text LG</p>
          <p className="text-base">Text Base</p>
          <p className="text-sm">Text SM</p>
          <p className="text-xs">Text XS</p>
        </div>
        <code className="mt-2 text-sm">
          {'<p className="text-5xl">Text 5XL</p>'}
          <br />
          {'<p className="text-4xl">Text 4XL</p>'}
          <br />
          {'<p className="text-3xl">Text 3XL</p>'}
          <br />
          {'<p className="text-2xl">Text 2XL</p>'}
          <br />
          {'<p className="text-xl">Text XL</p>'}
          <br />
          {'<p className="text-lg">Text LG</p>'}
          <br />
          {'<p className="text-base">Text Base</p>'}
          <br />
          {'<p className="text-sm">Text SM</p>'}
          <br />
          {'<p className="text-xs">Text XS</p>'}
        </code>
      </section>

      {/* Buttons */}
      <section className="mt-8">
        <h2 className="text-2xl border-b">Buttons</h2>
        <div>
          <Button className="mt-2">Primary</Button>
          <Button className="ml-2 mt-2" variant="outlined">
            Outlined
          </Button>
          <Button className="ml-2 mt-2" variant="tertiary">
            Tertiary
          </Button>

          <Button className="ml-2 mt-2" iconLeft="👍">
            Icon Primary
          </Button>
          <Button className="ml-2 mt-2" iconLeft="👍" variant="outlined">
            Icon Outlined
          </Button>
          <Button className="ml-2 mt-2" iconLeft="👍" variant="tertiary">
            Icon Tertiary
          </Button>
        </div>
        <code className="mt-2 text-sm">
          {'<Button>Primary</Button>'}
          <br />
          {'<Button type="outlined">Outlined</Button>'}
          <br />
          {'<Button type="tertiary">Tertiary</Button>'}

          <br />
          <br />
          {'<Button iconLeft="👍">Icon Primary</Button>'}
          <br />
          {'<Button iconLeft="👍" type="outlined">Icon Outlined</Button>'}
          <br />
          {'<Button iconLeft="👍" type="tertiary">Icon Tertiary</Button>'}
        </code>
      </section>

      {/* Inputs */}
      <section className="mt-8">
        <h2 className="text-2xl border-b">Inputs</h2>
        <div className="flex flex-col gap-2 mt-2">
          <Input label="Name" type="text" placeholder="Your name..." />

          <Input
            error="Your name is incorrect"
            label="Invalid Input"
            type="text"
            placeholder="Ops..."
          />
        </div>
        <code className="mt-2 text-sm">
          {'<Input label="Name" type="text" placeholder="Your name..." />'}
          <br />
          {
            '<Input error="Your name is incorrect" label="Invalid Input" type="text" placeholder="Ops..." />'
          }
        </code>
      </section>

      {/* Card */}
      <section className="mt-8">
        <h2 className="text-2xl border-b">Cards</h2>
        <div className="flex flex-row gap-2 mt-2">
          <Card
            title="Title"
            description="Some description is here..."
            image={IMAGE_URL}
          />
        </div>
        <code className="mt-2 text-sm">
          {
            '<Card title="Title" description="Some description is here..." image="<IMG_URL>" />'
          }
        </code>
      </section>

      {/* Typing Text */}
      <section className="mt-8">
        <h2 className="text-2xl border-b">Typing Text</h2>
        <div className="mt-2">
          <TypingText loop variant="typing" />
        </div>
        <code className="mt-2 text-sm">
          {'<TypingText loop type="typing" />'}
        </code>
      </section>

      {/* Emojii */}
      <section className="mt-8">
        <h2 className="text-2xl border-b">Emojii</h2>
        <div className="mt-2">
          <Emoji icon="😀" />
        </div>
        <code className="mt-2 text-sm">{'<Emoji icon="😀" />'}</code>
      </section>

      {/* Navbar */}
      <section className="mt-8">
        <h2 className="text-2xl border-b">Navbar</h2>
        <div className="mt-2">
          <Navbar styleguide />
        </div>
        <code className="mt-2 text-sm">{'<Navbar />'}</code>
      </section>

      {/* Bio */}
      <section className="mt-8">
        <h2 className="text-2xl border-b">Bio</h2>
        <div className="mt-2 max-w-xl">
         <TypingText delay={1} variant='bio' />
        </div>
      </section>
    </>
  );
}
