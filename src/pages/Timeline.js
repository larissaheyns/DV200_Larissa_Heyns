import { useState } from "react";
import { fetchTrackData } from "../components/api";
import ArtistDropdown from "../components/dropdownTimeline";
import ArtistLineChart from "../components/OneLineGraph";

export default function Timeline() {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [trackDataMap, setTrackDataMap] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleArtistSelect(artist) {
    setSelectedArtist(artist);
    setTrackDataMap({});
    setLoading(true);

    for (const song of artist.songs) {
      try {
        const data = await fetchTrackData(song.trackID);
        setTrackDataMap(prev => ({ ...prev, [song.trackID]: data }));
        await new Promise(res => setTimeout(res, 1000)); // avoid rate limit
      } catch (error) {
        console.error("Failed to fetch", song.title, error);
      }
    }
    setLoading(false);
  }

  return (
    <section className="gradient" style={{ minHeight: "100vh", padding: "5% 8%" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>Artist Timeline</h1>
        <h3 style={{ textAlign: "center" }}>Choose on of the artists and see how they have developed over the years</h3>
      <ArtistDropdown onSelect={handleArtistSelect} />

      {loading && (
        <p style={{ color: "white", marginTop: 16 }}>
          Loading songs... {Object.keys(trackDataMap).length}/{selectedArtist?.songs.length}
        </p>
      )}

      <ArtistLineChart
        songs={selectedArtist?.songs}
        trackDataMap={trackDataMap}
      />
    </section>
  );
}

