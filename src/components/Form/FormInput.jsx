import React from "react";
import ReusableInput from "./ReusableInput";

/**
 * Form-styled input/textarea. Uses ReusableInput with variant="form"
 * (rounded-[10px], h-12, border-gray-200, label font-bold, focus:ring-cyan-900/20).
 */
const FormInput = (props) => (
  <ReusableInput
    variant="form"
    containerClasses="flex flex-col gap-2"
    {...props}
  />
);

export default FormInput;
