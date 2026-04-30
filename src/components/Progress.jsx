import { CHAPTERS } from "../data/chapters";

export default function Progress({ progress }) {
  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__track">
        <div
          className="progress__fill"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <div className="progress__ticks">
        {CHAPTERS.map((c) => (
          <span key={c.id} className="progress__tick" />
        ))}
      </div>
    </div>
  );
}
