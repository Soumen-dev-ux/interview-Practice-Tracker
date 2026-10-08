import { Search } from "lucide-react";

export function SearchFilters({
  filters,
  onFiltersChange,
  categories,
  statuses,
  difficulties,
}) {
  function update(field, value) {
    onFiltersChange((current) => ({ ...current, [field]: value }));
  }

  return (
    <div className="filters">
      <div className="search-wrap">
        <Search size={17} />
        <input
          value={filters.search}
          onChange={(event) => update("search", event.target.value)}
          placeholder="Search questions..."
          aria-label="Search questions"
        />
      </div>

      <Filter
        value={filters.category}
        options={categories}
        onChange={(value) => update("category", value)}
        label="Category"
      />
      <Filter
        value={filters.status}
        options={statuses}
        onChange={(value) => update("status", value)}
        label="Status"
      />
      <Filter
        value={filters.difficulty}
        options={difficulties}
        onChange={(value) => update("difficulty", value)}
        label="Difficulty"
      />
    </div>
  );
}

function Filter({ value, options, onChange, label }) {
  return (
    <select
      className="filter"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      aria-label={`Filter by ${label}`}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}
