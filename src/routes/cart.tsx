import { Title } from "solid-start";
import { count, setCount } from "~/stores/CountStore";

export default function Cart() {
  return (
    <main>
      <h1>Cart</h1>
      <div>There are {count()} items in your cart.</div>
    </main>
  );
}
