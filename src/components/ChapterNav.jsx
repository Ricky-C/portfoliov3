import { useState } from "react";
import { CHAPTERS } from "../data/chapters";
import ContactModal from "./ContactModal";

export default function ChapterNav({ current, onJump }) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <nav className="chap-nav" aria-label="Chapters">
      <div className="chap-nav__brand">
        <span className="chap-nav__mark" aria-hidden="true">
          ◆
        </span>
        <span className="chap-nav__name">Enrique</span>
      </div>

      <ol className="chap-nav__list">
        {CHAPTERS.map((c, i) => (
          <li key={c.id}>
            <button
              type="button"
              className={`chap-nav__btn ${current === i ? "is-active" : ""}`}
              onClick={() => onJump(i)}
              aria-current={current === i ? "page" : undefined}
            >
              <span className="chap-nav__num" aria-hidden="true">
                {c.numeral}
              </span>
              <span className="chap-nav__label">{c.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <button
        type="button"
        className="chap-nav__cta"
        onClick={() => setContactOpen(true)}
      >
        Light the Beacon
        <span aria-hidden="true"> →</span>
      </button>

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </nav>
  );
}
