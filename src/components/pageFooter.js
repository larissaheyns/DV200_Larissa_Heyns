import logo from "../spotifyLogo.png";
import logoNoWords from "../spotifyLogoNoWords.png";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Compare from "../pages/Compare";
import Timeline from "../pages/Timeline";
import Landing from "../pages/Landing";

function TheFooter() {
  return (
        <div>
      <BrowserRouter>
      <Navbar expand="lg" className="footer">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="d-inline-block align-top">
                
                <Link to="/landing">
                  Landing page
                </Link>
                <Link to="/compare">
                  Comparison page
                </Link>
                <Link to="/timeline">
                  Timeline page
                </Link>

               <Routes>
                <Route path="/landing" element={<Landing />} />
                  <Route path="/compare" element={<Compare />} />
                  <Route path="/timeline" element={<Timeline />} />
                </Routes> 
              </Nav>
            </Navbar.Collapse>

            <Navbar.Brand>
              <img
                src={logoNoWords}
                width="250"
                className="justify-content-end"
                alt="Spotify Track Analysis Logo"
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Container>
        </Navbar>
      </BrowserRouter>
      </div>
      );
      }

      export default TheFooter;