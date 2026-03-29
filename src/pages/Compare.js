// Compare.js
import { useState } from "react";
import { fetchTrackData } from "../components/api";
import SongDropdown from "../components/dropdown";
import TrackCharts from "../components/TrackCharts";

function Compare() {
  const [trackData1, setTrackData1] = useState(null);
  const [trackData2, setTrackData2] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  async function handleSelect1(song) {
    setLoading1(true);
    try {
      const data = await fetchTrackData(song.trackID);
      setTrackData1(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading1(false);
    }
  }

  async function handleSelect2(song) {
    setLoading2(true);
    try {
      const data = await fetchTrackData(song.trackID);
      setTrackData2(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading2(false);
    }
  }

  return (
    <section className="gradient">
      <br />
      <h1 style={{ textAlign: "center" }}>Spotify Audio Features</h1>
      <div style={{ display: "flex", gap: "4%", padding: "0 5% 5% 5%" }}>
      

        {/* Song 1 */}
        <div style={{ flex: 1, minWidth: 0 }}>  {/* ← minWidth: 0 */}
    <SongDropdown onSelect={handleSelect1} />
    {loading1 && <p style={{ color: "white" }}>Loading...</p>}
    {trackData1 && !loading1 && (
      <div style={{ marginTop: 16 }}>
        <img
          src={trackData1.image}
          alt={trackData1.name}
          style={{ width: 300, height: 300, borderRadius: 10, objectFit: "cover" }}
        />
        <p style={{ color: "white" }}>{trackData1.name}</p>
        <TrackCharts trackData={trackData1} />
      </div>
    )}
  </div>

        {/* Song 2 */}
        <div style={{ flex: 1, minWidth: 0 }}>  {/* ← minWidth: 0 */}
    <SongDropdown onSelect={handleSelect2} />
    {loading2 && <p style={{ color: "white" }}>Loading...</p>}
    {trackData2 && !loading2 && (
      <div style={{ marginTop: 16 }}>
        <img
          src={trackData2.image}
          alt={trackData2.name}
          style={{ width: 300, height: 300, borderRadius: 10, objectFit: "cover" }}
        />
        <p style={{ color: "white" }}>{trackData2.name}</p>
        <TrackCharts trackData={trackData2} />
      </div>
    )}
  </div>

      </div>
      
    </section>
  );
}

export default Compare;