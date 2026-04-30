import { EXPERIENCE } from "../data/chapters";

export default function FellowshipSection() {
  return (
    <div className="panel panel--fellowship">
      <div className="panel__kicker">
        <span className="panel__numeral">II</span>
        <span className="panel__chap">Chapter II · The Fellowship</span>
      </div>

      <h2 className="section__title">Teams that shipped together.</h2>

      <p className="section__lead">
        A decade with three companies. Every role left me with better engineers
        as friends and a broken-in mental model of a new problem domain.
      </p>

      <ol className="timeline">
        {EXPERIENCE.map((job) => (
          <li key={job.company} className="timeline__item">
            <div className="timeline__head">
              <div>
                <h3 className="timeline__company">{job.company}</h3>
                <p className="timeline__role">{job.role}</p>
              </div>
              <span className="timeline__period">{job.period}</span>
            </div>
            <p className="timeline__blurb">{job.blurb}</p>
            <ul className="timeline__stack" aria-label="Stack">
              {job.stack.map((s) => (
                <li key={s} className="timeline__chip">
                  {s}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
