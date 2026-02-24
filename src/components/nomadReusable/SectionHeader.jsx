import PropTypes from "prop-types";

const SectionHeader = ({
  heading,
  paragraph,
  className = "",
  headingClassName = "",
  paragraphClassName = "",
}) => {
  if (!heading && !paragraph) return null;

  return (
    <div className={`flex flex-col items-start gap-2 ${className}`}>
      {heading ? (
        <h1
          className={`text-2xl font-bold leading-tight text-[#101828] sm:text-3xl lg:text-[36px] lg:leading-[40px] ${headingClassName}`}
        >
          {heading}
        </h1>
      ) : null}

      {paragraph ? (
        <p
          className={`text-sm font-normal leading-6 text-[#6A7282] sm:text-base ${paragraphClassName}`}
        >
          {paragraph}
        </p>
      ) : null}
    </div>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  className: PropTypes.string,
  headingClassName: PropTypes.string,
  paragraphClassName: PropTypes.string,
};

export default SectionHeader;
