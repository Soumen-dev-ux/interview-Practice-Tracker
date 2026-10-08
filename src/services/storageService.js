const STORAGE_KEY = "interview-practice-tracker-v1";

export function loadQuestions(fallback) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function saveQuestions(questions) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
  } catch {
    // Storage can fail in private/restricted browser contexts.
  }
}
