export interface Automation {
  id: string;
  name: string;
  description: string;
  trigger: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  active: boolean;
  executions: number;
  lastRun?: string;
}
