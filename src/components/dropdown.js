import Select from "./Select";
import { compareSongs } from "../data/tracks";

const items = compareSongs.map((song) => ({
  key: song.id,
  label: song.title,
  sub: song.artist,
  value: song,
}));

export default function SongDropdown({ onSelect }) {
  return <Select items={items} placeholder="Select a song" onSelect={onSelect} />;
}
