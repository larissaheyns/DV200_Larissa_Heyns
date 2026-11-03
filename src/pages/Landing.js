import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { fetchTrackData } from "../components/api";
import { compareSongs } from "../data/tracks";
import GlowCard from "../components/GlowCard";
import edSheeran from "../ed_sheeran.jpg";
import billieEilish from "../billie_eilish.jpg";
import coldplay from "../coldplay.jpg";

export default function Home() {
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all(compareSongs.map((s) => fetchTrackData(s.id))).then(setTracks);
  }, []);

  useEffect(() => {
    if (tracks.length === 0) return;
    let swap;
    const interval = setInterval(() => {
      setVisible(false);
      swap = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % tracks.length);
        setVisible(true);
      }, 500);
    }, 3500);
    return () => {
      clearInterval(interval);
      clearTimeout(swap);
    };
  }, [tracks.length]);

  const current = tracks[currentIndex];

  return (
    <div>
      <section className="hero">
        <div>
          <span className="eyebrow">Audio feature explorer</span>
          <h1 className="hero-title">
            See what makes every song <em>sound</em> like itself.
          </h1>
          <p className="lead-text">
            Dive deeper into the music you love by exploring detailed audio
            features from Spotify tracks. Discover insights like danceability,
            energy, tempo and more, and see Spotify’s audio data turned into
            clear, engaging statistics.
          </p>
          <div className="hero-actions">
            <button className="btn-glow" onClick={() => navigate("/compare")}>
              Compare songs →
            </button>
            <button className="btn-glow btn-ghost" onClick={() => navigate("/timeline")}>
              Explore timelines
            </button>
          </div>
        </div>

        <div className="cover-stage">
          {current && (
            <GlowCard className="no-pad">
              <img
                className="cover-img"
                src={current.image}
                alt={current.title}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = current.fallbackImage; }}
                style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(1.03)" }}
              />
              <div className="cover-meta" style={{ opacity: visible ? 1 : 0 }}>
                <div>
                  <strong>{current.title}</strong>
                  <span>{current.artist}</span>
                </div>
                <span className="chip">{Math.round(current.tempo)} BPM</span>
              </div>
            </GlowCard>
          )}
        </div>
      </section>

      <section className="section-split">
        <GlowCard className="no-pad">
          <Carousel className="artist-carousel" indicators={false}>
            <Carousel.Item>
              <img src={edSheeran} alt="Ed Sheeran" />
              <Carousel.Caption><h5>Ed Sheeran</h5></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={billieEilish} alt="Billie Eilish" />
              <Carousel.Caption><h5>Billie Eilish</h5></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={coldplay} alt="Coldplay" />
              <Carousel.Caption><h5>Coldplay</h5></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </GlowCard>

        <div>
          <span className="eyebrow">Artist timelines</span>
          <h2>Watch an artist’s sound evolve.</h2>
          <p className="lead-text">
            Look at how different artists developed over the years and how
            their palette has changed. See how each song compares in
            danceability, energy, tempo and more.
          </p>
          <div className="hero-actions">
            <button className="btn-glow" onClick={() => navigate("/timeline")}>
              Go to timeline →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
