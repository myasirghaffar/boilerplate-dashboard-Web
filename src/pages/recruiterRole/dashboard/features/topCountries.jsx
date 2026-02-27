import PropTypes from "prop-types";
import { TopCountriesGlobeIcon } from "../../../../assets/icons";
import NLFlag from "../../../../assets/images/nl.png";
import DEFlag from "../../../../assets/images/de.png";
import GBFlag from "../../../../assets/images/gb.png";
import FRFlag from "../../../../assets/images/fr.png";
import BEFlag from "../../../../assets/images/be.png";

const defaultCountries = [
{ flag: NLFlag, name: "Netherlands", openLabel: "28 open", trend: "+18%", barColorClass: "bg-indigo-400", barPercent: 100 },
  { flag: DEFlag, name: "Germany", openLabel: "12 open", trend: "+12%", barColorClass: "bg-pink-500", barPercent: 72 },
  { flag: GBFlag, name: "United Kingdom", openLabel: "5 open", trend: "+8%", barColorClass: "bg-emerald-500", barPercent: 64 },
  { flag: FRFlag, name: "France", openLabel: "2 open", trend: "+15%", barColorClass: "bg-amber-500", barPercent: 56 },
  { flag: BEFlag, name: "Belgium", openLabel: "0 open", trend: "+6%", barColorClass: "bg-violet-500", barPercent: 48 },
];

const TopCountries = ({
  title = "Top Countries",
  subtitle = "By performance",
  countries = defaultCountries,
  className = "",
}) => {
  return (
    <section
      className={`w-full self-stretch rounded-xl border border-gray-200/60 bg-white px-5 py-5 ${className}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold leading-5 text-gray-900">{title}</h3>
          <p className="text-xs font-normal leading-3 text-gray-500">{subtitle}</p>
        </div>
        <TopCountriesGlobeIcon className="h-[14px] w-[14px] text-[#99A1AF]" />
      </div>

      <div className="mt-3.5 flex flex-col gap-2.5">
        {countries.map((country, index) => (
          <div key={`${country.name}-${index}`} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <img src={country.flag} alt={country.name} className="w-4 h-4" />
                <div>
                  <p className="text-xs font-semibold leading-3 text-gray-900">{country.name}</p>
                  <p className="text-[8.74px] font-normal leading-3 tracking-tight text-gray-500">
                    {country.openLabel}
                  </p>
                </div>
              </div>
              <span className="rounded-sm bg-emerald-600/5 px-1.5 py-0.5 text-[8.74px] font-bold leading-3 tracking-tight text-emerald-600">
                {country.trend}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div
                className={`h-full rounded-full ${country.barColorClass || "bg-indigo-400"}`}
                style={{ width: `${Number(country.barPercent) || 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

TopCountries.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      flag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      openLabel: PropTypes.string.isRequired,
      trend: PropTypes.string.isRequired,
      barColorClass: PropTypes.string,
      barPercent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default TopCountries;
