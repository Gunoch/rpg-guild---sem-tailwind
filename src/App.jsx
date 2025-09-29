import { BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar } from "./components/navbar";

const App = () => (
  <Router>
    <div className="app-container">
      <Navbar />
      <Routes>

      </Routes>
    </div>
  </Router>
);
export default App;