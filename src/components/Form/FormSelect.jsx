import React, { useState } from "react";
import FormFieldWithIcon from "./FormFieldWithIcon";
import { FormSelectChevronIcon } from "../../assets/icons";

/**
 * Reusable custom select/dropdown with form field styling.
 */
const FormSelect = ({
  icon: Icon,
  label,
  required = false,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  className = "",
  readOnly = false,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel = options.find((o) => o.value === value)?.label || placeholder;
  const isDisabled = readOnly || disabled;

  return (
    <FormFieldWithIcon icon={Icon} label={label} required={required} className={className}>
      <div className="relative">
        <button
          type="button"
          onClick={() => !isDisabled && setIsOpen((prev) => !prev)}
          disabled={isDisabled}
          className={`flex h-12 mt-2 w-full items-center justify-between rounded-[10px] border border-gray-200 px-4 text-left text-base font-normal outline-none transition-colors focus:ring-2 focus:ring-cyan-900/20 focus:border-cyan-900 ${isDisabled ? "cursor-default bg-gray-50 text-gray-900" : "bg-white hover:border-gray-300"
            }`}
        >
          <span
            className={
              value ? "text-slate-900" : "text-neutral-950/50"
            }
          >
            {selectedLabel}
          </span>
          <FormSelectChevronIcon
            className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""
              }`}
          />
        </button>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-48 overflow-y-auto rounded-[10px] border border-gray-200 bg-white shadow-lg">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`block w-full px-4 py-3 text-left text-base hover:bg-gray-50 ${value === opt.value
                      ? "bg-gray-50 font-medium text-slate-900"
                      : "text-gray-600"
                    }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </FormFieldWithIcon>
  );
};

export default FormSelect;
