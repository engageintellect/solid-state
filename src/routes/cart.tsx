import { Title } from "solid-start";
import { count, setCount } from "~/stores/CountStore";

export default function Cart() {
  return (
    <main class="my-10">
      <Title>Cart</Title>
      <div class="text-4xl font-semibold my-5">Cart</div>
      <div>There are {count()} items in your cart.</div>
      <div>
        <strong>Times 2:</strong> {count() * 2}
      </div>
      <div>
        <strong>Times 3:</strong> {count() * 3}
      </div>

      <div>
        <strong>Squared:</strong> {count() * count()}
      </div>
    </main>
  );
}
