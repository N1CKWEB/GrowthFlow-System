import { Webhook } from "../interfaces/home.interfaces";
import { activeWebhooks } from "../mocks/home.mocks";

const Card = ({ text, title }: Webhook) => {
  return (
    <div className="bg-linear-to-br from-blue-950 to-blue-950/5 ml-10 rounded-2xl p-6 backdrop-blur-xl w-90">
      <h2 className="text-xl font-semibold ">{title}</h2>
      <div className="absolute top-6 right-6 bg-emerald-500/20 text-emerald-400 text-sm font-semibold px-3 py-1 rounded-xl flex items-center gap-1">
        <p>{text}</p>
      </div>
      <div className="space-y-4 mt-6">
        {activeWebhooks.map((task, index) => (
          <div
            key={index}
            className="w-70 h-19 rounded-2xl bg-linear-to-br from-blue-900 to-blue-950 border border-white/5 flex items-center justify-between px-4"
          >
            {/* Left side */}
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                {task.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-white text-sm font-medium">{task.name}</p>

                <p className="text-slate-400 text-xs">{task.text}</p>
              </div>
            </div>

            {/* Check icon */}
            <div className="text-emerald-400">{task.iconCheck}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
