import { Title } from "solid-start";
import Counter from "~/components/Counter";
import Hero from "~/components/Hero";

export default function Home() {
  return (
    <main class="my-10">
      <Title>Home</Title>

      <div class="text-4xl font-semibold">Home</div>
      <Counter />

      <div class="my-10"></div>
    </main>
  );
}
