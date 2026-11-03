import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea, Bar, Pie } from "react-chartjs-2";
import GlowCard from "./GlowCard";
import { gridColor, palette } from "./chartTheme";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
);

const border = "rgba(2, 12, 4, 0.9)";

export default function TrackCharts({ trackData }) {
  if (!trackData) return null;

  const legendBottom = {
    legend: { position: "bottom", labels: { usePointStyle: true, padding: 14 } },
  };

  const polarOptions = {
    plugins: legendBottom,
    scales: {
      r: {
        ticks: { backdropColor: "transparent", color: "#9ec79b" },
        grid: { color: gridColor },
        angleLines: { color: gridColor },
      },
    },
  };

  const barOptions = {
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: gridColor }, min: 0, max: 1 },
    },
    borderRadius: 8,
  };

  const rhythmData = {
    labels: ["Danceability", "Energy", "Tempo (normalized)", "Liveness"],
    datasets: [
      {
        data: [
          trackData.danceability,
          trackData.energy,
          trackData.tempo / 200,
          trackData.liveness,
        ],
        backgroundColor: [palette[1], palette[3], palette[0], palette[4]],
        borderColor: border,
        borderWidth: 2,
      },
    ],
  };

  const moodData = {
    labels: ["Valence", "Acousticness", "Instrumentalness", "Speechiness"],
    datasets: [
      {
        data: [
          trackData.valence,
          trackData.acousticness,
          trackData.instrumentalness,
          trackData.speechiness,
        ],
        backgroundColor: [palette[2], palette[0], palette[5], palette[6]],
        borderColor: border,
        borderWidth: 2,
      },
    ],
  };

  const allData = {
    labels: [
      "Danceability",
      "Energy",
      "Acousticness",
      "Instrumentalness",
      "Liveness",
      "Valence",
      "Speechiness",
    ],
    datasets: [
      {
        label: trackData.title,
        data: [
          trackData.danceability,
          trackData.energy,
          trackData.acousticness,
          trackData.instrumentalness,
          trackData.liveness,
          trackData.valence,
          trackData.speechiness,
        ],
        backgroundColor: palette,
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="chart-grid">
      <GlowCard>
        <h3>Rhythm</h3>
        <PolarArea data={rhythmData} options={polarOptions} />
      </GlowCard>
      <GlowCard>
        <h3>Mood</h3>
        <Pie data={moodData} options={{ plugins: legendBottom }} />
      </GlowCard>
      <GlowCard className="wide">
        <h3>All features</h3>
        <Bar data={allData} options={barOptions} />
      </GlowCard>
    </div>
  );
}
