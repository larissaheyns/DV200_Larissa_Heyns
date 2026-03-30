import logo from "../spotifyLogo.png";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavigation() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container style={{ margin: "0" }}>
        <Navbar.Brand>
          <img
            src={logo}
            width="150"
            className="d-inline-block align-top"
            alt="Spotify Track Analysis Logo"
            style={{ marginLeft: "50%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">Landing page</Link>
            <Link to="/compare">Comparison page</Link>
            <Link to="/timeline">Timeline page</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavigation;
