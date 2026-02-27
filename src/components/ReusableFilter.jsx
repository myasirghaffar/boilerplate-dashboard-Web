import React, { useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { FormDateInput } from "./Form";

const buildUniqueOptionsFromData = (data, fieldKey) => {
  const values = [...new Set((data ?? []).map((item) => item?.[fieldKey]))]
    .filter((value) => typeof value === "string" && value.trim() !== "")
    .sort((a, b) => a.localeCompare(b));

  return values.map((value) => ({ label: value, value }));
};

const FILTER_LIBRARY = {
  role: ({ data }) => ({
    key: "role",
    label: "Role",
    options: buildUniqueOptionsFromData(data, "role"),
  }),
  status: ({ data }) => ({
    key: "status",
    label: "Status",
    options: buildUniqueOptionsFromData(data, "status"),
  }),
};

const ReusableFilter = ({
  // Search configuration
  searchConfig = null,

  // Filter dropdowns configuration
  filters = [],
  filterKeys = [],
  requiredFilterKeys = [],

  // Data to filter
  data = [],

  // Event handlers
  onFilterChange,
  onSearchChange,
  onFilteredDataChange,

  // Styling
  className = "",
  searchClassName = "",
  filterClassName = "",
  dropdownClassName = "",
  filterTriggerClassName = "",
  filterValueClassName = "",
  filterLabelClassName = "",

  // Action buttons
  actionButtons = [],

  // Layout options
  layout = "horizontal",
  gap = "gap-4",

  // Advanced options
  searchFields = [],
  caseSensitive = false,
  debounceMs = 300,
  dateRangeConfig = null,
  renderFiltersBeforeActions = false,
}) => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const filteredDataCallbackRef = React.useRef(onFilteredDataChange);
  const previousFilteredSignatureRef = React.useRef("");
  const resolvedFilters = React.useMemo(() => {
    if (Array.isArray(filters) && filters.length > 0) {
      return filters;
    }

    const keysToResolve =
      filterKeys.length > 0 ? filterKeys : requiredFilterKeys;

    return keysToResolve
      .map((key) => {
        const resolver = FILTER_LIBRARY[key];
        return resolver ? resolver({ data }) : null;
      })
      .filter(Boolean);
  }, [filters, filterKeys, requiredFilterKeys, data]);

  React.useEffect(() => {
    filteredDataCallbackRef.current = onFilteredDataChange;
  }, [onFilteredDataChange]);

  const toggleDropdown = (filterKey) => {
    setOpenDropdowns((prev) => {
      // Close all other dropdowns first
      const newState = {};
      Object.keys(prev).forEach((key) => {
        newState[key] = false;
      });

      // Toggle the clicked dropdown
      newState[filterKey] = !prev[filterKey];

      return newState;
    });
  };

  const handleFilterSelect = (filterKey, value) => {
    console.log("🔍 Filter selected:", filterKey, "=", value);

    const newFilters = {
      ...selectedFilters,
      [filterKey]: value,
    };

    setSelectedFilters(newFilters);
    onFilterChange?.(filterKey, value);

    setOpenDropdowns((prev) => ({
      ...prev,
      [filterKey]: false,
    }));
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange?.(value);
  };

  // Filter data based on search and filters
  const searchFieldsSignature = Array.isArray(searchFields)
    ? searchFields.join("|")
    : "";

  React.useEffect(() => {
    let filtered = [...data];

    // Apply search filter
    if (searchTerm && searchTerm.trim()) {
      const searchLower = caseSensitive ? searchTerm : searchTerm.toLowerCase();
      filtered = filtered.filter((item) => {
        const fieldsToSearch =
          searchFields.length > 0 ? searchFields : Object.keys(item);

        return fieldsToSearch.some((field) => {
          const value = item[field];
          if (typeof value === "string") {
            const itemValue = caseSensitive ? value : value.toLowerCase();
            return itemValue.includes(searchLower);
          }
          return false;
        });
      });
    }

    // Apply dropdown filters
    Object.entries(selectedFilters).forEach(([filterKey, filterValue]) => {
      if (filterValue && filterValue !== "") {
        filtered = filtered.filter((item) => {
          const itemValue = item[filterKey];
          return (
            itemValue === filterValue ||
            (typeof itemValue === "string" &&
              typeof filterValue === "string" &&
              itemValue.toLowerCase() === filterValue.toLowerCase())
          );
        });
      }
    });

    const filteredSignature = JSON.stringify(filtered);
    if (filteredSignature === previousFilteredSignatureRef.current) return;

    previousFilteredSignatureRef.current = filteredSignature;
    filteredDataCallbackRef.current?.(filtered);
  }, [
    data,
    searchTerm,
    selectedFilters,
    searchFieldsSignature,
    caseSensitive,
  ]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".filter-dropdown")) {
        setOpenDropdowns({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedFilters({});
    setOpenDropdowns({});
    onSearchChange?.("");
    onFilterChange?.({}, "");
  };

  const renderFilterDropdowns = () =>
    resolvedFilters.map((filter, index) => (
      <div
        key={filter.key}
        className={`relative filter-dropdown ${filter.fieldLabel ? "space-y-2" : ""}`}
      >
        {filter.fieldLabel ? (
          <span
            className={`block text-sm font-medium leading-5 text-slate-900 ${filterLabelClassName}`}
          >
            {filter.fieldLabel}
          </span>
        ) : null}
        <button
          type="button"
          onClick={() => toggleDropdown(filter.key)}
          className={`inline-flex h-12 min-w-[132px] items-center justify-between gap-2 rounded-[10px] border border-gray-200 bg-white px-4 text-base font-medium text-gray-600 ${filterTriggerClassName}`}
        >
          <span className={`truncate ${filterValueClassName}`}>
            {filter.options?.find((opt) => opt.value === selectedFilters[filter.key])
              ?.label || filter.label}
          </span>
          <ChevronDown
            className={`h-4 w-4 flex-shrink-0 text-gray-500 transition-transform ${openDropdowns[filter.key] ? "rotate-180" : ""
              }`}
          />
        </button>

        {openDropdowns[filter.key] ? (
          <div
            className={`absolute top-full z-50 mt-2 max-h-60 min-w-[180px] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg ${index === resolvedFilters.length - 1 ? "right-0" : "left-0"
              } ${dropdownClassName}`}
          >
            {filter.options?.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleFilterSelect(filter.key, option.value)}
                className={`w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 ${selectedFilters[filter.key] === option.value
                  ? "bg-gray-50 font-medium"
                  : ""
                  }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    ));

  const renderActionButtons = () =>
    actionButtons.length > 0 ? (
      actionButtons.map((button, index) => (
        <button
          key={index}
          type="button"
          onClick={button.onClick}
          className={`inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border border-gray-200 bg-white px-5 text-base font-medium leading-6 text-gray-600 ${button.className || ""
            }`}
        >
          {button.icon ? <button.icon className="h-5 w-5" /> : null}
          <span>{button.label}</span>
        </button>
      ))
    ) : (
      <>
        <button
          type="button"
          onClick={() => onSearchChange?.(searchTerm)}
          className="inline-flex h-12 min-w-32 items-center justify-center gap-2 rounded-[10px] border border-gray-200 bg-white px-5 text-base font-medium leading-6 text-gray-600"
        >
          <Search className="h-5 w-5 text-gray-600" />
          <span>Search</span>
        </button>
        <button
          type="button"
          onClick={clearAllFilters}
          className="inline-flex h-12 min-w-28 items-center justify-center gap-2 rounded-[10px] border border-gray-200 bg-white px-5 text-base font-medium leading-6 text-gray-600"
        >
          <X className="h-5 w-5 text-gray-600" />
          <span>Clear</span>
        </button>
      </>
    );

  return (
    <div
      className={`w-full rounded-2xl border border-gray-100 bg-white p-4 ${className}`}
    >
      <div
        className={`flex w-full flex-col gap-3 xl:flex-row ${dateRangeConfig ? "xl:items-end xl:justify-start xl:gap-4" : "xl:items-center xl:justify-between"
          }`}
      >
        {/* Search Bar */}
        {searchConfig ? (
          <div className={`relative w-full xl:max-w-[614px] ${searchClassName}`}>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              placeholder={searchConfig.placeholder || "Search jobs..."}
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-12 w-full rounded-[10px] border border-gray-200 bg-white pl-12 pr-10 text-base font-normal text-gray-600 outline-none transition-all placeholder:text-gray-600 focus:ring-2 focus:ring-cyan-900/20"
            />
            {searchTerm ? (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  onSearchChange?.("");
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            ) : null}
          </div>
        ) : null}
        {dateRangeConfig ? (
          <div className="grid w-full grid-cols-1 gap-4 xl:max-w-[782px] xl:grid-cols-2">
            <FormDateInput
              label={dateRangeConfig.fromLabel || "From Date"}
              value={dateRangeConfig.fromValue || ""}
              onChange={(e) => dateRangeConfig.onFromChange?.(e.target.value)}
              placeholder={dateRangeConfig.fromPlaceholder || "dd/mm/yy"}
            />
            <FormDateInput
              label={dateRangeConfig.toLabel || "To Date"}
              value={dateRangeConfig.toValue || ""}
              onChange={(e) => dateRangeConfig.onToChange?.(e.target.value)}
              placeholder={dateRangeConfig.toPlaceholder || "dd/mm/yy"}
            />
          </div>
        ) : null}

        {/* Right Controls */}
        <div className={`flex w-full flex-wrap items-center justify-end gap-3 xl:w-auto ${filterClassName}`}>
          {renderFiltersBeforeActions ? (
            <>
              {renderFilterDropdowns()}
              {renderActionButtons()}
            </>
          ) : (
            <>
              {renderActionButtons()}
              {renderFilterDropdowns()}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReusableFilter;
