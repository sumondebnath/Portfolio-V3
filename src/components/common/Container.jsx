/**
 * The single global content boundary for the whole portfolio.
 *
 * Every major section renders inside this container so the left and right
 * content edges align EXACTLY at every breakpoint:
 *
 *   section
 *   └── Container (this)  →  width: 100% · max-width: 48rem · mx-auto · equal px
 *
 * Sections add only vertical spacing via `className` — never horizontal
 * margins/padding, so the shared edge is impossible to break.
 * Rendered once per section, directly inside the <section> element.
 */
export default function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-[48rem] px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}