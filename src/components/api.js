import axios from "axios";

export async function fetchTrackData(trackID) {
  const response = await axios.request({
    method: "GET",
    url: `https://spotify-audio-features-track-analysis.p.rapidapi.com/tracks/spotify_audio_features?spotify_track_id=${trackID}`,
    headers: {
      "x-rapidapi-key": "8e9074276emsh223ef54cf19b760p19a968jsn3a988955cdbc",
      "x-rapidapi-host": "spotify-audio-features-track-analysis.p.rapidapi.com",
    },
  });

  const features = response.data.audio_features;
  const oEmbedResponse = await axios.get(
    `https://open.spotify.com/oembed?url=spotify:track:${trackID}`,
  );

  return {
    id: trackID,
    name: oEmbedResponse.data.title,
    image: oEmbedResponse.data.thumbnail_url,
    acousticness: parseFloat(features.acousticness),
    danceability: parseFloat(features.danceability),
    energy: parseFloat(features.energy),
    instrumentalness: parseFloat(features.instrumentalness),
    key: features.key,
    liveness: parseFloat(features.liveness),
    loudness: parseFloat(features.loudness),
    mode: parseFloat(features.mode),
    speechiness: parseFloat(features.speechiness),
    tempo: parseFloat(features.tempo),
    valence: parseFloat(features.valence),
  };
}
