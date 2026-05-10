import { useEffect, useMemo, useRef, useState } from "react";

const RESUME_URL = "/Enrique_Caballero_Resume_SeniorSWE.pdf";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/enrique-caballero-779b3796/";

// Email is built at runtime from parts that don't form a recognisable
// email pattern in the bundle source. Defeats naive scrapers that grep
// the static HTML or the minified JS for `[A-Za-z0-9_.+-]+@[...]+`. Not
// proof against scrapers that execute the page, but those are a
// vanishing minority of harvesters in the wild.
function buildEmail() {
  const local = ["caba", "ethernet"].join("");
  const domain = ["gmail", "com"].join(".");
  return local + String.fromCharCode(64) + domain;
}

export default function ContactModal({ open, onClose }) {
  const dialogRef = useRef(null);
  // Compute once on first mount; the result lives in module-scope memory,
  // not in any HTML attribute or rendered until the dialog is opened.
  const email = useMemo(() => buildEmail(), []);
  const [emailRevealed, setEmailRevealed] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
      setEmailRevealed(false);
    }
  }, [open]);

  const onDialogClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  const onEmailClick = (e) => {
    // Set the href just-in-time so the mailto: never appears in static
    // markup. The user's mail client opens the same way as a normal link.
    e.currentTarget.href = `mailto:${email}`;
    setEmailRevealed(true);
  };

  return (
    <dialog
      ref={dialogRef}
      className="contact-modal"
      onClose={onClose}
      onClick={onDialogClick}
      aria-labelledby="contact-modal-title"
    >
      <div className="contact-modal__panel">
        <button
          type="button"
          className="contact-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <p className="contact-modal__eyebrow">Light the Beacon</p>
        <h2 id="contact-modal-title" className="contact-modal__title">
          Three ways to reach me
        </h2>

        <ul className="contact-modal__list">
          <li>
            <a
              className="contact-modal__action"
              href={RESUME_URL}
              download
            >
              <span className="contact-modal__action-label">Resume</span>
              <span className="contact-modal__action-meta">
                Download PDF ⤓
              </span>
            </a>
          </li>
          <li>
            <a
              className="contact-modal__action"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-modal__action-label">LinkedIn</span>
              <span className="contact-modal__action-meta">
                Open profile ↗
              </span>
            </a>
          </li>
          <li>
            <a
              className="contact-modal__action"
              href="#"
              onClick={onEmailClick}
            >
              <span className="contact-modal__action-label">Email</span>
              <span className="contact-modal__action-meta">
                {emailRevealed ? email : "Reveal address ✶"}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </dialog>
  );
}
