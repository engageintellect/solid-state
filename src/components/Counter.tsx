import { createSignal } from "solid-js";
import { count, setCount } from "../stores/CountStore";

export default function Counter() {
  return (
    <div class="my-5">
      <div class="">
        <strong>Items: </strong>
        {count()}
      </div>

      <div class="flex gap-2">
        <button
          class="bg-white shadow-sm hover:shadow-md transition-all duration-300 py-2 px-4 rounded-md uppercase font-semibold"
          onClick={() => setCount(count() + 1)}
        >
          Add
        </button>
        <button
          class="bg-white shadow-sm hover:shadow-md transition-all duration-300 py-2 px-4 rounded-md uppercase font-semibold"
          onClick={() => setCount(count() - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
