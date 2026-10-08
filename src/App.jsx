import { useMemo, useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { StatsGrid } from "./components/dashboard/StatsGrid";
import { ProgressCard } from "./components/dashboard/ProgressCard";
import { QuestionForm } from "./components/questions/QuestionForm";
import { QuestionTracker } from "./components/questions/QuestionTracker";
import { useQuestions } from "./hooks/useQuestions";
import { useQuestionFilters } from "./hooks/useQuestionFilters";
import { QUESTION_CATEGORIES, STATUSES, DIFFICULTIES } from "./constants/questionOptions";

function App() {
  const {
    questions,
    addQuestion,
    updateQuestionStatus,
    deleteQuestion,
    resetQuestions,
  } = useQuestions();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    status: "All",
    difficulty: "All",
  });

  const filteredQuestions = useQuestionFilters(questions, filters);

  const stats = useMemo(() => {
    const total = questions.length;
    const completed = questions.filter((q) => q.status === "Completed").length;

    return {
      total,
      dsa: questions.filter((q) => q.type === "DSA Problem").length,
      interview: questions.filter((q) => q.type === "Interview Question").length,
      machineCoding: questions.filter((q) => q.type === "Machine Coding").length,
      completed,
      progress: total ? Math.round((completed / total) * 100) : 0,
    };
  }, [questions]);

  function handleReset() {
    if (window.confirm("Reset the tracker to the demo questions?")) {
      resetQuestions();
    }
  }

  return (
    <div className="app-shell">
      <Header
        isFormOpen={isFormOpen}
        onToggleForm={() => setIsFormOpen((open) => !open)}
      />

      <main className="main-content">
        <StatsGrid stats={stats} />
        <ProgressCard stats={stats} />

        {isFormOpen && (
          <QuestionForm
            onSubmit={addQuestion}
            onClose={() => setIsFormOpen(false)}
          />
        )}

        <QuestionTracker
          questions={filteredQuestions}
          totalQuestions={questions.length}
          filters={filters}
          onFiltersChange={setFilters}
          onStatusChange={updateQuestionStatus}
          onDelete={deleteQuestion}
          onReset={handleReset}
          categories={QUESTION_CATEGORIES}
          statuses={STATUSES}
          difficulties={DIFFICULTIES}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
