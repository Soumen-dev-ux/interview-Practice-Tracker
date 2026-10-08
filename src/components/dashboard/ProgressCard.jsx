export function ProgressCard({ stats }) {
  return (
    <section className="progress-card">
      <div className="progress-heading">
        <div>
          <span className="section-kicker">OVERALL PROGRESS</span>
          <h2>{stats.progress}% complete</h2>
        </div>
        <strong>
          {stats.completed}/{stats.total}
        </strong>
      </div>

      <div className="progress-track" aria-label={`Progress ${stats.progress}%`}>
        <div className="progress-bar" style={{ width: `${stats.progress}%` }} />
      </div>

      <p>Completion is calculated from the questions currently stored in your tracker.</p>
    </section>
  );
}
