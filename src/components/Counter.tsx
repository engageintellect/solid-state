import { createSignal } from "solid-js";
import { count, setCount } from "../stores/CountStore";

export default function Counter() {
  return (
    <div class="my-5">
      <div class="">
        <strong>Items: </strong>
        {count()}
      </div>

      <div class="flex flex-col sm:flex-row gap-2">
        <button
          class="bg-white w-full shadow-sm hover:shadow-md transition-all duration-300 py-2 px-4 rounded-md uppercase font-semibold text-xs"
          onClick={() => setCount(count() + 1)}
        >
          Increment
        </button>
        <button
          class="bg-white w-full shadow-sm hover:shadow-md transition-all duration-300 py-2 px-4 rounded-md uppercase font-semibold text-xs"
          onClick={() => setCount(count() - 1)}
        >
          Decrement
        </button>

        <button
          class="bg-white w-full shadow-sm hover:shadow-md transition-all duration-300 py-2 px-4 rounded-md uppercase font-semibold text-xs"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
