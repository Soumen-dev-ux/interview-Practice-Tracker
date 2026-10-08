import { useState } from "react";
import { QUESTION_TYPES } from "../../constants/questionOptions";

const initialForm = {
  title: "",
  category: "DSA",
  difficulty: "Easy",
  status: "Pending",
  type: "Interview Question",
};

export function QuestionForm({ onSubmit, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const title = form.title.trim();

    if (!title) {
      setError("Question title is required.");
      return;
    }

    onSubmit({ ...form, title });
    setForm(initialForm);
    setError("");
    onClose();
  }

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    if (field === "title") setError("");
  }

  return (
    <section className="panel form-panel">
      <div className="panel-heading">
        <span className="section-kicker">NEW ENTRY</span>
        <h2>Add practice item</h2>
      </div>

      <form onSubmit={handleSubmit} className="question-form">
        <label className="full">
          Question / problem
          <input
            value={form.title}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="e.g. Binary Search"
            maxLength={100}
            autoFocus
          />
          {error && <small className="error">{error}</small>}
        </label>

        <FormSelect
          label="Category"
          value={form.category}
          options={["DSA", "Git", "Technical"]}
          onChange={(value) => updateField("category", value)}
        />

        <FormSelect
          label="Difficulty"
          value={form.difficulty}
          options={["Easy", "Medium", "Hard"]}
          onChange={(value) => updateField("difficulty", value)}
        />

        <FormSelect
          label="Status"
          value={form.status}
          options={["Pending", "In Progress", "Completed"]}
          onChange={(value) => updateField("status", value)}
        />

        <FormSelect
          label="Type"
          value={form.type}
          options={QUESTION_TYPES}
          onChange={(value) => updateField("type", value)}
        />

        <div className="form-actions full">
          <button
            type="button"
            className="ghost-btn"
            onClick={() => {
              setForm(initialForm);
              setError("");
            }}
          >
            Clear
          </button>
          <button className="primary-btn" type="submit">
            Save question
          </button>
        </div>
      </form>
    </section>
  );
}

function FormSelect({ label, value, options, onChange }) {
  return (
    <label>
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
