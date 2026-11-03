import { trackLibrary } from "../data/tracks";

// Generates a unique gradient "album cover" so we don't depend on Spotify's
// image servers. Swap `image` for a real URL in tracks.js if you ever want to.
function coverArt(title, artist) {
  let hash = 0;
  for (const ch of title + artist) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  const hue = 95 + (hash % 90); // greens -> teals
  const hue2 = (hue + 40 + (hash % 50)) % 360;
  const initials = title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="hsl(${hue},75%,38%)"/><stop offset="1" stop-color="hsl(${hue2},70%,14%)"/></linearGradient></defs>
<rect width="400" height="400" fill="url(#g)"/>
<circle cx="300" cy="100" r="140" fill="rgba(255,255,255,0.07)"/>
<circle cx="90" cy="330" r="110" fill="rgba(0,0,0,0.18)"/>
<text x="200" y="235" font-family="Arial,sans-serif" font-size="120" font-weight="700" fill="rgba(255,255,255,0.9)" text-anchor="middle">${initials}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Same name and return shape as the old API call, so pages don't need changing.
export async function fetchTrackData(trackID) {
  const track = trackLibrary[trackID];
  if (!track) throw new Error(`No local data for track ${trackID}`);

  return {
    ...track,
    name: `${track.title} - ${track.artist}`,
    image: track.image || coverArt(track.title, track.artist),
  };
}
