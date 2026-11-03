import { Chart as ChartJS } from "chart.js";

// Shared look for every chart
ChartJS.defaults.color = "#cfeacb";
ChartJS.defaults.font.family = "Outfit, sans-serif";
ChartJS.defaults.font.size = 13;

export const gridColor = "rgba(158, 255, 140, 0.10)";

export const palette = [
  "rgba(102, 255, 91, 0.85)",   // green
  "rgba(54, 214, 235, 0.85)",   // cyan
  "rgba(255, 214, 90, 0.85)",   // yellow
  "rgba(255, 110, 140, 0.85)",  // pink
  "rgba(180, 130, 255, 0.85)",  // purple
  "rgba(255, 160, 64, 0.85)",   // orange
  "rgba(110, 160, 255, 0.85)",  // blue
];

export const featureColors = {
  danceability: "rgb(54, 214, 235)",
  energy: "rgb(255, 110, 140)",
  acousticness: "rgb(102, 255, 91)",
  instrumentalness: "rgb(255, 214, 90)",
  liveness: "rgb(180, 130, 255)",
  valence: "rgb(255, 160, 64)",
  speechiness: "rgb(110, 160, 255)",
};
