import { BarChart3, Code2, ListChecks, MessagesSquare } from "lucide-react";
import { StatCard } from "./StatCard";

export function StatsGrid({ stats }) {
  return (
    <section className="stats-grid">
      <StatCard icon={ListChecks} label="Total questions" value={stats.total} />
      <StatCard icon={Code2} label="Completed DSA" value={stats.dsa} />
      <StatCard icon={MessagesSquare} label="Interview questions" value={stats.interview} />
      <StatCard icon={BarChart3} label="Machine coding" value={stats.machineCoding} />
    </section>
  );
}
