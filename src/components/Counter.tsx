import { createSignal } from "solid-js";
import { count, setCount } from "../stores/CountStore";

export default function Counter() {
  return (
    <div>
      <div>Items: {count()}</div>

      <button onClick={() => setCount(count() + 1)}>Add</button>
      <button onClick={() => setCount(count() - 1)}>Decrement</button>
    </div>
  );
}
