import PropTypes from "prop-types";
import {
  VacancyCardClockIcon,
  VacancyCardEyeIcon,
  VacancyCardEnvelopeIcon,
  VacancyCardBidIcon,
  VacancyCardViewJobIcon,
  VacancyCardChatIcon,
  VacancyCardLocationIcon,
  VacancyCardStarFilledIcon,
  VacancyCardStarOutlineIcon,
} from "../../assets/icons";

const MAX_STARS = 5;

const VacancyCards = ({
  vacancy,
  viewProfileLabel = "View Profile",
  connectLabel = "Connect",
  bidLabel = "Bid",
  viewJobLabel = "View Job",
  chatLabel = "Chat",
  onViewProfile,
  onConnect,
  onBid,
  onViewJob,
  onChat,
  className = "",
}) => {
  const {
    companyName = "Company 1",
    companyAvatar,
    rating = 4,
    locationText = "Pakwan Cross Road, Bodakdev, Ahmedabad, Gujarat, India (5.1 km)",
    salary = "$1200",
    title = "QA - Mid Level / Specialist",
    employmentType = "Fulltime/Partime or Both",
  } = vacancy || {};

  const displayRating = Math.min(MAX_STARS, Math.max(0, Number(rating) || 0));

  return (
    <article
      className={`relative w-full flex-shrink-0 rounded-2xl border border-gray-100 bg-white outline outline-1 outline-offset-[-1.10px] outline-gray-100 ${className}`}
    >
      <div className="flex flex-col gap-0 px-[25px] pt-[26px]">
        <div className="flex items-start gap-1.5">
          <div className="relative h-[57px] w-[57px] flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
            {companyAvatar ? (
              <img
                src={companyAvatar}
                alt={companyName}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200 text-lg font-semibold text-gray-500">
                {companyName.charAt(0)}
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1 flex flex-col gap-[3px]">
            <h3 className="text-base font-semibold leading-6 text-slate-900 truncate">
              {companyName}
            </h3>
            <div className="flex items-center gap-[7px]">
              {Array.from({ length: MAX_STARS }, (_, i) =>
                i < displayRating ? (
                  <VacancyCardStarFilledIcon key={i} className="h-[11px] w-[11px]" />
                ) : (
                  <VacancyCardStarOutlineIcon key={i} className="h-[11px] w-[11px]" />
                )
              )}
            </div>
            <div className="mt-1 flex items-start gap-1.5">
              <VacancyCardLocationIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#4A5565]" />
              <p className="text-xs font-normal leading-4 text-gray-600 line-clamp-2">
                {locationText}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-100 px-[25px]" />
      <div className="flex h-10 items-center justify-center px-[25px] pt-2">
        <span className="text-3xl font-bold leading-10 text-slate-900">{salary}</span>
      </div>
      <h4 className="px-[25px] pt-2 text-center text-base font-medium leading-7 text-slate-900">
        {title}
      </h4>
      <div className="mt-2 flex items-center justify-center gap-2 px-[25px]">
        <VacancyCardClockIcon className="h-4 w-4 flex-shrink-0 text-[#4A5565]" />
        <span className="text-sm font-normal leading-5 text-gray-600">
          {employmentType}
        </span>
      </div>

      <div className="mt-4 border-t border-gray-100 px-[25px]" />

      <div className="flex flex-col gap-2 px-[25px] pb-6 pt-4">
        <div className="flex w-full gap-2">
          <button
            type="button"
            onClick={() => onViewProfile?.(vacancy)}
            className="flex h-10 flex-1 items-center justify-center gap-1 rounded-[10px] bg-cyan-900 text-white"
          >
            <VacancyCardEyeIcon className="h-4 w-4 text-white" />
            <span className="text-sm font-medium leading-5">{viewProfileLabel}</span>
          </button>
          <button
            type="button"
            onClick={() => onConnect?.(vacancy)}
            className="flex h-10 flex-1 items-center justify-center gap-1 rounded-[10px] border border-gray-200 bg-white outline outline-1 outline-offset-[-1.10px] outline-gray-200"
          >
            <VacancyCardEnvelopeIcon className="h-4 w-4 text-slate-900" />
            <span className="text-sm font-medium leading-5 text-slate-900">
              {connectLabel}
            </span>
          </button>
        </div>
        <div className="flex w-full gap-2">
          <button
            type="button"
            onClick={() => onBid?.(vacancy)}
            className="flex h-10 flex-1 items-center justify-center gap-1 rounded-[10px] bg-amber-500 text-white"
          >
            <VacancyCardBidIcon className="h-4 w-4 text-white" />
            <span className="text-sm font-medium leading-5">{bidLabel}</span>
          </button>
          <button
            type="button"
            onClick={() => onViewJob?.(vacancy)}
            className="flex h-10 flex-1 items-center justify-center gap-1 rounded-[10px] border border-gray-200 bg-white outline outline-1 outline-offset-[-1.10px] outline-gray-200"
          >
            <VacancyCardViewJobIcon className="h-4 w-4 text-slate-900" />
            <span className="text-sm font-medium leading-5 text-slate-900">
              {viewJobLabel}
            </span>
          </button>
        </div>
        <button
          type="button"
          onClick={() => onChat?.(vacancy)}
          className="flex h-10 w-full items-center justify-center gap-2 rounded-[10px] border border-gray-200 bg-white outline outline-1 outline-offset-[-1.10px] outline-gray-200"
        >
          <VacancyCardChatIcon className="h-3.5 w-3.5 text-slate-900" />
          <span className="text-sm font-medium leading-5 text-slate-900">
            {chatLabel}
          </span>
        </button>
      </div>
    </article>
  );
};

VacancyCards.propTypes = {
  vacancy: PropTypes.shape({
    companyName: PropTypes.string,
    companyAvatar: PropTypes.string,
    rating: PropTypes.number,
    locationText: PropTypes.string,
    salary: PropTypes.string,
    title: PropTypes.string,
    employmentType: PropTypes.string,
  }),
  viewProfileLabel: PropTypes.string,
  connectLabel: PropTypes.string,
  bidLabel: PropTypes.string,
  viewJobLabel: PropTypes.string,
  chatLabel: PropTypes.string,
  onViewProfile: PropTypes.func,
  onConnect: PropTypes.func,
  onBid: PropTypes.func,
  onViewJob: PropTypes.func,
  onChat: PropTypes.func,
  className: PropTypes.string,
};

export default VacancyCards;
