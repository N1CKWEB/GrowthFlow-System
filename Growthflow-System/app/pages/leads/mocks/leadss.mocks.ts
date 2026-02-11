import type { Lead } from "../interfaces/leads.interfaces";
export const mockLeads: Lead[] = [
  {
    id: "1",
    name: "María González",
    email: "maria.g@email.com",
    phone: "+34 600 123 456",
    source: "instagram",
    status: "new",
    date: "2026-01-06",
    value: "$2,500",
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    email: "carlos.r@email.com",
    source: "web",
    status: "contacted",
    date: "2026-01-06",
  },
  {
    id: "3",
    name: "Ana Martínez",
    email: "ana.m@email.com",
    phone: "+34 611 234 567",
    source: "instagram",
    status: "qualified",
    date: "2026-01-05",
    value: "$5,000",
  },
  {
    id: "4",
    name: "Juan López",
    email: "juan.l@email.com",
    source: "referral",
    status: "converted",
    date: "2026-01-05",
    value: "$3,200",
  },
  {
    id: "5",
    name: "Laura Sánchez",
    email: "laura.s@email.com",
    phone: "+34 622 345 678",
    source: "web",
    status: "contacted",
    date: "2026-01-04",
  },
  {
    id: "6",
    name: "Pedro Ramírez",
    email: "pedro.r@email.com",
    source: "instagram",
    status: "new",
    date: "2026-01-04",
  },
];

export const sourceColors = {
  instagram: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  referral: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};
