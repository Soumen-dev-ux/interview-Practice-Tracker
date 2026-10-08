export function StatCard({ icon: Icon, label, value }) {
  return (
    <article className="stat-card">
      <div className="stat-icon">
        <Icon size={20} />
      </div>
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
      </div>
    </article>
  );
}
