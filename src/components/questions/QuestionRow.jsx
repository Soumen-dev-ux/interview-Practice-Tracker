import { Trash2 } from "lucide-react";

export function QuestionRow({ question, onStatusChange, onDelete }) {
  const difficultyClass = `difficulty-${question.difficulty.toLowerCase()}`;
  const statusClass = `status-${question.status.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <article className="question-row">
      <div className="question-main">
        <div className="status-dot" />
        <div>
          <h3>{question.title}</h3>
          <div className="meta">
            <span>{question.category}</span>
            <span>•</span>
            <span>{question.type}</span>
          </div>
        </div>
      </div>

      <div className="badges">
        <span className={`badge ${difficultyClass}`}>{question.difficulty}</span>

        <select
          className={`status-select ${statusClass}`}
          value={question.status}
          onChange={(event) =>
            onStatusChange(question.id, event.target.value)
          }
          aria-label={`Status for ${question.title}`}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          className="delete-btn"
          onClick={() => onDelete(question.id)}
          aria-label={`Delete ${question.title}`}
          title="Delete question"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </article>
  );
}
