import { div } from "framer-motion/client";
import {
  TrendingUp,
  Users,
  DollarSign,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Instagram,
  Webhook,
  CheckCircle2,
  Clock,
  Target,
  Sparkles,
  TrendingDown,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export const attendanceData = [
  { day: "Sep 13", present: 120, absent: 45 },
  { day: "Sep 14", present: 95, absent: 30 },
  { day: "Sep 15", present: 180, absent: 50 },
  { day: "Sep 16", present: 110, absent: 35 },
  { day: "Week 16", present: 140, absent: 48 },
  { day: "Sep 17", present: 165, absent: 42 },
  { day: "Sep 18", present: 130, absent: 38 },
];

export const automationTasks = [
  {
    name: "Instagram DM auto-reply",
    progress: 70,
    status: "En progreso",
    team: ["👤", "👤", "👤"],
  },
  {
    name: "Email follow-up sequence",
    progress: 90,
    status: "Casi completo",
    team: ["👤", "👤"],
  },
  {
    name: "Lead scoring con IA",
    progress: 30,
    status: "Iniciando",
    team: ["👤", "👤", "👤", "👤"],
  },
];

export const activeWebhooks = [
  {
    icon: (
      <div className="p-2 rounded-lg bg-pink-900">
        <Instagram className="w-4 h-4 text-pink-400" />
      </div>
    ),
    name: "Instagram DM",
    text: "Auto-respuesta",
    iconCheck: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
  },

  {
    icon: (
      <div className="p-2 rounded-lg bg-purple-800 ">
        <Webhook className="w-4 h-4 text-purple-400" />
      </div>
    ),
    name: "Follow-uo",
    text: "Email secuencia",
    iconCheck: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
  },

  {
    icon: (
      <div className="p-2 rounded-lg bg-blue-800">
        <Activity className="w-4 h-4 text-blue-400" />
      </div>
    ),
    name: "Lead Scoring",
    text: "Clasificación IA",
    iconCheck: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
  },

  {
    icon: (
      <div className="p-2 rounded-lg bg-orange-700">
        <Zap className="w-4 h-4 text-orange-400" />
      </div>
    ),
    name: "Agent IA Marketing",
    text: "Compaña 3 días",
    iconCheck: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
  },
];
