import { useState, forwardRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useField, useFormikContext } from "formik";

const ReusableInput = forwardRef(
  (
    {
      label,
      name = "",
      type = "text",
      placeholder,
      value,
      onChange,
      onBlur,
      iconLeft,
      iconRight,
      error,
      border,
      classes,
      backgroundColor = "bg-white",
      focusRing = "focus:ring-primary-600",
      readOnly,
      containerClasses = "",
      labelClassName = "",
      inputClassName = "",
      as,
      children,
      variant,
      hideNativeDateIcon = false,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);

    // Try to get Formik context
    let formikField = {};
    let formikMeta = {};
    let isFormik = false;
    try {
      useFormikContext();
      [formikField, formikMeta] = useField(name || "");
      isFormik = !!name;
    } catch {
      isFormik = false;
    }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
      setInputType(showPassword ? "password" : "text");
    };

    // Use the error from props if provided, otherwise use Formik's error
    const displayError = error || (formikMeta.touched && formikMeta.error);

    const isProfile = variant === "profile";
    const isFormVariant = variant === "form";
    const fieldValue = isFormik ? formikField.value : value;
    const hasValue = fieldValue !== undefined && fieldValue !== null && fieldValue !== "";
    const textColor = isProfile
      ? "text-[#4A5565]"
      : isFormVariant
        ? readOnly
          ? "text-gray-900"
          : "text-neutral-950/50"
        : hasValue
          ? "text-primary"
          : "text-[#6668769C]";
    const placeholderColor = isProfile
      ? "placeholder-[#4A5565]"
      : isFormVariant
        ? "placeholder:text-neutral-950/50"
        : "placeholder-[#6668769C]";
    const formInputBase =
      as === "textarea"
        ? `min-h-24 w-full rounded-[10px] border border-gray-200 px-4 py-3 text-base font-normal leading-6 outline-none ${readOnly ? "cursor-default bg-gray-50" : "bg-white focus:ring-2 focus:ring-cyan-900/20 focus:border-cyan-900"}`
        : `h-12 w-full rounded-[10px] border border-gray-200 px-4 py-3 text-base font-normal outline-none ${readOnly ? "cursor-default bg-gray-50" : "bg-white focus:ring-2 focus:ring-cyan-900/20 focus:border-cyan-900"}`;
    const baseInputClasses = isFormVariant
      ? formInputBase
      : isProfile
        ? as === "textarea"
          ? "min-h-[140px] w-full rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-3 text-base font-normal leading-6 outline-none focus:border-cyan-900"
          : "h-12 w-full rounded-[10px] border border-gray-200 bg-gray-50 px-4 text-base font-normal outline-none focus:border-cyan-900"
        : `w-full md:h-[3.18rem] h-[3.4rem] font-poppins text-[0.879rem] px-4 py-4 rounded-xl border ${error ? "border-red-500" : `${border || "border-gray-50"} `} ${backgroundColor}`;
    const focusClasses = readOnly
      ? "outline-none"
      : isFormVariant
        ? ""
        : isProfile
          ? ""
          : `focus:outline-none focus:ring-1 ${focusRing}`;
    const dateIconHide =
      (type === "date" && hideNativeDateIcon) || (type === "date" && (isProfile || isFormVariant))
        ? "relative [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:top-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0"
        : "";

    const rightPadding =
      iconRight || type === "password" ? (isProfile || isFormVariant ? "pr-12" : "pr-10") : "";
    const commonProps = {
      id: name,
      name: name,
      ref: ref,
      className: `${baseInputClasses} ${placeholderColor} ${textColor} ${focusClasses} ${iconLeft ? "pl-10" : ""} ${rightPadding} ${dateIconHide} ${classes} ${inputClassName}`,
      readOnly: readOnly,
      placeholder: placeholder,
      // Use Formik if available, else fallback to props
      ...(isFormik
        ? { ...formikField }
        : {
          value,
          onChange,
          onBlur,
        }),
      ...props,
    };

    // Input specific props that shouldn't be applied to other elements
    const inputSpecificProps = {
      type: type === "password" ? inputType : type,
    };

    return (
      <div className={containerClasses}>
        {label && (
          <label
            htmlFor={name}
            className={`block ${isFormVariant ? "mb-2 text-sm font-bold leading-5 text-slate-900" : isProfile ? "mb-2 text-sm font-medium leading-5 text-slate-900" : "mb-1 text-xs font-normal text-primary"} ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {iconLeft && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {iconLeft}
            </div>
          )}

          {as === "select" ? (
            <select {...commonProps}>
              {children}
            </select>
          ) : as === "textarea" ? (
            <textarea {...commonProps} />
          ) : (
            <input
              {...commonProps}
              {...inputSpecificProps}
            />
          )}

          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <AiOutlineEye
                  size={27}
                  className="md:text-gray-light text-primary"
                />
              ) : (
                <AiOutlineEyeInvisible
                  size={27}
                  className="md:text-gray-light text-primary"
                />
              )}
            </button>
          )}
          {iconRight && type !== "password" && (
            <div
              className={`absolute right-4 top-1/2 -translate-y-1/2 ${isProfile || isFormVariant ? "pointer-events-none text-gray-500" : "text-gray-900"}`}
            >
              {iconRight}
            </div>
          )}
        </div>
        {displayError && <p className="mt-1 text-xs text-red-500">{displayError}</p>}
      </div>
    );
  }
);

export default ReusableInput;
