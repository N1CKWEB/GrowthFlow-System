export interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  highlighted?: boolean;
  iconColor?: string;
  iconBg?: string;
}
