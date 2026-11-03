import { useState } from "react";
import { fetchTrackData } from "../components/api";
import ArtistDropdown from "../components/dropdownTimeline";
import ArtistLineChart from "../components/OneLineGraph";
import GlowCard from "../components/GlowCard";

export default function Timeline() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [trackDataMap, setTrackDataMap] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleArtistSelect(artist) {
    setSelectedArtist(artist);
    setTrackDataMap({});
    setLoading(true);

    const entries = await Promise.all(
      artist.songs.map(async (song) => {
        try {
          return [song.trackID, await fetchTrackData(song.trackID)];
        } catch (error) {
          console.error("Failed to load", song.title, error);
          return null;
        }
      }),
    );

    setTrackDataMap(Object.fromEntries(entries.filter(Boolean)));
    setLoading(false);
  }

  const sortedSongs = selectedArtist
    ? [...selectedArtist.songs].sort((a, b) => a.year - b.year)
    : [];

  return (
    <section>
      <h1 className="page-title">Artist Timeline</h1>
      <p className="page-sub">
        Choose an artist and see how their sound has developed over the years.
      </p>

      <div className="timeline-layout">
        <GlowCard className="allow-overflow">
          <h3>Artist</h3>
          <ArtistDropdown onSelect={handleArtistSelect} />

          {loading && <p className="loading">Loading songs…</p>}

          {!selectedArtist && (
            <div className="empty-state">
              <span className="big">📈</span>
              Select an artist to draw their timeline
            </div>
          )}

          {selectedArtist && !loading && (
            <div className="song-pills" style={{ marginTop: 18 }}>
              {sortedSongs.map((s) => (
                <span className="song-pill" key={s.trackID}>
                  <b>{s.year}</b>
                  {s.title}
                </span>
              ))}
            </div>
          )}
        </GlowCard>

        <ArtistLineChart songs={selectedArtist?.songs} trackDataMap={trackDataMap} />
      </div>
    </section>
  );
}
