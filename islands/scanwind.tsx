import { useSignal } from "@preact/signals";

export default () => {
  const counter = useSignal(0);

  return (
    <div
      class="absolute right-4 top-4 border rounded-full drop-shadow-lg backdrop-blur-md w-12 h-12 flex items-center justify-center select-none cursor-pointer active:scale-95 duration-75 text-slate-300 text-lg font-normal"
      onClick={() => (counter.value += 1)}
    >
      {counter}
    </div>
  );
};
