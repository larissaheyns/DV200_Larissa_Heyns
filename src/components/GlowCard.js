import { useRef } from "react";

// A glass card whose border + inner spotlight follow the mouse.
export default function GlowCard({ children, className = "", style, ...rest }) {
  const ref = useRef(null);

  function handleMove(e) {
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      className={`glow-card ${className}`}
      style={style}
      onMouseMove={handleMove}
      {...rest}
    >
      <div className="glow-card-inner">{children}</div>
    </div>
  );
}
