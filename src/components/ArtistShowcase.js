import { useEffect, useState } from "react";
import GlowCard from "./GlowCard";

// Cover-flow style showcase. `items`: [{ name, image, note }]
export default function ArtistShowcase({ items, interval = 4000 }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % count), interval);
    return () => clearInterval(t);
  }, [paused, count, interval]);

  // shortest signed distance around the loop: -1, 0, 1 (or further)
  function offsetOf(i) {
    let d = i - active;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  }

  const current = items[active];

  return (
    <GlowCard
      className="no-pad showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* blurred ambient copy of the active photo */}
      {items.map((item, i) => (
        <div
          key={item.name}
          className="showcase-ambient"
          style={{ backgroundImage: `url(${item.image})`, opacity: i === active ? 0.55 : 0 }}
        />
      ))}
      <div className="showcase-shade" />

      <div className="showcase-stage">
        {items.map((item, i) => {
          const d = offsetOf(i);
          const abs = Math.abs(d);
          return (
            <button
              key={item.name}
              type="button"
              className="showcase-card"
              aria-label={`Show ${item.name}`}
              onClick={() => setActive(i)}
              style={{
                transform: `translateX(${d * 62}%) scale(${abs === 0 ? 1 : 0.78}) rotateY(${d * -18}deg)`,
                opacity: abs > 1 ? 0 : abs === 0 ? 1 : 0.45,
                zIndex: 10 - abs,
                filter: abs === 0 ? "none" : "blur(1.5px) brightness(0.7)",
                pointerEvents: abs > 1 ? "none" : "auto",
              }}
            >
              <img src={item.image} alt={item.name} />
            </button>
          );
        })}
      </div>

      <div className="showcase-info">
        <div>
          <strong>{current.name}</strong>
          <span>{current.note}</span>
        </div>
        <div className="showcase-dots">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Go to ${item.name}`}
              className={i === active ? "on" : ""}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </GlowCard>
  );
}
