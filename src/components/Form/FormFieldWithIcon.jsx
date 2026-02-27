import React from "react";

/**
 * Reusable form field with icon next to label.
 * Icon uses text-[#4A90E2] (blue) per design.
 */
const FormFieldWithIcon = ({ icon: Icon, label, required, children, className = "" }) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <div className="flex items-center gap-2">
      {Icon && (
        <span className="flex shrink-0 text-[#4A90E2] [&>svg]:h-[17px] [&>svg]:w-[17px]">
          <Icon />
        </span>
      )}
      <label className="text-sm font-bold leading-5 text-slate-900">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
    </div>
    {children}
  </div>
);

export default FormFieldWithIcon;
