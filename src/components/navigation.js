import logo from "../spotifyLogoNoWords.png";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function MyNavigation() {
  return (
    <Navbar expand="lg" className="site-nav" variant="dark">
      <Container fluid className="px-0">
        <Navbar.Brand as={NavLink} to="/" className="brand">
          <img src={logo} alt="Spotify Track Analysis logo" />
          <div>
            <span>Track Analysis</span>
            <small>for Spotify</small>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto gap-1 mt-3 mt-lg-0">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/compare">Compare</Nav.Link>
            <Nav.Link as={NavLink} to="/timeline">Timeline</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavigation;
