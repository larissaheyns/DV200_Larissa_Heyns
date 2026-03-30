import { useState, useEffect } from "react";
import { fetchTrackData } from "../components/api";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import edSheeran from "../ed_sheeran.jpg";
import billieEilish from "../billie_eilish.jpg";
import coldplay from "../coldplay.jpg";

const previewSongs = [
  {
    id: 1,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    trackID: "3z8h0TU7ReDPLIbEnYhWZb",
  },
  {
    id: 2,
    title: "Hotel California",
    artist: "Eagles",
    trackID: "40riOy7x9W7GXjyGp4pjAv",
  },
  {
    id: 3,
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    trackID: "5CQ30WqJwcep0pYcV4AMNc",
  },
  {
    id: 4,
    title: "I Miss You",
    artist: "blink-182",
    trackID: "1AdYZ6X00nXmO613Y7GJOl",
  },
  {
    id: 5,
    title: "Mr.Brightside",
    artist: "The Killers",
    trackID: "003vvx7Niy0yvhvHt4a68B",
  },
  {
    id: 6,
    title: "Fire Fire",
    artist: "Flyleaf",
    trackID: "6SOzNLaZF6gHGgh7qU56hE",
  },
  {
    id: 7,
    title: "Complicated",
    artist: "Avril Lavigne",
    trackID: "5xEM5hIgJ1jjgcEBfpkt2F",
  },
  {
    id: 8,
    title: "Scotty Doesn't Know",
    artist: "Eagles",
    trackID: "1LkoYGxmYpO6QSEvY5C0Zl",
  },
  {
    id: 9,
    title: "Party In The U.S.A",
    artist: "Miley Cyrus",
    trackID: "5Q0Nhxo0l2bP3pNjpGJwV1",
  },
  {
    id: 10,
    title: "Shape of You",
    artist: "Ed Sheeran",
    trackID: "7qiZfU4dY1lWllzX7mPBI3",
  },
  {
    id: 11,
    title: "Safe And Sound",
    artist: "Capital Cities",
    trackID: "6Z8R6UsFuGXGtiIxiD8ISb",
  },
  {
    id: 12,
    title: "Wonderwall",
    artist: "Oasis",
    trackID: "7ygpwy2qP3NbrxVkHvUhXY",
  },
  {
    id: 13,
    title: "Thunder",
    artist: "Imagine Dragons",
    trackID: "1zB4vmk8tFRmM9UULNzbLB",
  },
  {
    id: 14,
    title: "Payphone",
    artist: "Maroon 5, Wiz Kalifa",
    trackID: "1XGmzt0PVuFgQYYnV2It7A",
  },
  {
    id: 15,
    title: "Attention",
    artist: "Charlie Puth",
    trackID: "5cF0dROlMOK5uNZtivgu50",
  },
  {
    id: 16,
    title: "Hot N Cold",
    artist: "Katy Perry",
    trackID: "1TEjSXPdAakDotj2Wji3PU",
  },
  {
    id: 17,
    title: "Wake Me Up",
    artist: "Avicii",
    trackID: "0nrRP2bk19rLc0orkWPQk2",
  },
  {
    id: 18,
    title: "Some Nights",
    artist: "fun.",
    trackID: "67WTwafOMgegV6ABnBQxcE",
  },
  {
    id: 19,
    title: "Call Me Maybe",
    artist: "Carly Rae Jepsen",
    trackID: "20I6sIOMTCkB6w7ryavxtO",
  },
  {
    id: 20,
    title: "What Makes You Beautiful",
    artist: "One Direction",
    trackID: "4cluDES4hQEUhmXj6TXkSo",
  },
  {
    id: 21,
    title: "Every Breath You Take",
    artist: "The Police",
    trackID: "1JSTJqkT5qHq8MDJnJbRE1",
  },
  {
    id: 22,
    title: "Life is a Highway",
    artist: "Rascal Flatts",
    trackID: "1SLikaDhWhhhnLJC58bkFI",
  },
  {
    id: 23,
    title: "Walk of Life",
    artist: "Dire Straits",
    trackID: "6HMFtoMvv6n6Q2eOyPFyne",
  },
  {
    id: 24,
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    trackID: "7snQQk1zcKl8gZ92AnueZW",
  },
];

export default function Home() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadImages() {
      const results = [];
      for (const song of previewSongs) {
        try {
          const data = await fetchTrackData(song.trackID);
          results.push(data);
          setImages([...results]); // update as each one loads
          await new Promise((res) => setTimeout(res, 1000)); // wait 1 second between requests
        } catch (error) {
          console.error("Failed to load image for", song.title, error);
        }
      }
    }
    loadImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

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
            <button
              onClick={() => navigate("/compare")}
              style={{
                marginTop: 24,
                padding: "12px 28px",
                background: "#1ED760",
                border: "none",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Go to Comparison Page
            </button>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          {images.length > 0 && (
            <img
              src={images[currentIndex].image}
              alt={images[currentIndex].name}
              style={{
                width: 500,
                height: 500,
                borderRadius: 16,
                objectFit: "cover",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            />
          )}
        </div>
      </div>

      <div className="row g-0 landing-row">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <Carousel>
            <Carousel.Item>
              <img
                src={edSheeran}
                alt="Ed Sheeran"
                style={{ width: "300px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={billieEilish}
                alt="Billie Eilish"
                style={{ width: "300px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img src={coldplay} alt="Coldplay" tyle={{ width: "300px" }} />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-6 ">
          <div
            style={{ padding: "15%", marginTop: "10%", marginBottom: "10%" }}
          >
            Look at how different artists developed over the years and see how
            their palette has changed by seeing how each song compares to each
            other in dance ability, energy, tempo, and more to see how each
            artist has developed.
            <br></br>
            <br></br>
            <button
              onClick={() => navigate("/timeline")}
              style={{
                marginTop: 24,
                padding: "12px 28px",
                background: "#1ED760",
                border: "none",
                borderRadius: 10,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Go to Timeline Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
