import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

// class Song{
//     constructor(spotify_track_id,acousticness,danceability,duration,energy,instrumentalness,key,liveness,loudness,mode,speechiness,tempo,time_signature,valence){
//         this.spotify_track_id = spotify_track_id;
//         this.acousticness=acousticness;
//         this.danceability=danceability;
//         this.duration=duration;
//         this.energy=energy;
//         this.instrumentalness=instrumentalness;
//         this.key=key;
//         this.liveness=liveness;
//         this.loudness=loudness;
//         this.mode=mode;
//         this.speechiness=speechiness;
//         this.tempo=tempo;
//         this.time_signature=time_signature;
//         this.valence=valence;
//     }
// }

//
// (async function(){
//   const url = 'https://spotify-audio-features-track-analysis.p.rapidapi.com/tracks/spotify_audio_features?spotify_track_id=6ho0GyrWZN3mhi9zVRW7xi&isrc=CA5KR1821202';
//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '8e9074276emsh223ef54cf19b760p19a968jsn3a988955cdbc',
// 		'x-rapidapi-host': 'spotify-audio-features-track-analysis.p.rapidapi.com'
// 	}
// };

// let data = await fetch(url, options)
//         .then((response)=> response.json())
//         .then((result) => {return result})
//         .catch((error)=> console.error(error));

//         console.log(data);

//  let trackID = data.spotify_track_id;
// const url = `https://open.spotify.com/oembed?url=https://open.spotify.com/track/${trackID}`;

// })();

//const spotify_TOKEN = process.env.REACT_APP_PANDASCORE_TOKEN;

// const options = {
//   method: 'GET',
//   url: 'https://spotify-audio-features-track-analysis.p.rapidapi.com/tracks/spotify_audio_features',
//   params: {
//     spotify_track_id: '6ho0GyrWZN3mhi9zVRW7xi', // your track ID here
//   },
//   headers: {
//     'x-rapidapi-key': '8e9074276emsh223ef54cf19b760p19a968jsn3a988955cdbc',
//     'x-rapidapi-host': 'spotify-audio-features-track-analysis.p.rapidapi.com',
//   },
// };

function Home() {
  const [trackData, setTrackData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchTrack() {
    try {
      const response = await axios.request({
        method: "GET",
        url: "https://spotify-audio-features-track-analysis.p.rapidapi.com/tracks/spotify_audio_features?spotify_track_id=6ho0GyrWZN3mhi9zVRW7xi&isrc=CA5KR1821202",
        headers: {
          "x-rapidapi-key":
            "8e9074276emsh223ef54cf19b760p19a968jsn3a988955cdbc",
          "x-rapidapi-host":
            "spotify-audio-features-track-analysis.p.rapidapi.com",
        },
      });

      const trackIdToFetch = response.data.spotify_track_id; //6ho0GyrWZN3mhi9zVRW7xi

      const oEmbedURL = `https://open.spotify.com/oembed?url=spotify:track:${trackIdToFetch}`;
      const oEmbedResponse = await axios.get(oEmbedURL);

      setTrackData({
        id: trackIdToFetch,
        name: oEmbedResponse.data.title,
        image: oEmbedResponse.data.thumbnail_url,
      });
    } catch (error) {
      console.error("Failed to fetch track:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTrack();
  }, []);

  return (
    <div className="landing-wrapper">
      <div className="row g-0 landing-row gradient-bg">
        <div className="col-6 ">
          <div
            style={{ padding: "15%", marginTop: "10%", marginBottom: "10%" }}
          >
            Welcome! This platform lets you dive deeper into the music you love
            by exploring detailed audio features from Spotify tracks. Discover
            insights like dance ability, energy, tempo, and more to understand
            what makes each song unique. Whether you're analyzing a favorite
            track or comparing different songs, this site transforms Spotify's
            audio data into clear and engaging statistics. 
            <br></br>
            <br></br>
            <button className="button">Go to Comparison Page</button>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="track-image-container">
            {loading ? (
              <p>Loading...</p>
            ) : (
              trackData?.image && (
                <img
                  src={trackData.image}
                  alt={trackData.name}
                  width={400}
                  className="track-image"
                />
              )
            )}
          </div>
        </div>
      </div>

      <div className="row g-0 landing-row">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="track-image-container" >
            {loading ? (
              <p>Loading...</p>
            ) : (
              trackData?.image && (
                <img
                  src={trackData.image}
                  alt={trackData.name}
                  width={400}
                  className="track-image"
                />
              )
            )}
          </div>
        </div>
        <div className="col-6 ">
          <div
            style={{ padding: "15%", marginTop: "10%", marginBottom: "10%" }}
          >
            Look at how different artists developed over the years and see how their palette has changed 
            by seeing how each song compares to each other in dance ability, energy, tempo, and more to see 
            how each artist has developed.
            <br></br>
            <br></br>
            <button className="button">Go to Timeline Page</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import "../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Home(){
// return(
//     <div>
//         <br></br>
//     <div className="gradient-bg">
//         <div className="row" style={{ padding: "5%" }}>
//           <div className="col">
//             Welcome! This platform lets you dive deeper into the music you love
//             by exploring detailed audio features from Spotify tracks. Discover
//             insights like dance ability, energy, tempo, and more to understand
//             what makes each song unique. Whether you're analyzing a favorite
//             track or comparing different songs, this site transforms Spotify’s
//             audio data into clear and engaging statistics. 🎧📊
//             <hr></hr>
//             <button className="button" href="#comparison">
//               Go to Comparison Page
//             </button>
//           </div>

//           <div className="col">
//             Welcome! This platform lets you dive deeper into the music you love
//             by exploring detailed audio features from Spotify tracks. Discover
//             insights like dance ability, energy, tempo, and more to understand
//             what makes each song unique. Whether you're analyzing a favorite
//             track or comparing different songs, this site transforms Spotify’s
//             audio data into clear and engaging statistics. 🎧📊
//           </div>
//         </div>
//       </div>

//         <div className="row" style={{ padding: "5%" }}>
//           <div className="col">
//             Welcome! This platform lets you dive deeper into the music you love
//             by exploring detailed audio features from Spotify tracks. Discover
//             insights like dance ability, energy, tempo, and more to understand
//             what makes each song unique. Whether you're analyzing a favorite
//             track or comparing different songs, this site transforms Spotify’s
//             audio data into clear and engaging statistics. 🎧📊
//           </div>

//           <div className="col">
//             Welcome! This platform lets you dive deeper into the music you love
//             by exploring detailed audio features from Spotify tracks. Discover
//             insights like dance ability, energy, tempo, and more to understand
//             what makes each song unique. Whether you're analyzing a favorite
//             track or comparing different songs, this site transforms Spotify’s
//             audio data into clear and engaging statistics. 🎧📊
//             <hr></hr>
//             <button className="button" href="#comparison">
//               Go to Timeline Page
//             </button>
//           </div>
//         </div>

//       </div>
// );
// }

// export default Home;
