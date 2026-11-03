import { Link } from "react-router-dom";
import logoNoWords from "../spotifyLogoNoWords.png";
import "../App.css";

function TheFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img src={logoNoWords} alt="Spotify Track Analysis logo" />
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/compare">Compare</Link>
          <Link to="/timeline">Timeline</Link>
        </div>
        <div className="footer-copy">Spotify Track Analysis · DV200</div>
      </div>
    </footer>
  );
}

export default TheFooter;
