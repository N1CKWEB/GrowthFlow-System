import { LucideIcon } from "lucide-react";

export interface Cards {
  icon: LucideIcon;
  title: string;
  number: string;
  text: string;
  porcentaje: string;
  iconBng: string;
}

export interface Convertion {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  text: string;
  text_recharts: string;
}

export interface Webhook {
  title: string;
  text: string;
}

export interface Insights {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  bgColor: string;
}
