import TypedComponents from "./typed";

export default function Diff() {
  return (
    <div className="diff h-[70vh]">
      <div className="diff-item-1">
        <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
          <TypedComponents />
        </div>
      </div>
      <div className="diff-item-2">
        <div className="bg-base-200 text-9xl font-black grid place-content-center">
          <TypedComponents />
        </div>
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
}
