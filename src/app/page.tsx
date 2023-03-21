import Button from "@/components/Button";
import { TypingText } from "@/components/AnimatedTexts";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">Hi, my name is <TypingText className="pl-8" title="Denys Ovsiienko"/></h1>
      <Button iconLeft="👋" className="mt-4">Click me</Button>
    </main>
  );
}
