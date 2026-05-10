export default function ShireSection() {
  return (
    <div className="panel panel--shire">
      <div className="panel__kicker">
        <span className="panel__numeral">I</span>
        <span className="panel__chap">Chapter I · The Shire</span>
      </div>

      <h1 className="section__title hero__title">
        <span className="hero__line">Enrique</span>
        <span className="hero__line hero__line--light">Caballero</span>
      </h1>

      <p className="section__lead">
        Twelve years building the quiet, unglamorous layers that let product
        teams ship fearlessly — schedulers, storage engines, the boring parts of
        observability.
      </p>

      <div className="hero__details">
        <div className="hero__detail">
          <span className="hero__detail-label">Role</span>
          <span className="hero__detail-value">Staff Software Engineer</span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">Now</span>
          <span className="hero__detail-value">Meridian Labs</span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">Based</span>
          <span className="hero__detail-value">Portland, OR</span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">Open to</span>
          <span className="hero__detail-value">
            Principal-track roles &amp; advisory
          </span>
        </div>
      </div>

      <div className="hero__skills">
        <div className="skills__group">
          <span className="skills__category">Languages</span>
          <div className="skills__chips">
            <span className="skills__chip">Rust</span>
            <span className="skills__chip">Go</span>
            <span className="skills__chip">TypeScript</span>
            <span className="skills__chip">Python</span>
            <span className="skills__chip">SQL</span>
            <span className="skills__chip">C++</span>
          </div>
        </div>
        <div className="skills__group">
          <span className="skills__category">Cloud &amp; Infra</span>
          <div className="skills__chips">
            <span className="skills__chip">AWS</span>
            <span className="skills__chip">GCP</span>
            <span className="skills__chip">Kubernetes</span>
            <span className="skills__chip">Terraform</span>
            <span className="skills__chip">Docker</span>
            <span className="skills__chip">CI/CD</span>
          </div>
        </div>
        <div className="skills__group">
          <span className="skills__category">Data &amp; Messaging</span>
          <div className="skills__chips">
            <span className="skills__chip">PostgreSQL</span>
            <span className="skills__chip">Redis</span>
            <span className="skills__chip">Kafka</span>
            <span className="skills__chip">Snowflake</span>
            <span className="skills__chip">gRPC</span>
            <span className="skills__chip">GraphQL</span>
          </div>
        </div>
      </div>

      <div className="hero__details hero__details--education">
        <div className="hero__detail">
          <span className="hero__detail-label">Degree</span>
          <span className="hero__detail-value">
            B.A.S. Information Technology, Cybersecurity &amp; Ethical Hacking
          </span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">School</span>
          <span className="hero__detail-value">Broward College</span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">Expected</span>
          <span className="hero__detail-value">2027</span>
        </div>
      </div>

      <div className="hero__details hero__details--certs">
        <div className="hero__detail">
          <span className="hero__detail-label">AWS</span>
          <span className="hero__detail-value">
            Solutions Architect — Associate
          </span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">CompTIA</span>
          <span className="hero__detail-value">Security+</span>
        </div>
      </div>
    </div>
  );
}
