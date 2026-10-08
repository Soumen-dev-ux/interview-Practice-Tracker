import { Plus, X } from "lucide-react";

export function Header({ isFormOpen, onToggleForm }) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">WEEKLY INTERVIEW PREPARATION</p>
        <h1>Interview Practice Tracker</h1>
        <p className="subtitle">
          A simple dashboard to keep your interview preparation moving.
        </p>
      </div>

      <button className="primary-btn" onClick={onToggleForm}>
        {isFormOpen ? <X size={17} /> : <Plus size={17} />}
        {isFormOpen ? "Close form" : "Add question"}
      </button>
    </header>
  );
}
