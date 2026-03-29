import { useState } from "react";

const songs = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen", trackID: "3z8h0TU7ReDPLIbEnYhWZb" },
  { id: 2, title: "Hotel California", artist: "Eagles", trackID: "40riOy7x9W7GXjyGp4pjAv" },
  { id: 3, title: "Stairway to Heaven", artist: "Led Zeppelin", trackID: "5CQ30WqJwcep0pYcV4AMNc" },
  { id: 4, title: "I Miss You", artist: "blink-182", trackID: "1AdYZ6X00nXmO613Y7GJOl" },
  { id: 5, title: "Mr.Brightside", artist: "The Killers", trackID: "003vvx7Niy0yvhvHt4a68B" },
  { id: 6, title: "Fire Fire", artist: "Flyleaf", trackID: "6SOzNLaZF6gHGgh7qU56hE" },
  { id: 7, title: "Complicated", artist: "Avril Lavigne", trackID: "5xEM5hIgJ1jjgcEBfpkt2F" },
  { id: 8, title: "Scotty Doesn't Know", artist: "Eagles", trackID: "1LkoYGxmYpO6QSEvY5C0Zl" },
  { id: 9, title: "Party In The U.S.A", artist: "Miley Cyrus", trackID: "5Q0Nhxo0l2bP3pNjpGJwV1" },
  { id: 10, title: "Shape of You", artist: "Ed Sheeran", trackID: "7qiZfU4dY1lWllzX7mPBI3" },
  { id: 11, title: "Safe And Sound", artist: "Capital Cities", trackID: "6Z8R6UsFuGXGtiIxiD8ISb" },
  { id: 12, title: "Wonderwall", artist: "Oasis", trackID: "7ygpwy2qP3NbrxVkHvUhXY" },
  { id: 13, title: "Thunder", artist: "Imagine Dragons", trackID: "1zB4vmk8tFRmM9UULNzbLB" },
  { id: 14, title: "Payphone", artist: "Maroon 5, Wiz Kalifa", trackID: "1XGmzt0PVuFgQYYnV2It7A" },
  { id: 15, title: "Attention", artist: "Charlie Puth", trackID: "5cF0dROlMOK5uNZtivgu50" },
  { id: 16, title: "Hot N Cold", artist: "Katy Perry", trackID: "1TEjSXPdAakDotj2Wji3PU" },
  { id: 17, title: "Wake Me Up", artist: "Avicii", trackID: "0nrRP2bk19rLc0orkWPQk2" },
  { id: 18, title: "Some Nights", artist: "fun.", trackID: "67WTwafOMgegV6ABnBQxcE" },
  { id: 19, title: "Call Me Maybe", artist: "Carly Rae Jepsen", trackID: "20I6sIOMTCkB6w7ryavxtO" },
  { id: 20, title: "What Makes You Beautiful", artist: "One Direction", trackID: "4cluDES4hQEUhmXj6TXkSo" },
  { id: 21, title: "Every Breath You Take", artist: "The Police", trackID: "1JSTJqkT5qHq8MDJnJbRE1" },
  { id: 22, title: "Life is a Highway", artist: "Rascal Flatts", trackID: "1SLikaDhWhhhnLJC58bkFI" },
  { id: 23, title: "Walk of Life", artist: "Dire Straits", trackID: "6HMFtoMvv6n6Q2eOyPFyne" },
  { id: 24, title: "Sweet Child O' Mine", artist: "Guns N' Roses", trackID: "7snQQk1zcKl8gZ92AnueZW" },
];

export default function SongDropdown({ onSelect }) {  // ← accept onSelect prop
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // no trackData, no loading, no fetchTrackData here anymore

  function handleSelect(song) {
    setSelected(song);
    setOpen(false);
    onSelect(song);  // ← pass the song up to Compare.js
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
        <span>{selected ? selected.title : "Select a song"}</span>
        <span style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s" }}>▾</span>
      </div>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, minWidth: "100%",
          background: "#16a247", border: "0px", borderRadius: 10,
          boxShadow: "0 4px 16px rgba(0,0,0,.1)", zIndex: 100, overflow: "hidden",
        }}>
          {songs.map(song => (
            <div
              key={song.id}
              onClick={() => handleSelect(song)}
              style={{
                padding: "9px 14px", cursor: "pointer", background: "#16a247",
                fontWeight: selected?.id === song.id ? 500 : 400,
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#107132"}
              onMouseLeave={e => e.currentTarget.style.background = "#16a247"}
            >
              {song.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}