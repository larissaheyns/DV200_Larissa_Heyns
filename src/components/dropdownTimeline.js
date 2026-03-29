import { useState } from "react";
import { artists } from "./artist";

export default function ArtistDropdown({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleSelect(artist) {
    setSelected(artist);
    setOpen(false);
    onSelect(artist);
  }

  return (
    <div style={{ position: "relative", display: "inline-block", fontFamily: "sans-serif" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 8, padding: "8px 14px", minWidth: 200,
          background: "#1ED760", border: "0px", borderRadius: 10, cursor: "pointer",
        }}
      >
        <span>{selected ? selected.name : "Select an artist"}</span>
        <span style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}>▾</span>
      </div>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, minWidth: "100%",
          background: "#16a247", borderRadius: 10,
          boxShadow: "0 4px 16px rgba(0,0,0,.1)", zIndex: 100, overflow: "hidden",
        }}>
          {artists.map(artist => (
            <div
              key={artist.id}
              onClick={() => handleSelect(artist)}
              style={{ padding: "9px 14px", cursor: "pointer", background: "#16a247",
                fontWeight: selected?.id === artist.id ? 500 : 400 }}
              onMouseEnter={e => e.currentTarget.style.background = "#107132"}
              onMouseLeave={e => e.currentTarget.style.background = "#16a247"}
            >
              {artist.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}