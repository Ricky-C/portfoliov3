export default function ScrollHint({ visible }) {
  return (
    <div
      className={`hint ${visible ? "" : "hint--hidden"}`}
      aria-hidden="true"
    >
      <span className="hint__text">scroll to begin</span>
      <span className="hint__line" />
      <span className="hint__arrow">↓</span>
    </div>
  );
}
