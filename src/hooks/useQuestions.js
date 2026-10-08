import { useEffect, useState } from "react";
import { initialQuestions } from "../data/initialQuestions";
import { loadQuestions, saveQuestions } from "../services/storageService";

export function useQuestions() {
  const [questions, setQuestions] = useState(() => loadQuestions(initialQuestions));

  useEffect(() => {
    saveQuestions(questions);
  }, [questions]);

  function addQuestion(question) {
    setQuestions((current) => [
      { ...question, id: crypto.randomUUID() },
      ...current,
    ]);
  }

  function updateQuestionStatus(id, status) {
    setQuestions((current) =>
      current.map((question) =>
        question.id === id ? { ...question, status } : question
      )
    );
  }

  function deleteQuestion(id) {
    setQuestions((current) => current.filter((question) => question.id !== id));
  }

  function resetQuestions() {
    setQuestions(
      initialQuestions.map((question) => ({
        ...question,
        id: crypto.randomUUID(),
      }))
    );
  }

  return {
    questions,
    addQuestion,
    updateQuestionStatus,
    deleteQuestion,
    resetQuestions,
  };
}
