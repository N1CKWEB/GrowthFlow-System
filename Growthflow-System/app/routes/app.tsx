import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Leads from "../pages/leads/leads";
import Settings from "../pages/settings/settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
