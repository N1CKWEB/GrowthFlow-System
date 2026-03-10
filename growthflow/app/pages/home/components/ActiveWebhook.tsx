import { useState } from "react";
import { automationTasks } from "../mocks/home.mocks";
import { div } from "framer-motion/client";

const WebhookActiveCard = () => {
  const [activeWebhook, setActiveWebhook] = useState("");

  return (
    <div className="bg-linear-to-br from-blue-950 to-blue-950/5 ml-10 rounded-2xl p-6 backdrop-blur-xl w-90">
      <h2 className="text-xl font-semibold ">Activas</h2>
      <div className="absolute top-6 right-6 bg-emerald-500/20 text-emerald-400 text-sm font-semibold px-3 py-1 rounded-xl flex items-center gap-1">
        <p>8 online</p>
      </div>

      <div>
        {automationTasks.map((task, index) => (
          <div key={index} className="w-70 h-20">
            <div className="bg-red-600 ">{task.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebhookActiveCard;
