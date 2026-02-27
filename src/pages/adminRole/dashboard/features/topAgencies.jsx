import PropTypes from "prop-types";
import {
  TopAgenciesHeaderIcon,
  TopAgenciesRatingStarIcon,
} from "../../../../assets/icons";

const defaultAgencies = [
  { rank: 1, name: "Elite Recruitment", placements: 45, rating: "4.9" },
  { rank: 2, name: "Digital Talents", placements: 32, rating: "4.7" },
  { rank: 3, name: "Ace Hiring", placements: 28, rating: "4.8" },
];

const TopAgencies = ({
  title = "Top Performing Agencies",
  agencies = defaultAgencies,
}) => {
  const items = agencies?.length ? agencies : defaultAgencies;

  return (
    <section className=" w-full rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-4 inline-flex items-center gap-2">
        <TopAgenciesHeaderIcon className="h-5 w-5 text-amber-500" />
        <h3 className="text-base font-bold leading-6 text-gray-900">{title}</h3>
      </div>

      <div className="flex h-64 flex-col gap-3">
        {items.map((agency) => (
          <article
            key={`${agency.rank}-${agency.name}`}
            className="rounded-[10px] border border-gray-200 bg-gray-50 px-4 py-4"
          >
            <div className="inline-flex h-10 w-full items-center justify-between">
              <div className="inline-flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-[9.9px] bg-gradient-to-br from-indigo-500 to-purple-600">
                  <span className="text-sm font-bold leading-5 text-white">#{agency.rank}</span>
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold leading-5 text-gray-900">{agency.name}</p>
                  <p className="text-xs font-normal leading-4 text-gray-500">
                    {agency.placements} Placements
                  </p>
                </div>
              </div>

              <div className="inline-flex h-6 items-center gap-1 rounded-[4px] bg-[#FEF9C3] pl-2 pr-1.5">
                <TopAgenciesRatingStarIcon className="h-3 w-3 text-amber-500" />
                <span className="text-xs font-bold leading-4 text-yellow-800">{agency.rating}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

TopAgencies.propTypes = {
  title: PropTypes.string,
  agencies: PropTypes.arrayOf(
    PropTypes.shape({
      rank: PropTypes.number,
      name: PropTypes.string,
      placements: PropTypes.number,
      rating: PropTypes.string,
    })
  ),
};

export default TopAgencies;
