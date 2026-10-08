import { ClipboardList, SearchX } from "lucide-react";

export function EmptyState({ hasFilters, hasAnyQuestions }) {
  const filteredOut = hasFilters && hasAnyQuestions;
  const Icon = filteredOut ? SearchX : ClipboardList;

  return (
    <div className="empty-state">
      <div className="empty-icon">
        <Icon size={22} />
      </div>
      <h3>{filteredOut ? "No matching questions" : "Your tracker is empty"}</h3>
      <p>
        {filteredOut
          ? "Try changing the search or filters."
          : "Add your first interview question to start tracking."}
      </p>
    </div>
  );
}
