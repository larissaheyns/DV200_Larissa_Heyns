import Select from "./Select";
import { artists } from "./artist";

const items = artists.map((artist) => ({
  key: artist.id,
  label: artist.name,
  value: artist,
}));

export default function ArtistDropdown({ onSelect }) {
  return <Select items={items} placeholder="Select an artist" onSelect={onSelect} />;
}
