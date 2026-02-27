import React from "react";
import { Calendar } from "lucide-react";
import FormInput from "./FormInput";

/**
 * Reusable date input with custom calendar icon.
 * Uses FormInput with type="date" and a calendar icon on the right.
 */
const FormDateInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "dd/mm/yyyy",
  readOnly = false,
  containerClasses = "",
  ...props
}) => (
  <FormInput
    type="date"
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    readOnly={readOnly}
    containerClasses={`flex flex-col gap-2 ${containerClasses}`.trim()}
    iconRight={<Calendar className="h-5 w-5 shrink-0 text-black/50" />}
    hideNativeDateIcon
    {...props}
  />
);

export default FormDateInput;
