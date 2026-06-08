import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ExperimentPage from "./pages/ExperimentPage";
import DonePage from "./pages/DonePage";
import Explanation from "./pages/Explanation";

import DesktopOnly from "./components/DesktopOnly";

function isDesktop() {
  return window.innerWidth >= 1024;
}


export default function App() {
    if (!isDesktop()) {
    return <DesktopOnly />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/experiment" element={<ExperimentPage />} />
        <Route path="/done" element={<DonePage />} />
        <Route path="/explanation" element={<Explanation />} />
      </Routes>
    </BrowserRouter>
  );
}