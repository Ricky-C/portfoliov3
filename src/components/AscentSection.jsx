import { PROJECTS } from "../data/chapters";

export default function AscentSection() {
  return (
    <div className="panel panel--ascent">
      <div className="panel__kicker">
        <span className="panel__numeral">III</span>
        <span className="panel__chap">Chapter III · The Ascent</span>
      </div>

      <h2 className="section__title">Hard problems, harder won.</h2>

      <p className="section__lead">
        Side quests that became real infrastructure. Each of these is open source
        and documented.
      </p>

      <ul className="projects">
        {PROJECTS.map((p) => (
          <li key={p.name}>
            <a
              className="project"
              href={`https://${p.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project__head">
                <div>
                  <h3 className="project__name">{p.name}</h3>
                  <span className="project__tag">{p.tagline}</span>
                </div>
                <span className="project__link">
                  {p.link}
                  <span aria-hidden="true"> ↗</span>
                </span>
              </div>
              <p className="project__desc">{p.desc}</p>
            </a>
          </li>
        ))}
      </ul>

      <div className="contact" id="contact">
        <p className="contact__eyebrow">Send a raven</p>
        <p className="contact__email">enrique@caballero.dev</p>
        <div className="contact__links">
          <a href="#" onClick={(e) => e.preventDefault()}>
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a href="#" onClick={(e) => e.preventDefault()}>
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href="#" onClick={(e) => e.preventDefault()}>
            Writing
          </a>
        </div>
      </div>
    </div>
  );
}
