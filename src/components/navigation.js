import logo from "../spotifyLogo.png";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Compare from "../pages/Compare";
import Timeline from "../pages/Timeline";
import Home from "../pages/Landing";

function MyNavigation() {
  return (
    <BrowserRouter>
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

      {/* Routes OUTSIDE Nav, but still inside BrowserRouter /}*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/timeline" element={<Timeline />} /> 
        {/* {/ Fixed: <Timeline /> not Timeline  */}
      </Routes>
    </BrowserRouter>
  );
}

export default MyNavigation;

// import logo from "../spotifyLogo.png";
// import "../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Compare from "../pages/Compare";
// import Timeline from "../pages/Timeline";
// import Home from "../pages/Landing";

// function MyNavigation() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar expand="lg" className="navbar">
//           <Container style={{ margin: "0" }}>
//             <Navbar.Brand>
//               <img
//                 src={logo}
//                 width="150"
//                 className="d-inline-block align-top"
//                 alt="Spotify Track Analysis Logo"
//                 style={{ marginLeft: "50%" }}
//               />
//             </Navbar.Brand>

//             <Navbar.Toggle aria-controls="basic-navbar-nav" />

//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="ms-auto">
//                 <Link to="/">Landing page</Link>
//                 <Link to="/compare">Comparison page</Link>
//                 <Link to="/timeline">Timeline page</Link>

//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/compare" element={<Compare />} />
//                   <Route path="/timeline" element={Timeline} />
//                 </Routes>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default MyNavigation;
