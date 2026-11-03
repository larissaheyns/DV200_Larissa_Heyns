import { useState } from "react";
import { fetchTrackData } from "../components/api";
import SongDropdown from "../components/dropdown";
import TrackCharts from "../components/TrackCharts";
import GlowCard from "../components/GlowCard";

function TrackPanel({ label }) {
  const [trackData, setTrackData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSelect(song) {
    setLoading(true);
    try {
      setTrackData(await fetchTrackData(song.id));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <GlowCard className="allow-overflow">
        <h3>{label}</h3>
        <SongDropdown onSelect={handleSelect} />

        {loading && <p className="loading">Loading…</p>}

        {!trackData && !loading && (
          <div className="empty-state">
            <span className="big">🎧</span>
            Pick a song to see its audio fingerprint
          </div>
        )}

        {trackData && !loading && (
          <div style={{ marginTop: 22 }}>
            <div className="track-head">
              <img src={trackData.image} alt={trackData.title} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = trackData.fallbackImage; }} />
              <div>
                <h2>{trackData.title}</h2>
                <p>{trackData.artist}</p>
                <div className="chips">
                  <span className="chip">{Math.round(trackData.tempo)} BPM</span>
                  <span className="chip">
                    {trackData.keyName} {trackData.mode ? "major" : "minor"}
                  </span>
                  <span className="chip">{trackData.loudness.toFixed(1)} dB</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </GlowCard>

      {trackData && !loading && <TrackCharts trackData={trackData} />}
    </div>
  );
}

function Compare() {
  return (
    <section>
      <h1 className="page-title">Spotify Audio Features</h1>
      <p className="page-sub">Pick two songs and see how they stack up side by side.</p>
      <div className="compare-grid">
        <TrackPanel label="Song one" />
        <TrackPanel label="Song two" />
      </div>
    </section>
  );
}

export default Compare;
