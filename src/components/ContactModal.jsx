import { useEffect, useRef } from "react";

const RESUME_URL = "/Enrique_Caballero_Resume_SeniorSWE.pdf";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/enrique-caballero-779b3796/";
const EMAIL = "cabaethernet@gmail.com";

export default function ContactModal({ open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  // Backdrop click closes the dialog. Clicks on the inner panel have a
  // different target (the panel or its children), so they don't trigger.
  const onDialogClick = (e) => {
    if (e.target === dialogRef.current) onClose();
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
              href={`mailto:${EMAIL}`}
            >
              <span className="contact-modal__action-label">Email</span>
              <span className="contact-modal__action-meta">{EMAIL}</span>
            </a>
          </li>
        </ul>
      </div>
    </dialog>
  );
}
