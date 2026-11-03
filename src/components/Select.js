import { useEffect, useRef, useState } from "react";

// Generic dark dropdown. items: [{ key, label, sub? }]
export default function Select({ items, placeholder, onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function close(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  function pick(item) {
    setSelected(item);
    setOpen(false);
    onSelect(item.value);
  }

  return (
    <div className={`select ${open ? "open" : ""}`} ref={ref}>
      <button type="button" className="select-btn" onClick={() => setOpen(!open)}>
        <span className={selected ? "" : "placeholder"}>
          {selected ? selected.label : placeholder}
        </span>
        <span className="chev">▾</span>
      </button>

      {open && (
        <div className="select-list">
          {items.map((item) => (
            <div
              key={item.key}
              className={`select-item ${selected?.key === item.key ? "active" : ""}`}
              onClick={() => pick(item)}
            >
              <span>{item.label}</span>
              {item.sub && <small>{item.sub}</small>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
