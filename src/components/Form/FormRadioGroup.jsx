import React from "react";

/**
 * Reusable radio group for forms. Matches form field styling (label, spacing).
 */
const FormRadioGroup = ({
  name,
  label,
  value,
  onChange,
  options = [],
  readOnly = false,
  className = "",
}) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    {label && (
      <label className="text-sm font-bold leading-5 text-slate-900">{label}</label>
    )}
    <div className="flex items-center gap-6">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center gap-1.5 ${readOnly ? "cursor-default" : "cursor-pointer"}`}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => !readOnly && onChange?.(opt.value)}
            disabled={readOnly}
            className="h-4 w-4 rounded-full border-gray-300 text-cyan-900 focus:ring-cyan-900"
          />
          <span className="text-base font-normal leading-6 text-slate-900">
            {opt.label}
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default FormRadioGroup;
