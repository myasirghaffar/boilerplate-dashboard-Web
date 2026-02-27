import { useState } from "react";
import PropTypes from "prop-types";
import {
  ApplyFiltersChevronDownIcon,
  ApplyFiltersStarIcon,
  ApplyFiltersSearchIcon,
  ApplyFiltersClearIcon,
} from "../../assets/icons";

const defaultIndustryOptions = ["Technology", "Finance", "Marketing", "Healthcare", "Other"];
const defaultCategoryOptions = ["HR", "Engineering", "Sales", "Design", "Operations"];
const defaultLocationOptions = ["Amsterdam", "Berlin", "London", "Paris", "Remote"];
const defaultEmploymentTypes = [
  { id: "full", label: "Full-Time" },
  { id: "part", label: "Part-Time" },
  { id: "both", label: "Full-Time/Part-Time" },
];

const FilterDropdown = ({
  label,
  value,
  options,
  placeholder,
  onSelect,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex w-full min-w-0 flex-col gap-1.5 ${className}`}>
      <label className="text-xs font-medium leading-5 text-gray-500">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-full items-center justify-between rounded-lg border-[1.52px] border-gray-200 px-3 py-2 text-left"
        >
          <span className="text-[10px] font-normal text-gray-600 truncate">
            {value || placeholder}
          </span>
          <ApplyFiltersChevronDownIcon className="h-4 w-4 shrink-0 text-[#4A5565]" />
        </button>
        {open && (
          <>
            <div
              className="fixed inset-0 z-10"
              aria-hidden
              onClick={() => setOpen(false)}
            />
            <ul className="absolute top-full left-0 right-0 z-20 mt-1 max-h-48 overflow-auto rounded-lg border border-gray-200 bg-white py-1 shadow">
              {options.map((opt) => (
                <li key={opt}>
                  <button
                    type="button"
                    className="w-full px-3 py-2 text-left text-[10px] text-gray-600 hover:bg-gray-50"
                    onClick={() => {
                      onSelect(opt);
                      setOpen(false);
                    }}
                  >
                    {opt}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

FilterDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const ApplyFilters = ({
  searchPlaceholder = "Search job, company",
  industryLabel = "Industry",
  industryOptions = defaultIndustryOptions,
  industryValue,
  onIndustryChange,
  categoryLabel = "Category",
  categoryOptions = defaultCategoryOptions,
  categoryValue,
  onCategoryChange,
  locationLabel = "Location",
  locationOptions = defaultLocationOptions,
  locationValue,
  onLocationChange,
  minSalaryLabel = "Min Salary (€)",
  maxSalaryLabel = "Max Salary (€)",
  minSalaryPlaceholder = "Min",
  maxSalaryPlaceholder = "Max",
  minSalaryValue,
  maxSalaryValue,
  onMinSalaryChange,
  onMaxSalaryChange,
  ratingLabel = "Minimum Rating",
  maxRating = 5,
  ratingValue,
  onRatingChange,
  employmentLabel = "Employment Type",
  employmentTypes = defaultEmploymentTypes,
  employmentValue,
  onEmploymentChange,
  distanceLabel = "Distance (km): 0 - 1000",
  distanceMin = 0,
  distanceMax = 1000,
  distanceValue,
  onDistanceChange,
  applyLabel = "Apply Filters",
  clearLabel = "Clear All",
  onApply,
  onClear,
  className = "",
}) => {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState(industryValue ?? "");
  const [category, setCategory] = useState(categoryValue ?? "");
  const [location, setLocation] = useState(locationValue ?? "");
  const [minSalary, setMinSalary] = useState(minSalaryValue ?? "");
  const [maxSalary, setMaxSalary] = useState(maxSalaryValue ?? "");
  const [rating, setRating] = useState(ratingValue ?? 0);
  const [employment, setEmployment] = useState(employmentValue ?? "");
  const [distance, setDistance] = useState(distanceValue ?? distanceMax);

  const handleIndustrySelect = (v) => {
    setIndustry(v);
    onIndustryChange?.(v);
  };
  const handleCategorySelect = (v) => {
    setCategory(v);
    onCategoryChange?.(v);
  };
  const handleLocationSelect = (v) => {
    setLocation(v);
    onLocationChange?.(v);
  };
  const handleApply = () => {
    onApply?.({
      search,
      industry,
      category,
      location,
      minSalary,
      maxSalary,
      rating,
      employment,
      distance,
    });
  };
  const handleClear = () => {
    setSearch("");
    setIndustry("");
    setCategory("");
    setLocation("");
    setMinSalary("");
    setMaxSalary("");
    setRating(0);
    setEmployment("");
    setDistance(distanceMax);
    onMinSalaryChange?.("");
    onMaxSalaryChange?.("");
    onRatingChange?.(0);
    onEmploymentChange?.("");
    onDistanceChange?.(distanceMax);
    onIndustryChange?.("");
    onCategoryChange?.("");
    onLocationChange?.("");
    onClear?.();
  };

  return (
    <section
      className={`flex w-full flex-col gap-4 rounded-2xl border-[1.52px] border-gray-200 bg-white px-6 py-6 ${className}`}
    >
      <input
        type="text"
        placeholder={searchPlaceholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-12 w-full rounded-[10.19px] border-[1.52px] border-gray-200 px-4 py-3 text-sm font-normal text-neutral-950 placeholder:text-neutral-950/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <FilterDropdown
          label={industryLabel}
          value={industry}
          options={industryOptions}
          placeholder={industryOptions[0]}
          onSelect={handleIndustrySelect}
        />
        <FilterDropdown
          label={categoryLabel}
          value={category}
          options={categoryOptions}
          placeholder={categoryOptions[0]}
          onSelect={handleCategorySelect}
        />
        <FilterDropdown
          label={locationLabel}
          value={location}
          options={locationOptions}
          placeholder={locationOptions[0]}
          onSelect={handleLocationSelect}
        />
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <div className="flex w-full min-w-0 flex-1 gap-2 sm:max-w-[320px]">
          <div className="flex flex-1 flex-col gap-1.5">
            <label className="text-xs font-medium leading-5 text-gray-500">
              {minSalaryLabel}
            </label>
            <input
              type="text"
              inputMode="numeric"
              placeholder={minSalaryPlaceholder}
              value={minSalary}
              onChange={(e) => {
                setMinSalary(e.target.value);
                onMinSalaryChange?.(e.target.value);
              }}
              className="h-10 w-full rounded-lg border-[1.52px] border-gray-200 px-3 py-2 text-[10px] font-normal text-neutral-950 placeholder:text-neutral-950/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            <label className="text-xs font-medium leading-5 text-gray-500">
              {maxSalaryLabel}
            </label>
            <input
              type="text"
              inputMode="numeric"
              placeholder={maxSalaryPlaceholder}
              value={maxSalary}
              onChange={(e) => {
                setMaxSalary(e.target.value);
                onMaxSalaryChange?.(e.target.value);
              }}
              className="h-10 w-full rounded-lg border-[1.52px] border-gray-200 px-3 py-2 text-[10px] font-normal text-neutral-950 placeholder:text-neutral-950/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium leading-5 text-gray-500">
            {ratingLabel}
          </label>
          <div className="flex gap-2">
            {Array.from({ length: maxRating }, (_, i) => i + 1).map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => {
                  setRating(star);
                  onRatingChange?.(star);
                }}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  rating >= star ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-[#4A5565]"
                }`}
                aria-label={`${star} star`}
              >
                <ApplyFiltersStarIcon className="h-[17px] w-[17px]" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium leading-5 text-gray-500">
            {employmentLabel}
          </label>
          <div className="flex flex-wrap gap-2">
            {employmentTypes.map(({ id, label: empLabel }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  setEmployment(employment === id ? "" : id);
                  onEmploymentChange?.(employment === id ? "" : id);
                }}
                className={`rounded-lg px-3 py-2 text-sm font-medium leading-5 ${
                  employment === id ? "bg-indigo-100 text-indigo-700" : "bg-gray-100 text-gray-600"
                }`}
              >
                {empLabel}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[320px] flex-col gap-4">
        <label className="text-sm font-medium leading-5 text-slate-900">
          {distanceLabel.replace("0 - 1000", `${distanceMin} - ${distanceMax}`)}
        </label>
        <div className="relative h-2 w-full overflow-hidden rounded-[10px]">
          <div className="h-full w-full rounded-[10px] bg-gradient-to-r from-slate-900/20 via-blue-900/20 to-gray-200/20" />
          <div
            className="absolute inset-y-0 left-0 rounded-[10px] bg-gradient-to-r from-[#0F172A] to-[#334F90]"
            style={{
              width: `${distanceMax > distanceMin ? ((Number(distance) - distanceMin) / (distanceMax - distanceMin)) * 100 : 0}%`,
            }}
          />
        </div>
        <input
          type="range"
          min={distanceMin}
          max={distanceMax}
          value={distance}
          onChange={(e) => {
            const v = Number(e.target.value);
            setDistance(v);
            onDistanceChange?.(v);
          }}
          className="h-0 mt-[-20px] cursor-pointer opacity-0 z-10 w-full accent-indigo-600"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-2">
        <button
          type="button"
          onClick={handleApply}
          className="inline-flex h-11 w-40 items-center justify-center gap-2 rounded-lg bg-cyan-900 text-sm font-medium leading-5 text-white hover:bg-cyan-800"
        >
          <ApplyFiltersSearchIcon className="h-[17px] w-[17px]" />
          {applyLabel}
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="inline-flex h-11 w-32 items-center justify-center gap-2 rounded-lg border-[1.52px] border-gray-200 bg-white text-sm font-medium leading-5 text-gray-600 hover:bg-gray-50"
        >
          <ApplyFiltersClearIcon className="h-[17px] w-[17px]" />
          {clearLabel}
        </button>
      </div>
    </section>
  );
};

ApplyFilters.propTypes = {
  searchPlaceholder: PropTypes.string,
  industryLabel: PropTypes.string,
  industryOptions: PropTypes.arrayOf(PropTypes.string),
  industryValue: PropTypes.string,
  onIndustryChange: PropTypes.func,
  categoryLabel: PropTypes.string,
  categoryOptions: PropTypes.arrayOf(PropTypes.string),
  categoryValue: PropTypes.string,
  onCategoryChange: PropTypes.func,
  locationLabel: PropTypes.string,
  locationOptions: PropTypes.arrayOf(PropTypes.string),
  locationValue: PropTypes.string,
  onLocationChange: PropTypes.func,
  minSalaryLabel: PropTypes.string,
  maxSalaryLabel: PropTypes.string,
  minSalaryPlaceholder: PropTypes.string,
  maxSalaryPlaceholder: PropTypes.string,
  minSalaryValue: PropTypes.string,
  maxSalaryValue: PropTypes.string,
  onMinSalaryChange: PropTypes.func,
  onMaxSalaryChange: PropTypes.func,
  ratingLabel: PropTypes.string,
  maxRating: PropTypes.number,
  ratingValue: PropTypes.number,
  onRatingChange: PropTypes.func,
  employmentLabel: PropTypes.string,
  employmentTypes: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ),
  employmentValue: PropTypes.string,
  onEmploymentChange: PropTypes.func,
  distanceLabel: PropTypes.string,
  distanceMin: PropTypes.number,
  distanceMax: PropTypes.number,
  distanceValue: PropTypes.number,
  onDistanceChange: PropTypes.func,
  applyLabel: PropTypes.string,
  clearLabel: PropTypes.string,
  onApply: PropTypes.func,
  onClear: PropTypes.func,
  className: PropTypes.string,
};

export default ApplyFilters;
