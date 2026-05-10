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
        Architecting resilient systems for the journey ahead.
      </p>

      <div className="hero__details">
        <div className="hero__detail">
          <span className="hero__detail-label">Role</span>
          <span className="hero__detail-value">Senior Software Engineer</span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">Now</span>
          <span className="hero__detail-value">Exelon</span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">Based</span>
          <span className="hero__detail-value">Austin, Texas</span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">Open to</span>
          <span className="hero__detail-value">
            Full Stack &amp; DevSecOps roles
          </span>
        </div>
      </div>

      <div className="hero__skills">
        <div className="skills__group">
          <span className="skills__category">Languages</span>
          <div className="skills__chips">
            <span className="skills__chip">C# / .NET Core</span>
            <span className="skills__chip">TypeScript</span>
            <span className="skills__chip">Angular</span>
            <span className="skills__chip">React</span>
            <span className="skills__chip">GitHub Actions</span>
            <span className="skills__chip">Node.js</span>
            <span className="skills__chip">Go</span>
            <span className="skills__chip">Python</span>
          </div>
        </div>
        <div className="skills__group">
          <span className="skills__category">Cloud &amp; Infra</span>
          <div className="skills__chips">
            <span className="skills__chip">AWS</span>
            <span className="skills__chip">Azure</span>
            <span className="skills__chip">Kubernetes</span>
            <span className="skills__chip">Terraform</span>
            <span className="skills__chip">Docker</span>
            <span className="skills__chip">CI/CD</span>
            <span className="skills__chip">Linux</span>
          </div>
        </div>
      </div>

      <div className="hero__details hero__details--education">
        <div className="hero__detail">
          <span className="hero__detail-label">Degree</span>
          <span className="hero__detail-value">
            B.A.S. Information Technology, Cybersecurity &amp; Ethical Hacking - Expected 2027
          </span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">School</span>
          <span className="hero__detail-value">Broward College</span>
        </div>
      </div>

      <div className="hero__details hero__details--certs">
        <div className="hero__detail">
          <span className="hero__detail-label">Cloud</span>
          <span className="hero__detail-value">
            AWS Solutions Architect — Associate
          </span>
        </div>
        <div className="hero__detail">
          <span className="hero__detail-label">Security</span>
          <span className="hero__detail-value">CompTIA Security+</span>
        </div>
      </div>
    </div>
  );
}
