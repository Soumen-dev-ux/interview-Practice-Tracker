import { RotateCcw } from "lucide-react";
import { SearchFilters } from "./SearchFilters";
import { QuestionRow } from "./QuestionRow";
import { EmptyState } from "../common/EmptyState";

export function QuestionTracker({
  questions,
  totalQuestions,
  filters,
  onFiltersChange,
  onStatusChange,
  onDelete,
  onReset,
  categories,
  statuses,
  difficulties,
}) {
  const hasFilters =
    Boolean(filters.search) ||
    filters.category !== "All" ||
    filters.status !== "All" ||
    filters.difficulty !== "All";

  return (
    <section className="panel tracker-panel">
      <div className="panel-heading tracker-heading">
        <div>
          <span className="section-kicker">QUESTION TRACKER</span>
          <h2>Your practice list</h2>
        </div>
        <button className="text-btn" onClick={onReset} title="Reset demo data">
          <RotateCcw size={14} />
          Reset demo
        </button>
      </div>

      <SearchFilters
        filters={filters}
        onFiltersChange={onFiltersChange}
        categories={categories}
        statuses={statuses}
        difficulties={difficulties}
      />

      <div className="question-list">
        {questions.length === 0 ? (
          <EmptyState
            hasFilters={hasFilters}
            hasAnyQuestions={totalQuestions > 0}
          />
        ) : (
          questions.map((question) => (
            <QuestionRow
              key={question.id}
              question={question}
              onStatusChange={onStatusChange}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </section>
  );
}
