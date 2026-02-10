export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  source: "instagram" | "web" | "referral";
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  date: string;
  value?: string;
}
