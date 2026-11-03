import { trackLibrary } from "../data/tracks";

// Fallback cover: a unique gradient generated per song.
function coverArt(title, artist) {
  let hash = 0;
  for (const ch of title + artist) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
  const hue = 95 + (hash % 90);
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

// Real album covers come from Spotify's public oEmbed endpoint (no API key
// needed). Results are cached, and if a lookup fails we use the generated cover.
const coverCache = {};

async function fetchRealCover(trackID) {
  if (coverCache[trackID] !== undefined) return coverCache[trackID];
  // local-only IDs (not real Spotify IDs) can't be looked up
  if (!/^[A-Za-z0-9]{22}$/.test(trackID)) return (coverCache[trackID] = null);

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(
      `https://open.spotify.com/oembed?url=spotify:track:${trackID}`,
      { signal: controller.signal },
    );
    clearTimeout(timer);
    if (!res.ok) throw new Error(res.status);
    const json = await res.json();
    return (coverCache[trackID] = json.thumbnail_url || null);
  } catch {
    return (coverCache[trackID] = null);
  }
}

export async function fetchTrackData(trackID) {
  const track = trackLibrary[trackID];
  if (!track) throw new Error(`No local data for track ${trackID}`);

  const fallback = coverArt(track.title, track.artist);
  const real = track.image || (await fetchRealCover(trackID));

  return {
    ...track,
    trackID,
    name: `${track.title} - ${track.artist}`,
    image: real || fallback,
    fallbackImage: fallback,
  };
}
