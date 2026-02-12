import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "~/layout";
import AIAssistant from "~/pages/aiassistant/page";
import Automations from "~/pages/automations/automations";
import Dashboard from "~/pages/home/home";
import Leads from "~/pages/leads/leads";
import Settings from "~/pages/settings/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/automations" element={<Automations />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
