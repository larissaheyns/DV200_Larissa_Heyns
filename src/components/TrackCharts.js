// TrackCharts.js
import {
  Chart as ChartJS, RadialLinearScale, ArcElement, CategoryScale,
  LinearScale, BarElement, Tooltip, Legend
} from "chart.js";
import { PolarArea, Bar, Pie } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const cardStyle = {
  background: "rgba(0, 0, 0, 0.4)",
  borderRadius: 16,
  padding: "20px",
};

const colors = [
  "rgba(255, 99, 132, 0.85)",   // red-pink
  "rgba(54, 200, 235, 0.85)",   // cyan
  "rgba(255, 206, 86, 0.85)",   // yellow
  "rgba(120, 220, 140, 0.85)",  // green
  "rgba(180, 120, 255, 0.85)",  // purple
  "rgba(255, 160, 64, 0.85)",   // orange
  "rgba(100, 180, 255, 0.85)",  // light blue
];

export default function TrackCharts({ trackData }) {
  if (!trackData) return null;

  const options = {
    plugins: {
      legend: { labels: { color: "white", font: { size: 13 } } },
    },
  };

  const barOptions = {
    plugins: {
      legend: { display:false },
    },
    scales: {
      x: { ticks: { color: "white" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "white" }, grid: { color: "rgba(255,255,255,0.1)" }, min: 0, max: 1 },
    },
  };

  const polarOptions = {
    ...options,
    scales: {
      r: {
        ticks: { color: "white", backdropColor: "transparent" },
        grid: { color: "rgba(255,255,255,0.2)" },
      },
    },
  };

  const rhythmData = {
    labels: ["Danceability", "Energy", "Tempo (normalized)", "Liveness"],
    datasets: [{
      data: [
        trackData.danceability,
        trackData.energy,
        trackData.tempo / 200,
        trackData.liveness,
      ],
      backgroundColor: [colors[1], colors[2], colors[3], colors[4]],
      borderColor: "rgba(255,255,255,0.6)",
      borderWidth: 1.5,
    }],
  };

  const moodData = {
    labels: ["Valence", "Acousticness", "Instrumentalness", "Speechiness"],
    datasets: [{
      data: [
        trackData.valence,
        trackData.acousticness,
        trackData.instrumentalness,
        trackData.speechiness,
      ],
      backgroundColor: [colors[2], colors[3], colors[5], colors[0]],
      borderColor: "rgba(255,255,255,0.6)",
      borderWidth: 1.5,
    }],
  };

  const allData = {
    labels: ["Danceability", "Energy", "Acousticness", "Instrumentalness", "Liveness", "Valence", "Speechiness"],
    datasets: [{
      label: trackData.name,
      data: [
        trackData.danceability,
        trackData.energy,
        trackData.acousticness,
        trackData.instrumentalness,
        trackData.liveness,
        trackData.valence,
        trackData.speechiness,
      ],
      backgroundColor: colors,
      borderColor: "rgba(255,255,255,0.4)",
      borderWidth: 1.5,
    }],
  };

  return (
  <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}>
    
    {/* Rhythm and Mood side by side */}
    <div style={{ display: "flex", gap: 16 }}>
      <div style={{ ...cardStyle, flex: 1, minWidth: 0 }}>
        <h3 style={{ color: "white", marginTop: 0 }}>Rhythm</h3>
        <PolarArea data={rhythmData} options={polarOptions} />
      </div>
      <div style={{ ...cardStyle, flex: 1, minWidth: 0 }}>
        <h3 style={{ color: "white", marginTop: 0 }}>Mood</h3>
        <Pie data={moodData} options={options} />
      </div>
    </div>

    {/* Bar chart full width */}
    <div style={cardStyle}>
      <h3 style={{ color: "white", marginTop: 0 }}>All Features</h3>
      <Bar data={allData} options={barOptions} />
    </div>

  </div>
);
}