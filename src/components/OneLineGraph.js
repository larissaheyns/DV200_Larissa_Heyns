import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const featureColors = {
  danceability:     "rgba(54, 200, 235, 1)",
  energy:           "rgba(255, 99, 132, 1)",
  acousticness:     "rgba(120, 220, 140, 1)",
  instrumentalness: "rgba(255, 206, 86, 1)",
  liveness:         "rgba(180, 120, 255, 1)",
  valence:          "rgba(255, 160, 64, 1)",
  speechiness:      "rgba(100, 180, 255, 1)",
};

export default function ArtistLineChart({ songs, trackDataMap }) {
  if (!songs || Object.keys(trackDataMap).length === 0) return null;

  const sorted = [...songs].sort((a, b) => a.year - b.year);
  const labels = sorted.map(s => `${s.title} (${s.year})`);

  const datasets = Object.keys(featureColors).map(feature => ({
    label: feature.charAt(0).toUpperCase() + feature.slice(1),
    data: sorted.map(s => trackDataMap[s.trackID]?.[feature] ?? null),
    borderColor: featureColors[feature],
    backgroundColor: featureColors[feature].replace("1)", "0.1)"),
    tension: 0.4,
    pointRadius: 5,
    pointHoverRadius: 7,
  }));

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "white", font: { size: 12 } } },
    },
    scales: {
      x: { ticks: { color: "white" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "white" }, grid: { color: "rgba(255,255,255,0.1)" }, min: 0, max: 1 },
    },
  };

  return (
    <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: 16, padding: 20, marginTop: 24 }}>
      <Line data={{ labels, datasets }} options={options} />
    </div>
  );
}