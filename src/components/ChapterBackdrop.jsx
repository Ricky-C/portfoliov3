import bg1Avif from "../assets/bg-1.avif";
import bg1Webp from "../assets/bg-1.webp";
import bg2Avif from "../assets/bg-2.avif";
import bg2Webp from "../assets/bg-2.webp";
import bg3Avif from "../assets/bg-3.avif";
import bg3Webp from "../assets/bg-3.webp";
import Lightning from "./Lightning";

const CHAPTER_IMAGES = [
  { avif: bg1Avif, webp: bg1Webp },
  { avif: bg2Avif, webp: bg2Webp },
  { avif: bg3Avif, webp: bg3Webp },
];

export default function ChapterBackdrop({ index, chapterId }) {
  const img = CHAPTER_IMAGES[index];

  return (
    <div className={`chapter-bg chapter-bg--${chapterId}`} aria-hidden="true">
      {img ? (
        <picture>
          <source srcSet={img.avif} type="image/avif" />
          <source srcSet={img.webp} type="image/webp" />
          <img src={img.webp} alt="" className="chapter-bg__img" />
        </picture>
      ) : (
        <div className="chapter-bg__placeholder" />
      )}
      <div className="chapter-bg__overlay" />
      <div className="chapter-bg__vignette" />
      {chapterId === "fellowship" && (
        <>
          <div className="snow snow--near" />
          <div className="snow snow--far" />
        </>
      )}
      {chapterId === "ascent" && (
        <>
          <div className="ascent-lightning ascent-lightning--1">
            <Lightning hue={0} speed={0.6} intensity={0.5} size={1} xOffset={-2} />
          </div>
          <div className="ascent-lightning ascent-lightning--2">
            <Lightning hue={10} speed={0.8} intensity={0.4} size={0.9} xOffset={1.5} />
          </div>
          <div className="ascent-lightning ascent-lightning--3">
            <Lightning hue={5} speed={0.5} intensity={0.45} size={1.1} xOffset={3.5} />
          </div>
          <div className="ascent-lightning ascent-lightning--4">
            <Lightning hue={15} speed={0.7} intensity={0.35} size={0.8} xOffset={-4} />
          </div>
        </>
      )}
    </div>
  );
}
