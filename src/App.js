import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavigation from "./components/navigation";
import TheFooter from "./components/pageFooter";
import Home from "./pages/Landing";
import Compare from "./pages/Compare";
import Timeline from "./pages/Timeline";


function App() {
  return (
   <BrowserRouter>
      <MyNavigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>

      <TheFooter />
    </BrowserRouter>
  );
}

export default App;
