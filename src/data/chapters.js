export const CHAPTERS = [
  {
    id: "shire",
    numeral: "I",
    chapter: "Chapter I",
    title: "The Shire",
    subtitle: "Where every story begins",
    accent: "oklch(0.78 0.12 130)",
    tone: "warm",
  },
  {
    id: "fellowship",
    numeral: "II",
    chapter: "Chapter II",
    title: "The Fellowship",
    subtitle: "Teams that shipped together",
    accent: "oklch(0.76 0.09 240)",
    tone: "cool",
  },
  {
    id: "ascent",
    numeral: "III",
    chapter: "Chapter III",
    title: "The Ascent",
    subtitle: "Hard problems, harder won",
    accent: "oklch(0.72 0.15 40)",
    tone: "ember",
  },
];

export const EXPERIENCE = [
  {
    company: "Meridian Labs",
    role: "Staff Software Engineer",
    period: "2022 — Present",
    blurb:
      "Leading platform reliability for a distributed graph database serving 8B requests/day. Cut p99 latency 42% by rewriting the scheduler in Rust.",
    stack: ["Rust", "Kubernetes", "gRPC", "Postgres"],
  },
  {
    company: "Northwind Systems",
    role: "Senior Software Engineer",
    period: "2019 — 2022",
    blurb:
      "Built the real-time pricing engine powering 14M trades/day. Designed the sharded event-sourcing layer; mentored four engineers to senior.",
    stack: ["Go", "Kafka", "Redis", "AWS"],
  },
  {
    company: "Lantern",
    role: "Software Engineer II",
    period: "2016 — 2019",
    blurb:
      "Shipped the first version of the customer-data platform. Owned ingestion, transformation, and the public SDK across three languages.",
    stack: ["TypeScript", "Python", "Snowflake"],
  },
];

export const PROJECTS = [
  {
    name: "Anduril",
    tagline: "A distributed query planner",
    desc: "A cost-based optimizer for federated SQL over heterogeneous stores. Written from scratch in Rust; 3.2k GitHub stars.",
    link: "github.com/enriador/anduril",
  },
  {
    name: "Mithril",
    tagline: "Zero-copy serialization for Go",
    desc: "A schema-first codec that outperforms Protobuf by 2.8× on the decode path. Used in production at three companies.",
    link: "github.com/enriador/mithril",
  },
  {
    name: "Palantír",
    tagline: "Time-travel debugger for React",
    desc: "Record, replay, and branch component state across renders. Open-source devtools extension with 40k+ installs.",
    link: "palantir.dev",
  },
];
