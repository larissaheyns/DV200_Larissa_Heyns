import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavigation from "./components/navigation";
import TheFooter from "./components/pageFooter";
import SlicedWaves from "./components/SlicedWaves";
import Home from "./pages/Landing";
import Compare from "./pages/Compare";
import Timeline from "./pages/Timeline";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-waves">
        <SlicedWaves
          color1="#29a900"
          color2="#052301"
          color3="#66ff5b"
          spread={0}
          ribbonHeight={0.35}
          barWidth={0.65}
          amplitude={0.25}
          frequency={0.55}
          glow={1.45}
          brightness={0.3}
          blur={1.25}
          speed={0.35}
        />
      </div>

      <div className="app-shell">
        <MyNavigation />
        <main className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </main>
        <TheFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
