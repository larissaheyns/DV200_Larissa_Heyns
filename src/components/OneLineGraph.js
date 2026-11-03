import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import GlowCard from "./GlowCard";
import { featureColors, gridColor } from "./chartTheme";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

export default function ArtistLineChart({ songs, trackDataMap }) {
  if (!songs || Object.keys(trackDataMap).length === 0) return null;

  const sorted = [...songs].sort((a, b) => a.year - b.year);
  const labels = sorted.map((s) => `${s.title} (${s.year})`);

  const datasets = Object.keys(featureColors).map((feature) => ({
    label: feature.charAt(0).toUpperCase() + feature.slice(1),
    data: sorted.map((s) => trackDataMap[s.trackID]?.[feature] ?? null),
    borderColor: featureColors[feature],
    backgroundColor: featureColors[feature],
    borderWidth: 2.5,
    tension: 0.4,
    pointRadius: 4,
    pointHoverRadius: 7,
  }));

  const options = {
    responsive: true,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: { labels: { usePointStyle: true, padding: 18 } },
    },
    scales: {
      x: { grid: { color: gridColor } },
      y: { grid: { color: gridColor }, min: 0, max: 1 },
    },
  };

  return (
    <GlowCard>
      <h3>Audio features over time</h3>
      <Line data={{ labels, datasets }} options={options} />
    </GlowCard>
  );
}
