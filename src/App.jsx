import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Guilds } from "./components/guilds";
import { Members } from "./components/members";

const App = () => (
  <Router>
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guilds" element={<Guilds />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </div>
  </Router>
);
export default App;