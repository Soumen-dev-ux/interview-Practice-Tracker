import { useMemo } from "react";

export function useQuestionFilters(questions, filters) {
  return useMemo(() => {
    const query = filters.search.trim().toLowerCase();

    return questions.filter((question) => {
      const matchesSearch =
        !query ||
        question.title.toLowerCase().includes(query) ||
        question.category.toLowerCase().includes(query) ||
        question.type.toLowerCase().includes(query);

      const matchesCategory =
        filters.category === "All" || question.category === filters.category;

      const matchesStatus =
        filters.status === "All" || question.status === filters.status;

      const matchesDifficulty =
        filters.difficulty === "All" ||
        question.difficulty === filters.difficulty;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesDifficulty
      );
    });
  }, [questions, filters]);
}
