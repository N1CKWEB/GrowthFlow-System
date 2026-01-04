import { ActivityItem } from "~/components/ActivityItem";
import { SectionTitle } from "~/components/SectionTitle";
import { StatCard } from "~/components/StartCard";

function Home() {
  const logo = "/assets/img/logo_blanco.png";
  return (
    <main className="p-6 space-y-8 ">
      {/* Header */}
      <header>
        <img
          src={logo}
          className={
            "h-18 w-16 object-none object-center bg-top-left relative bottom-10"
          }
          alt="GrowthFlow"
        />
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
        <p className="text-sm text-slate-400">Resumen general de tu negocio</p>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 ">
        <StatCard title="Leads" value="1,320" trend="+3.5%" />
        <StatCard title="Conversiones" value="320" trend="-2%" />
        <StatCard title="Ingresos" value="$324,200" trend="+32%" />
        <StatCard title="Automations activas" value="8" />
      </section>

      {/* Main content */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="xl:col-span-2 rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-white/5">
          <SectionTitle title="Evolución de leads" />
          <div className="h-64 flex items-center justify-center text-slate-500">
            {/* Acá después va Recharts */}
            Gráfico semanal
          </div>
        </div>

        {/* Activity */}
        <div className="rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-white/5 ">
          <SectionTitle title="Actividad reciente" />
          <div className="space-y-4 mt-4">
            <ActivityItem text="Nuevo lead desde Instagram" />
            <ActivityItem text="Automatización ejecutada (DM)" />
            <ActivityItem text="Contacto agregado al CRM" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
