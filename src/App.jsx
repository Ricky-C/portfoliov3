import { useState, useEffect, useRef, useCallback } from "react";
import { CHAPTERS } from "./data/chapters";
import ChapterNav from "./components/ChapterNav";
import ScrollHint from "./components/ScrollHint";
import Progress from "./components/Progress";
import ChapterBackdrop from "./components/ChapterBackdrop";
import ShireSection from "./components/ShireSection";
import FellowshipSection from "./components/FellowshipSection";
import AscentSection from "./components/AscentSection";

const SECTION_COMPONENTS = [ShireSection, FellowshipSection, AscentSection];

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hintVisible, setHintVisible] = useState(true);
  const scrollerRef = useRef(null);
  const chaptersRef = useRef([]);

  const jumpTo = useCallback((i) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ top: i * window.innerHeight, behavior: "smooth" });
  }, []);

  // Convert horizontal scroll/trackpad gestures to vertical
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        el.scrollTop += e.deltaX;
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Track scroll position and drive page-turn transforms
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const maxScroll = el.scrollHeight - el.clientHeight;
        if (maxScroll <= 0) return;

        const p = (el.scrollTop / maxScroll) * (CHAPTERS.length - 1);
        setProgress(p);
        setCurrent(Math.round(p));
        if (el.scrollTop > 60) setHintVisible(false);

        // Drive per-section clip-path reveal + retreat via CSS custom properties
        chaptersRef.current.forEach((section, i) => {
          if (!section) return;

          const reveal = i === 0 ? 1 : Math.max(0, Math.min(1, p - (i - 1)));
          const retreat = Math.max(0, Math.min(1, p - i));

          section.style.setProperty("--reveal", reveal.toFixed(4));
          section.style.setProperty("--retreat", retreat.toFixed(4));
          section.style.visibility = retreat >= 0.99 ? "hidden" : "visible";
        });
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Keyboard navigation (both arrow directions + page keys)
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;

      const next = () => jumpTo(Math.min(current + 1, CHAPTERS.length - 1));
      const prev = () => jumpTo(Math.max(current - 1, 0));

      const handlers = {
        ArrowDown: next,
        ArrowRight: next,
        PageDown: next,
        ArrowUp: prev,
        ArrowLeft: prev,
        PageUp: prev,
        Home: () => jumpTo(0),
        End: () => jumpTo(CHAPTERS.length - 1),
      };

      const handler = handlers[e.key];
      if (handler) {
        e.preventDefault();
        handler();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, jumpTo]);

  const between = Math.abs(progress - Math.round(progress));
  const veil = Math.min(1, between * 2);

  return (
    <div
      className="stage"
      data-current={current}
      data-tone={CHAPTERS[current]?.tone}
    >
      <div
        className="veil"
        aria-hidden="true"
        style={{ opacity: veil * 0.3 }}
      />

      <ChapterNav current={current} onJump={jumpTo} />

      <main
        className="scroller"
        ref={scrollerRef}
        tabIndex={-1}
        aria-label="Portfolio chapters"
      >
        {/* First snap anchor (before sticky viewport) */}
        <div className="snap-target snap-target--zero" />

        <div className="chapters-viewport">
          {CHAPTERS.map((c, i) => {
            const Section = SECTION_COMPONENTS[i];
            return (
              <section
                key={c.id}
                ref={(el) => {
                  chaptersRef.current[i] = el;
                }}
                className={`chapter chapter--${c.id}`}
                aria-labelledby={`heading-${c.id}`}
                data-chapter-index={i}
              >
                <div className="chapter__page">
                  <ChapterBackdrop index={i} chapterId={c.id} />
                  <div className="chapter__inner">
                    <Section />
                  </div>
                </div>
                {i > 0 && (
                  <div className="chapter__fold" aria-hidden="true" />
                )}
                {i < CHAPTERS.length - 1 && (
                  <button
                    type="button"
                    className="next-chapter"
                    onClick={() => jumpTo(i + 1)}
                    aria-label={`Go to ${CHAPTERS[i + 1].title}`}
                  >
                    <span className="next-chapter__label">
                      {CHAPTERS[i + 1].chapter}
                    </span>
                    <span className="next-chapter__title">
                      {CHAPTERS[i + 1].title}
                    </span>
                    <span className="next-chapter__arrow" aria-hidden="true">
                      ↓
                    </span>
                  </button>
                )}
              </section>
            );
          })}
        </div>

        {CHAPTERS.slice(1).map((c) => (
          <div key={`snap-${c.id}`} className="snap-target" />
        ))}
      </main>

      <ScrollHint visible={hintVisible && current === 0} />
      <Progress progress={progress / (CHAPTERS.length - 1)} />

      <div className="status" aria-live="polite" aria-atomic="true">
        {CHAPTERS[current]?.chapter} — {CHAPTERS[current]?.title}
      </div>
    </div>
  );
}
