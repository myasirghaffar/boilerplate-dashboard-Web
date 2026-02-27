
// Example: Logout Icon
export const LogoutIcon = ({ className, ...props }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.49335 17.4839H4.16315C3.72153 17.4839 3.29801 17.3085 2.98574 16.9962C2.67348 16.684 2.49805 16.2605 2.49805 15.8188V4.16315C2.49805 3.72153 2.67348 3.29801 2.98574 2.98574C3.29801 2.67348 3.72153 2.49805 4.16315 2.49805H7.49335" stroke="white" strokeOpacity="0.7" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.3203 14.1536L17.4831 9.99087L13.3203 5.82812" stroke="white" strokeOpacity="0.7" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.4828 9.99023H7.49219" stroke="white" strokeOpacity="0.7" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

// Example: Chevron Down Icon
export const ChevronDownIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 8L10 12L14 8" />
  </svg>
);

// Example: X (Close) Icon
export const XIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6L6 18M6 6L18 18" />
  </svg>
);

export const SearchIcon = ({ className, ...props }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      stroke="#8E8D93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.9999 20.9999L16.6499 16.6499"
      stroke="#8E8D93"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MaleIcon = ({ className, ...props }) => (
  <svg
    width="25"
    height="30"
    viewBox="0 0 22 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 10.5C22.933 10.5 24.5 8.933 24.5 7C24.5 5.067 22.933 3.5 21 3.5C19.067 3.5 17.5 5.067 17.5 7C17.5 8.933 19.067 10.5 21 10.5Z"
      fill="#58398D"
    />
    <path
      d="M26.25 12.25H15.75C15.2859 12.25 14.8408 12.4344 14.5126 12.7626C14.1844 13.0908 14 13.5359 14 14V26.25H17.5V38.5H24.5V26.25H28V14C28 13.5359 27.8156 13.0908 27.4874 12.7626C27.1592 12.4344 26.7141 12.25 26.25 12.25Z"
      fill="#58398D"
    />
  </svg>
);
export const FemaleIcon = ({ className, ...props }) => (
  <svg
    width="25"
    height="30"
    viewBox="0 0 22 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 10.5C22.933 10.5 24.5 8.933 24.5 7C24.5 5.067 22.933 3.5 21 3.5C19.067 3.5 17.5 5.067 17.5 7C17.5 8.933 19.067 10.5 21 10.5Z"
      fill="#EA5B28"
    />
    <path
      d="M26.1591 13.447C26.0437 13.0982 25.8213 12.7948 25.5234 12.5798C25.2255 12.3649 24.8674 12.2495 24.5001 12.25H17.5001C17.1328 12.2498 16.7748 12.3653 16.477 12.5802C16.1791 12.7951 15.9566 13.0984 15.8411 13.447L12.3411 23.947L15.4473 24.9848L14.0001 31.5H17.5001V38.5H24.5001V31.5H28.0001L26.5528 24.983L29.6591 23.9453L26.1591 13.447Z"
      fill="#EA5B28"
    />
  </svg>
);
export const PrintIcon = ({ className, ...props }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_5174)">
      <path d="M17.4166 0H4.58325V4.58333H17.4166V0Z" fill="black" />
      <path d="M16.5 13.75H5.5V22H16.5V13.75Z" fill="black" />
      <path
        d="M19.25 6.4165H2.75C2.02065 6.4165 1.32118 6.70624 0.805456 7.22196C0.289731 7.73769 0 8.43716 0 9.1665L0 18.3332H3.66667V11.9165H18.3333V18.3332H22V9.1665C22 8.43716 21.7103 7.73769 21.1945 7.22196C20.6788 6.70624 19.9793 6.4165 19.25 6.4165ZM17.4167 10.0832H13.75V8.24984H17.4167V10.0832Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_5174">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const DownloadIcon = ({ className, ...props }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_5178)">
      <path
        d="M21.0833 21.9999H0.916667C0.4125 21.9999 0 21.5874 0 21.0832C0 20.5791 0.4125 20.1666 0.916667 20.1666H21.0833C21.5875 20.1666 22 20.5791 22 21.0832C22 21.5874 21.5875 21.9999 21.0833 21.9999ZM13.5392 17.2882L19.36 11.1007C20.1575 10.3032 20.3867 9.16656 19.9558 8.13072C19.525 7.09489 18.5625 6.44406 17.435 6.43489H15.5833V2.74072C15.5925 1.20989 14.3367 -0.00927734 12.815 -0.00927734H9.16667C7.645 -0.00927734 6.41667 1.21906 6.41667 2.74072V6.40739H4.7025C3.63 6.40739 2.59417 6.96656 2.12667 7.92906C1.60417 9.01072 1.815 10.2299 2.62167 11.0457L8.3875 17.2791C9.09333 17.9849 10.0283 18.3424 10.9633 18.3424C11.8983 18.3424 12.8242 17.9849 13.5392 17.2791V17.2882Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_5178">
        <rect width="22" height="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Footer social icons
export const FooterFacebookIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.4165 8.33333V11.6667H7.9165V17.5H11.2498V11.6667H13.7498L14.5832 8.33333H11.2498V6.66667C11.2498 6.2125 11.629 5.83333 12.0832 5.83333H14.5832V2.5H12.0832C9.814 2.5 7.9165 4.3975 7.9165 6.66667V8.33333H5.4165Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FooterTwitterIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.7917 4.62501C12.1584 4.62491 11.5503 4.87345 11.0983 5.31715C10.6464 5.76086 10.3867 6.36426 10.3751 6.99751L10.3517 8.31001C10.3504 8.38048 10.3341 8.44987 10.3041 8.51362C10.274 8.57737 10.2308 8.63404 10.1773 8.67991C10.1238 8.72579 10.0612 8.75983 9.99358 8.77982C9.92598 8.7998 9.85493 8.80526 9.78508 8.79585L8.48341 8.61918C6.77258 8.38585 5.13258 7.59751 3.55841 6.28668C3.06091 9.04501 4.03341 10.9558 6.37758 12.43L7.83341 13.345C7.90263 13.3884 7.96017 13.4481 8.00098 13.5189C8.04178 13.5897 8.06463 13.6694 8.0675 13.751C8.07038 13.8327 8.05321 13.9138 8.01748 13.9873C7.98176 14.0607 7.92857 14.1243 7.86258 14.1725L6.53591 15.1417C7.32508 15.1908 8.07425 15.1558 8.69591 15.0325C12.6276 14.2475 15.2417 11.2892 15.2417 6.40918C15.2417 6.01085 14.3976 4.62501 12.7917 4.62501ZM8.70841 6.96668C8.72296 6.16339 8.97415 5.38224 9.43054 4.72103C9.88694 4.05983 10.5282 3.54795 11.2742 3.24949C12.0201 2.95103 12.8375 2.87925 13.624 3.04314C14.4106 3.20703 15.1313 3.5993 15.6959 4.17085C16.2884 4.16668 16.7926 4.31668 17.9192 3.63335C17.6409 5.00001 17.5026 5.59335 16.9084 6.40918C16.9084 12.7775 12.9942 15.8742 9.02175 16.6667C6.29925 17.21 2.33841 16.3175 1.20508 15.1325C1.78258 15.0875 4.13258 14.835 5.49091 13.8408C4.34091 13.0825 -0.232422 10.3908 2.77341 3.15501C4.18452 4.80279 5.61508 5.92418 7.06508 6.51918C8.02924 6.91501 8.26675 6.90751 8.70925 6.96751"
      fill="currentColor"
    />
  </svg>
);

export const HeroArrowRightIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.1533 6.6604L17.4835 9.9906M17.4835 9.9906L14.1533 13.3208M17.4835 9.9906H2.49756"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowBackIcon = ({ className, ...props }) => (
  <svg className={className} width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6.46267 12.118L0.807617 6.46291L6.46267 0.807861" stroke="currentColor" strokeWidth="1.61573" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HeroCheckCircleIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99053 17.9831C12.1103 17.9831 14.1432 17.141 15.6421 15.6421C17.1409 14.1432 17.983 12.1103 17.983 9.99059C17.983 7.87085 17.1409 5.83793 15.6421 4.33905C14.1432 2.84017 12.1103 1.99811 9.99053 1.99811C7.87079 1.99811 5.83787 2.84017 4.33899 4.33905C2.84011 5.83793 1.99805 7.87085 1.99805 9.99059C1.99805 12.1103 2.84011 14.1432 4.33899 15.6421C5.83787 17.141 7.87079 17.9831 9.99053 17.9831ZM13.694 8.6988C13.876 8.51038 13.9767 8.25801 13.9745 7.99606C13.9722 7.73411 13.8671 7.48354 13.6819 7.2983C13.4966 7.11307 13.2461 7.008 12.9841 7.00572C12.7222 7.00345 12.4698 7.10415 12.2814 7.28613L8.99147 10.576L7.69968 9.28425C7.51126 9.10227 7.25889 9.00157 6.99694 9.00384C6.73499 9.00612 6.48442 9.11119 6.29918 9.29642C6.11395 9.48166 6.00888 9.73223 6.0066 9.99418C6.00432 10.2561 6.10502 10.5085 6.28701 10.6969L8.28513 12.695C8.47248 12.8823 8.72655 12.9876 8.99147 12.9876C9.25638 12.9876 9.51045 12.8823 9.6978 12.695L13.694 8.6988Z"
      fill="#05DF72"
    />
  </svg>
);

export const HeroStarIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.69748 0.335615L9.44887 3.77685C9.4887 3.86419 9.55136 3.93985 9.6306 3.99627C9.70984 4.0527 9.80289 4.08793 9.90048 4.09846L13.7667 4.65591C13.8787 4.66992 13.9842 4.71463 14.071 4.78483C14.1578 4.85503 14.2223 4.94782 14.257 5.05236C14.2916 5.15691 14.295 5.26889 14.2667 5.37523C14.2384 5.48157 14.1796 5.57788 14.0972 5.65291L11.3104 8.34371C11.2393 8.40838 11.1859 8.48934 11.1551 8.57921C11.1243 8.66908 11.1171 8.76502 11.1342 8.85829L11.8061 12.6426C11.8255 12.7513 11.8132 12.8632 11.7706 12.9654C11.7279 13.0677 11.6566 13.1563 11.5648 13.2211C11.473 13.2859 11.3644 13.3243 11.2512 13.3319C11.1381 13.3396 11.025 13.3162 10.9249 13.2643L7.44414 11.474C7.35501 11.4315 7.25704 11.4093 7.15775 11.4093C7.05846 11.4093 6.96049 11.4315 6.87136 11.474L3.39063 13.2643C3.29049 13.3162 3.17742 13.3396 3.06429 13.3319C2.95115 13.3243 2.84249 13.2859 2.75068 13.2211C2.65886 13.1563 2.58757 13.0677 2.54492 12.9654C2.50228 12.8632 2.48998 12.7513 2.50943 12.6426L3.18135 8.81541C3.19838 8.72213 3.19117 8.6262 3.16039 8.53633C3.12961 8.44646 3.07623 8.3655 3.00511 8.30083L0.185274 5.65291C0.10185 5.57582 0.0431808 5.47685 0.016375 5.36797C-0.0104309 5.2591 -0.00422367 5.145 0.0342446 5.03949C0.0727128 4.93397 0.141792 4.84158 0.233113 4.7735C0.324434 4.70543 0.43408 4.66458 0.548768 4.65591L4.41502 4.09846C4.51261 4.08793 4.60567 4.0527 4.68491 3.99627C4.76415 3.93985 4.8268 3.86419 4.86664 3.77685L6.61802 0.335615C6.66571 0.235389 6.74187 0.150535 6.83751 0.0910667C6.93314 0.0315988 7.04426 0 7.15775 0C7.27124 0 7.38236 0.0315988 7.478 0.0910667C7.57363 0.150535 7.64979 0.235389 7.69748 0.335615Z"
      fill="#FFA600"
    />
  </svg>
);

export const HeroBriefcaseIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.9876 17.6657C24.1766 19.2066 20.1036 19.9963 15.9928 19.9913C11.7507 19.9913 7.7031 19.165 3.99805 17.6657M21.3239 7.99654V5.33104C21.3239 4.6241 21.043 3.94612 20.5431 3.44624C20.0433 2.94636 19.3653 2.66553 18.6583 2.66553H13.3273C12.6204 2.66553 11.9424 2.94636 11.4425 3.44624C10.9426 3.94612 10.6618 4.6241 10.6618 5.33104V7.99654M15.9928 15.9931H16.0062M6.66356 26.6551H25.3221C26.029 26.6551 26.707 26.3743 27.2069 25.8744C27.7068 25.3745 27.9876 24.6965 27.9876 23.9896V10.6621C27.9876 9.95512 27.7068 9.27713 27.2069 8.77725C26.707 8.27737 26.029 7.99654 25.3221 7.99654H6.66356C5.95662 7.99654 5.27864 8.27737 4.77876 8.77725C4.27888 9.27713 3.99805 9.95512 3.99805 10.6621V23.9896C3.99805 24.6965 4.27888 25.3745 4.77876 25.8744C5.27864 26.3743 5.95662 26.6551 6.66356 26.6551Z"
      stroke="currentColor"
      strokeWidth="2.66551"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeroTeamIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.6568 26.6551H29.3206V23.9896C29.3205 23.1586 29.0616 22.3484 28.5798 21.6714C28.098 20.9944 27.4172 20.4844 26.6321 20.2122C25.847 19.94 24.9967 19.9192 24.1992 20.1526C23.4017 20.386 22.6968 20.8621 22.1824 21.5146M22.6568 26.6551H9.3293M22.6568 26.6551V23.9896C22.6568 23.1153 22.4889 22.2796 22.1824 21.5146M22.1824 21.5146C21.6875 20.2778 20.8333 19.2176 19.7301 18.4708C18.6269 17.724 17.3253 17.3248 15.9931 17.3248C14.6609 17.3248 13.3592 17.724 12.256 18.4708C11.1528 19.2176 10.2987 20.2778 9.80376 21.5146M9.3293 26.6551H2.66553V23.9896C2.66559 23.1586 2.92453 22.3484 3.40635 21.6714C3.88818 20.9944 4.56895 20.4844 5.35403 20.2122C6.1391 19.94 6.98948 19.9192 7.78695 20.1526C8.58442 20.386 9.28935 20.8621 9.80376 21.5146M9.3293 26.6551V23.9896C9.3293 23.1153 9.49722 22.2796 9.80376 21.5146M19.9913 9.32926C19.9913 10.3897 19.5701 11.4066 18.8203 12.1565C18.0704 12.9063 17.0535 13.3275 15.9931 13.3275C14.9327 13.3275 13.9157 12.9063 13.1659 12.1565C12.4161 11.4066 11.9948 10.3897 11.9948 9.32926C11.9948 8.26885 12.4161 7.25188 13.1659 6.50206C13.9157 5.75224 14.9327 5.33099 15.9931 5.33099C17.0535 5.33099 18.0704 5.75224 18.8203 6.50206C19.5701 7.25188 19.9913 8.26885 19.9913 9.32926ZM27.9879 13.3275C27.9879 14.0345 27.707 14.7124 27.2071 15.2123C26.7073 15.7122 26.0293 15.993 25.3223 15.993C24.6154 15.993 23.9374 15.7122 23.4375 15.2123C22.9377 14.7124 22.6568 14.0345 22.6568 13.3275C22.6568 12.6206 22.9377 11.9426 23.4375 11.4427C23.9374 10.9428 24.6154 10.662 25.3223 10.662C26.0293 10.662 26.7073 10.9428 27.2071 11.4427C27.707 11.9426 27.9879 12.6206 27.9879 13.3275ZM9.3293 13.3275C9.3293 14.0345 9.04847 14.7124 8.54859 15.2123C8.04871 15.7122 7.37073 15.993 6.66379 15.993C5.95685 15.993 5.27887 15.7122 4.77899 15.2123C4.27911 14.7124 3.99828 14.0345 3.99828 13.3275C3.99828 12.6206 4.27911 11.9426 4.77899 11.4427C5.27887 10.9428 5.95685 10.662 6.66379 10.662C7.37073 10.662 8.04871 10.9428 8.54859 11.4427C9.04847 11.9426 9.3293 12.6206 9.3293 13.3275Z"
      stroke="currentColor"
      strokeWidth="2.66551"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeroSuccessRateIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.9946 15.9931L14.6601 18.6586L19.9911 13.3276M27.9876 15.9931C27.9876 17.5683 27.6774 19.128 27.0746 20.5833C26.4718 22.0386 25.5882 23.3609 24.4744 24.4747C23.3606 25.5885 22.0383 26.472 20.583 27.0748C19.1278 27.6776 17.568 27.9879 15.9928 27.9879C14.4177 27.9879 12.8579 27.6776 11.4026 27.0748C9.94735 26.472 8.62506 25.5885 7.51124 24.4747C6.39742 23.3609 5.51389 22.0386 4.9111 20.5833C4.3083 19.128 3.99805 17.5683 3.99805 15.9931C3.99805 12.8119 5.26178 9.76094 7.51124 7.51148C9.7607 5.26202 12.8116 3.99829 15.9928 3.99829C19.174 3.99829 22.225 5.26202 24.4744 7.51148C26.7239 9.76094 27.9876 12.8119 27.9876 15.9931Z"
      stroke="currentColor"
      strokeWidth="2.66551"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AboutShieldIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="20" cy="20" r="20" fill="url(#aboutShieldGradient)" />
    <path
      d="M20 10.5L28 13.5V19.5C28 24.47 24.6 29.11 20 30.5C15.4 29.11 12 24.47 12 19.5V13.5L20 10.5Z"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.8 20L19.1 22.3L23.6 17.8"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="aboutShieldGradient"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3857A5" />
        <stop offset="1" stopColor="#0D1C4C" />
      </linearGradient>
    </defs>
  </svg>
);

export const AboutCheckIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5 8.1L6.3 10.9L12.5 4.9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ContactEmailIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="2.5" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 5.5L10 10.5L16.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ContactPhoneIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.5667 12.95L11.75 14.7667C9.01667 13.4 6.6 10.9834 5.23333 8.25003L7.05 6.43337C7.26667 6.2167 7.35 5.90003 7.26667 5.6167L6.68333 3.6167C6.58333 3.28337 6.28333 3.05003 5.93333 3.05003H3.08333C2.7 3.05003 2.38333 3.3667 2.4 3.75003C2.53333 9.78337 7.21667 14.4667 13.25 14.6C13.6333 14.6167 13.95 14.3 13.95 13.9167V11.0667C13.95 10.7167 13.7167 10.4167 13.3833 10.3167L11.3833 9.73337C11.1 9.65003 10.7833 9.73337 10.5667 9.95003"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ContactLocationIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 17.5C12.8 14.7 15.2 11.75 15.2 8.2C15.2 5.32 12.88 3 10 3C7.12 3 4.8 5.32 4.8 8.2C4.8 11.75 7.2 14.7 10 17.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="8.2" r="1.8" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const ContactClockIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 6V10L12.8 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChallengeDollarIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 2.66675V29.3334"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.6668 6.66675H12.6668C11.4297 6.66675 10.2432 7.15822 9.36843 8.03301C8.49364 8.9078 8.0022 10.0943 8.0022 11.3314C8.0022 12.5685 8.49364 13.755 9.36843 14.6298C10.2432 15.5046 11.4297 15.9961 12.6668 15.9961H19.3334C20.5706 15.9961 21.757 16.4875 22.6318 17.3623C23.5066 18.2371 23.9981 19.4236 23.9981 20.6607C23.9981 21.8979 23.5066 23.0843 22.6318 23.9591C21.757 24.8339 20.5706 25.3254 19.3334 25.3254H8.0022"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChallengeAlertCircleIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 29.3334C23.3638 29.3334 29.3334 23.3639 29.3334 16.0001C29.3334 8.63628 23.3638 2.66675 16 2.66675C8.63622 2.66675 2.66669 8.63628 2.66669 16.0001C2.66669 23.3639 8.63622 29.3334 16 29.3334Z"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 10.6667V16"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 21.3333H16.0133"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChallengeClockIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 29.3334C23.3638 29.3334 29.3334 23.3639 29.3334 16.0001C29.3334 8.63628 23.3638 2.66675 16 2.66675C8.63622 2.66675 2.66669 8.63628 2.66669 16.0001C2.66669 23.3639 8.63622 29.3334 16 29.3334Z"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8V16L21.3333 18.6667"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChallengeShieldAlertIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.6666 17.3333C26.6666 24 22 27.3333 16.4533 29.2667C16.1666 29.3667 15.8533 29.3667 15.56 29.2667C10 27.3333 5.33331 24 5.33331 17.3333V8C5.33331 7.64638 5.47378 7.30724 5.72383 7.05719C5.97388 6.80714 6.31302 6.66667 6.66665 6.66667C9.33331 6.66667 12.6666 5.06667 14.9866 3.04C15.2689 2.79763 15.6284 2.66431 16 2.66431C16.3715 2.66431 16.731 2.79763 17.0133 3.04C19.3333 5.06667 22.6666 6.66667 25.3333 6.66667C25.6869 6.66667 26.0261 6.80714 26.2761 7.05719C26.5262 7.30724 26.6666 7.64638 26.6666 8V17.3333Z"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 10.6667V16"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 21.3333H16.0133"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CoreTransparencyIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.6666 17.3333C26.6666 24 22 27.3333 16.4533 29.2667C16.1666 29.3667 15.8533 29.3667 15.56 29.2667C10 27.3333 5.33331 24 5.33331 17.3333V8C5.33331 7.64638 5.47378 7.30724 5.72383 7.05719C5.97388 6.80714 6.31302 6.66667 6.66665 6.66667C9.33331 6.66667 12.6666 5.06667 14.9866 3.04C15.2689 2.79763 15.6284 2.66431 16 2.66431C16.3715 2.66431 16.731 2.79763 17.0133 3.04C19.3333 5.06667 22.6666 6.66667 25.3333 6.66667C25.6869 6.66667 26.0261 6.80714 26.2761 7.05719C26.5262 7.30724 26.6666 7.64638 26.6666 8V17.3333Z"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CoreMarketPricingIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.3334 28V25.3333C21.3334 23.9194 20.7715 22.5631 19.7717 21.5633C18.7718 20.5635 17.4155 20.0017 16.0017 20.0017H8.00166C6.58779 20.0017 5.23149 20.5635 4.23165 21.5633C3.23181 22.5631 2.67004 23.9194 2.67004 25.3333V28"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0017 14.6667C14.947 14.6667 17.335 12.2787 17.335 9.33333C17.335 6.38798 14.947 4 12.0017 4C9.05631 4 6.66833 6.38798 6.66833 9.33333C6.66833 12.2787 9.05631 14.6667 12.0017 14.6667Z"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.3334 28V25.3333C29.3325 24.1518 28.9388 23.0042 28.2144 22.0705C27.4899 21.1367 26.4761 20.4701 25.3317 20.175"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.3334 4.17334C22.4812 4.46674 23.4987 5.13362 24.2254 6.06889C24.9521 7.00417 25.3464 8.15476 25.3464 9.33917C25.3464 10.5236 24.9521 11.6742 24.2254 12.6094C23.4987 13.5447 22.4812 14.2116 21.3334 14.505"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CorePerformanceIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M29.3334 9.33325L18.0017 20.665L11.335 13.9983L2.66833 22.665"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.3334 9.33325H29.3334V17.3333"
      stroke="currentColor"
      strokeWidth="2.6655"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SecurePaymentsLockIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31.6667 18.3333H8.33333C6.49238 18.3333 5 19.8257 5 21.6667V33.3333C5 35.1743 6.49238 36.6667 8.33333 36.6667H31.6667C33.5076 36.6667 35 35.1743 35 33.3333V21.6667C35 19.8257 33.5076 18.3333 31.6667 18.3333Z"
      stroke="currentColor"
      strokeWidth="3.3319"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.6667 18.3333V11.6667C11.6667 9.45653 12.5446 7.33691 14.1074 5.77411C15.6702 4.21131 17.7899 3.33333 20 3.33333C22.2101 3.33333 24.3298 4.21131 25.8926 5.77411C27.4554 7.33691 28.3333 9.45653 28.3333 11.6667V18.3333"
      stroke="currentColor"
      strokeWidth="3.3319"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Admin sidebar specific icons (from UI implementation guide)
export const AdminDashboardNavIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7.49335 2.49805H3.3306C2.87079 2.49805 2.49805 2.87079 2.49805 3.3306V9.15844C2.49805 9.61825 2.87079 9.99099 3.3306 9.99099H7.49335C7.95315 9.99099 8.3259 9.61825 8.3259 9.15844V3.3306C8.3259 2.87079 7.95315 2.49805 7.49335 2.49805Z" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.6515 2.49805H12.4888C12.029 2.49805 11.6562 2.87079 11.6562 3.3306V5.82825C11.6562 6.28805 12.029 6.6608 12.4888 6.6608H16.6515C17.1114 6.6608 17.4841 6.28805 17.4841 5.82825V3.3306C17.4841 2.87079 17.1114 2.49805 16.6515 2.49805Z" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.6515 9.99023H12.4888C12.029 9.99023 11.6562 10.363 11.6562 10.8228V16.6506C11.6562 17.1104 12.029 17.4832 12.4888 17.4832H16.6515C17.1114 17.4832 17.4841 17.1104 17.4841 16.6506V10.8228C17.4841 10.363 17.1114 9.99023 16.6515 9.99023Z" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.49335 13.3203H3.3306C2.87079 13.3203 2.49805 13.6931 2.49805 14.1529V16.6505C2.49805 17.1103 2.87079 17.4831 3.3306 17.4831H7.49335C7.95315 17.4831 8.3259 17.1103 8.3259 16.6505V14.1529C8.3259 13.6931 7.95315 13.3203 7.49335 13.3203Z" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AdminChatNavIcon = ({ className, ...props }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.4839 12.4886C17.4839 12.9303 17.3085 13.3538 16.9962 13.666C16.684 13.9783 16.2605 14.1537 15.8188 14.1537H5.82825L2.49805 17.4839V4.16315C2.49805 3.72153 2.67348 3.29801 2.98574 2.98574C3.29801 2.67348 3.72153 2.49805 4.16315 2.49805H15.8188C16.2605 2.49805 16.684 2.67348 16.9962 2.98574C17.3085 3.29801 17.4839 3.72153 17.4839 4.16315V12.4886Z" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HeaderNotificationBellIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.54688 17.4835C8.69302 17.7366 8.90322 17.9468 9.15634 18.0929C9.40946 18.2391 9.69658 18.316 9.98885 18.316C10.2811 18.316 10.5682 18.2391 10.8214 18.0929C11.0745 17.9468 11.2847 17.7366 11.4308 17.4835"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.71752 12.7596C2.60876 12.8788 2.53698 13.027 2.51093 13.1863C2.48487 13.3455 2.50565 13.5089 2.57075 13.6566C2.63584 13.8042 2.74244 13.9298 2.87758 14.018C3.01272 14.1062 3.17058 14.1532 3.33194 14.1533H16.6527C16.8141 14.1533 16.972 14.1065 17.1072 14.0185C17.2424 13.9305 17.3492 13.8051 17.4144 13.6575C17.4797 13.51 17.5007 13.3466 17.4748 13.1874C17.449 13.0281 17.3774 12.8798 17.2688 12.7604C16.1615 11.619 14.9876 10.406 14.9876 6.66034C14.9876 5.3355 14.4613 4.06493 13.5245 3.12813C12.5877 2.19133 11.3172 1.66504 9.99234 1.66504C8.6675 1.66504 7.39693 2.19133 6.46013 3.12813C5.52333 4.06493 4.99704 5.3355 4.99704 6.66034C4.99704 10.406 3.82231 11.619 2.71752 12.7596Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ListCheckBadgeIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.54688 17.4835C8.69302 17.7366 8.90322 17.9468 9.15634 18.0929C9.40946 18.2391 9.69658 18.316 9.98885 18.316C10.2811 18.316 10.5682 18.2391 10.8214 18.0929C11.0745 17.9468 11.2847 17.7366 11.4308 17.4835"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.71752 12.7596C2.60876 12.8788 2.53698 13.027 2.51093 13.1863C2.48487 13.3455 2.50565 13.5089 2.57075 13.6566C2.63584 13.8042 2.74244 13.9298 2.87758 14.018C3.01272 14.1062 3.17058 14.1532 3.33194 14.1533H16.6527C16.8141 14.1533 16.972 14.1065 17.1072 14.0185C17.2424 13.9305 17.3492 13.8051 17.4144 13.6575C17.4797 13.51 17.5007 13.3466 17.4748 13.1874C17.449 13.0281 17.3774 12.8798 17.2688 12.7604C16.1615 11.619 14.9876 10.406 14.9876 6.66034C14.9876 5.3355 14.4613 4.06493 13.5245 3.12813C12.5877 2.19133 11.3172 1.66504 9.99234 1.66504C8.6675 1.66504 7.39693 2.19133 6.46013 3.12813C5.52333 4.06493 4.99704 5.3355 4.99704 6.66034C4.99704 10.406 3.82231 11.619 2.71752 12.7596Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const RecruiterEarningsTrendIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.9903 6.99707L13.494 15.4934L8.4962 10.4956L1.99902 16.9927"
      stroke="currentColor"
      strokeWidth="1.9991"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.9932 6.99707H21.9906V12.9945"
      stroke="currentColor"
      strokeWidth="1.9991"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ComparisonCheckIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.3276 3.99805L5.99741 11.3282L2.66553 7.99631"
      stroke="currentColor"
      strokeWidth="1.3328"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ComparisonCrossIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.9946 3.99805L3.99805 11.9946"
      stroke="currentColor"
      strokeWidth="1.3328"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.99805 3.99805L11.9946 11.9946"
      stroke="currentColor"
      strokeWidth="1.3328"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const TrustQualityAssuranceIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.055 15.0371L19.8224 24.9834C19.8422 25.1005 19.8257 25.2209 19.7753 25.3284C19.7248 25.4359 19.6427 25.5255 19.54 25.5851C19.4372 25.6447 19.3188 25.6715 19.2004 25.662C19.082 25.6525 18.9693 25.607 18.8774 25.5317L14.7011 22.3971C14.4995 22.2465 14.2545 22.1651 14.0029 22.1651C13.7512 22.1651 13.5063 22.2465 13.3047 22.3971L9.12132 25.5305C9.02953 25.6057 8.91701 25.6511 8.79875 25.6606C8.6805 25.6702 8.56214 25.6435 8.45947 25.584C8.3568 25.5246 8.2747 25.4352 8.22412 25.3279C8.17354 25.2206 8.15689 25.1004 8.17639 24.9834L9.94259 15.0371"
      stroke="currentColor"
      strokeWidth="2.3332"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.999 16.332C17.8647 16.332 20.9985 13.1982 20.9985 9.3325C20.9985 5.46679 17.8647 2.33301 13.999 2.33301C10.1333 2.33301 6.99951 5.46679 6.99951 9.3325C6.99951 13.1982 10.1333 16.332 13.999 16.332Z"
      stroke="currentColor"
      strokeWidth="2.3332"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const TrustRatingSystemIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.6652 24.4985V22.1654C18.6652 20.9278 18.1735 19.7409 17.2984 18.8658C16.4233 17.9907 15.2364 17.499 13.9988 17.499H6.99934C5.76175 17.499 4.57485 17.9907 3.69974 18.8658C2.82464 19.7409 2.33301 20.9278 2.33301 22.1654V24.4985"
      stroke="currentColor"
      strokeWidth="2.3332"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4993 12.8327C13.0765 12.8327 15.1657 10.7435 15.1657 8.16633C15.1657 5.58919 13.0765 3.5 10.4993 3.5C7.92219 3.5 5.83301 5.58919 5.83301 8.16633C5.83301 10.7435 7.92219 12.8327 10.4993 12.8327Z"
      stroke="currentColor"
      strokeWidth="2.3332"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.6655 12.8322L20.9987 15.1654L25.665 10.499"
      stroke="currentColor"
      strokeWidth="2.3332"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const TrustVerifiedRecruitersIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.3318 15.1659C23.3318 20.9988 19.2488 23.9153 14.3958 25.6068C14.1417 25.693 13.8656 25.6888 13.6142 25.5952C8.74954 23.9153 4.6665 20.9988 4.6665 15.1659V6.99986C4.6665 6.69046 4.78941 6.39374 5.00819 6.17496C5.22696 5.95619 5.52369 5.83328 5.83309 5.83328C8.16625 5.83328 11.0827 4.43338 13.1126 2.66018C13.3597 2.44902 13.6741 2.33301 13.9992 2.33301C14.3242 2.33301 14.6386 2.44902 14.8858 2.66018C16.9273 4.44505 19.8321 5.83328 22.1652 5.83328C22.4746 5.83328 22.7714 5.95619 22.9901 6.17496C23.2089 6.39374 23.3318 6.69046 23.3318 6.99986V15.1659Z"
      stroke="currentColor"
      strokeWidth="2.3332"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const TrustComplianceReadyIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.4989 2.33301H6.99967C6.38087 2.33301 5.78742 2.57882 5.34987 3.01638C4.91232 3.45393 4.6665 4.04738 4.6665 4.66617V23.3315C4.6665 23.9503 4.91232 24.5437 5.34987 24.9813C5.78742 25.4188 6.38087 25.6646 6.99967 25.6646H20.9987C21.6174 25.6646 22.2109 25.4188 22.6484 24.9813C23.086 24.5437 23.3318 23.9503 23.3318 23.3315V8.16592L17.4989 2.33301Z"
      stroke="currentColor"
      strokeWidth="2.3332"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.332 2.33301V6.99934C16.332 7.61813 16.5778 8.21158 17.0154 8.64913C17.453 9.08668 18.0464 9.3325 18.6652 9.3325H23.3315"
      stroke="currentColor"
      strokeWidth="2.3332"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.499 17.4992L12.8322 19.8323L17.4985 15.166"
      stroke="currentColor"
      strokeWidth="2.3332"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const CtaFreeStartIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9948 21.5911C14.5397 21.5911 16.9805 20.5801 18.7801 18.7805C20.5796 16.981 21.5906 14.5402 21.5906 11.9953C21.5906 9.45028 20.5796 7.00954 18.7801 5.20997C16.9805 3.4104 14.5397 2.39941 11.9948 2.39941C9.44979 2.39941 7.00905 3.4104 5.20948 5.20997C3.40991 7.00954 2.39893 9.45028 2.39893 11.9953C2.39893 14.5402 3.40991 16.981 5.20948 18.7805C7.00905 20.5801 9.44979 21.5911 11.9948 21.5911ZM16.4412 10.4443C16.6597 10.2181 16.7806 9.91511 16.7779 9.60061C16.7752 9.28611 16.649 8.98527 16.4266 8.76287C16.2042 8.54048 15.9034 8.41433 15.5889 8.4116C15.2744 8.40887 14.9714 8.52977 14.7452 8.74826L10.7953 12.6982L9.24436 11.1472C9.01813 10.9287 8.71514 10.8078 8.40064 10.8106C8.08614 10.8133 7.7853 10.9394 7.56291 11.1618C7.34051 11.3842 7.21436 11.6851 7.21163 11.9996C7.2089 12.3141 7.3298 12.6171 7.54829 12.8433L9.94725 15.2422C10.1722 15.4671 10.4772 15.5934 10.7953 15.5934C11.1133 15.5934 11.4184 15.4671 11.6433 15.2422L16.4412 10.4443Z"
      fill="currentColor"
    />
  </svg>
);

export const CtaSecurePaymentsIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.9946 14.9938V16.993M5.99718 20.9912H17.992C18.5222 20.9912 19.0307 20.7806 19.4056 20.4057C19.7805 20.0308 19.9911 19.5223 19.9911 18.9921V12.9947C19.9911 12.4645 19.7805 11.956 19.4056 11.5811C19.0307 11.2062 18.5222 10.9956 17.992 10.9956H5.99718C5.46698 10.9956 4.95849 11.2062 4.58358 11.5811C4.20867 11.956 3.99805 12.4645 3.99805 12.9947V18.9921C3.99805 19.5223 4.20867 20.0308 4.58358 20.4057C4.95849 20.7806 5.46698 20.9912 5.99718 20.9912ZM15.9928 10.9956V6.99729C15.9928 5.93688 15.5716 4.91991 14.8218 4.17009C14.072 3.42027 13.055 2.99902 11.9946 2.99902C10.9342 2.99902 9.9172 3.42027 9.16738 4.17009C8.41756 4.91991 7.99631 5.93688 7.99631 6.99729V10.9956H15.9928Z"
      stroke="currentColor"
      strokeWidth="1.9991"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CtaInstantSetupIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.9941 9.99599V2.99902L3.99805 13.9943H10.995V20.9912L19.9911 9.99599H12.9941Z"
      stroke="currentColor"
      strokeWidth="1.9991"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const HeaderLanguageIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.33203 5.33105L7.33029 9.32932"
      stroke="currentColor"
      strokeWidth="1.33275"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.66406 9.3293L6.66233 5.33104L7.99508 3.33191"
      stroke="currentColor"
      strokeWidth="1.33275"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.33203 3.33191H9.32856"
      stroke="currentColor"
      strokeWidth="1.33275"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.66406 1.33276H5.33044"
      stroke="currentColor"
      strokeWidth="1.33275"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6599 14.6602L11.328 7.99646L7.99609 14.6602"
      stroke="currentColor"
      strokeWidth="1.33275"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.32812 11.9948H13.3264"
      stroke="currentColor"
      strokeWidth="1.33275"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ForCompaniesRoleIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.3206 16.6509V3.33014C13.3206 2.88853 13.1451 2.465 12.8329 2.15274C12.5206 1.84047 12.0971 1.66504 11.6555 1.66504H8.32526C7.88364 1.66504 7.46012 1.84047 7.14785 2.15274C6.83559 2.465 6.66016 2.88853 6.66016 3.33014V16.6509"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6509 4.99512H3.33014C2.41053 4.99512 1.66504 5.74061 1.66504 6.66022V14.9857C1.66504 15.9053 2.41053 16.6508 3.33014 16.6508H16.6509C17.5705 16.6508 18.316 15.9053 18.316 14.9857V6.66022C18.316 5.74061 17.5705 4.99512 16.6509 4.99512Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DashboardCardUsersIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.3217 17.4836V15.8185C13.3217 14.9353 12.9709 14.0882 12.3463 13.4637C11.7218 12.8391 10.8747 12.4883 9.99151 12.4883H4.99621C4.11299 12.4883 3.26594 12.8391 2.64141 13.4637C2.01687 14.0882 1.66602 14.9353 1.66602 15.8185V17.4836"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.49231 9.15808C9.33153 9.15808 10.8225 7.6671 10.8225 5.82788C10.8225 3.98866 9.33153 2.49768 7.49231 2.49768C5.65309 2.49768 4.16211 3.98866 4.16211 5.82788C4.16211 7.6671 5.65309 9.15808 7.49231 9.15808Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.316 17.4835V15.8184C18.3155 15.0805 18.0699 14.3637 17.6178 13.7806C17.1657 13.1974 16.5328 12.7809 15.8184 12.5964"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3203 2.60583C14.0367 2.78925 14.6716 3.20585 15.125 3.78998C15.5784 4.3741 15.8245 5.09252 15.8245 5.83197C15.8245 6.57141 15.5784 7.28983 15.125 7.87395C14.6716 8.45808 14.0367 8.87468 13.3203 9.0581"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DashboardCardDealsIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.317 5.82788L11.2403 12.9046L7.07759 8.7418L1.66602 14.1534"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3203 5.82788H18.3156V10.8232"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DashboardCardRevenueIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.99023 1.66504V18.316"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1541 4.16272H7.91002C7.1372 4.16272 6.39603 4.46972 5.84956 5.01619C5.3031 5.56266 4.99609 6.30382 4.99609 7.07664C4.99609 7.84946 5.3031 8.59063 5.84956 9.1371C6.39603 9.68357 7.1372 9.99057 7.91002 9.99057H12.0728C12.8456 9.99057 13.5868 10.2976 14.1332 10.844C14.6797 11.3905 14.9867 12.1317 14.9867 12.9045C14.9867 13.6773 14.6797 14.4185 14.1332 14.9649C13.5868 15.5114 12.8456 15.8184 12.0728 15.8184H4.99609"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DashboardCardEscrowIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.6509 10.8231C16.6509 14.9858 13.737 17.0672 10.2735 18.2744C10.0922 18.3359 9.89518 18.3329 9.71573 18.2661C6.244 17.0672 3.33008 14.9858 3.33008 10.8231V4.99525C3.33008 4.77444 3.41779 4.56268 3.57393 4.40654C3.73006 4.25041 3.94182 4.1627 4.16263 4.1627C5.82773 4.1627 7.9091 3.16364 9.35774 1.89816C9.53412 1.74747 9.75849 1.66467 9.99048 1.66467C10.2225 1.66467 10.4468 1.74747 10.6232 1.89816C12.0802 3.17196 14.1532 4.1627 15.8183 4.1627C16.0391 4.1627 16.2509 4.25041 16.407 4.40654C16.5632 4.56268 16.6509 4.77444 16.6509 4.99525V10.8231Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DashboardCardAlertIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.99151 18.316C14.5896 18.316 18.317 14.5886 18.317 9.99054C18.317 5.39249 14.5896 1.66504 9.99151 1.66504C5.39347 1.66504 1.66602 5.39249 1.66602 9.99054C1.66602 14.5886 5.39347 18.316 9.99151 18.316Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99023 6.6604V9.9906"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99023 13.3208H9.99856"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TopAgenciesHeaderIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5956 1.91067C9.63208 1.83696 9.68844 1.77491 9.75832 1.73153C9.8282 1.68815 9.90881 1.66516 9.99106 1.66516C10.0733 1.66516 10.1539 1.68815 10.2238 1.73153C10.2937 1.77491 10.35 1.83696 10.3865 1.91067L12.3097 5.80618C12.4364 6.06257 12.6234 6.2844 12.8547 6.45261C13.086 6.62082 13.3547 6.7304 13.6376 6.77193L17.9386 7.40134C18.0201 7.41315 18.0966 7.44752 18.1596 7.50058C18.2226 7.55364 18.2695 7.62326 18.2949 7.70156C18.3204 7.77987 18.3234 7.86374 18.3037 7.94369C18.284 8.02364 18.2423 8.09648 18.1833 8.15396L15.0729 11.1828C14.8678 11.3827 14.7143 11.6294 14.6257 11.9018C14.5371 12.1742 14.516 12.464 14.5643 12.7463L15.2986 17.0256C15.313 17.1071 15.3042 17.1909 15.2732 17.2676C15.2422 17.3443 15.1903 17.4108 15.1233 17.4594C15.0564 17.508 14.9772 17.5368 14.8947 17.5425C14.8121 17.5483 14.7297 17.5307 14.6567 17.4918L10.812 15.4704C10.5586 15.3374 10.2768 15.2679 9.99064 15.2679C9.70451 15.2679 9.42266 15.3374 9.16933 15.4704L5.32545 17.4918C5.25246 17.5305 5.17009 17.5479 5.08772 17.542C5.00534 17.5362 4.92626 17.5073 4.85947 17.4587C4.79268 17.4101 4.74086 17.3438 4.70991 17.2672C4.67896 17.1907 4.67011 17.107 4.68439 17.0256L5.41786 12.7471C5.46631 12.4647 5.44532 12.1747 5.3567 11.9021C5.26808 11.6296 5.11449 11.3827 4.90917 11.1828L1.79877 8.1548C1.73932 8.09738 1.69719 8.02442 1.67719 7.94422C1.65718 7.86403 1.6601 7.77983 1.68561 7.70122C1.71112 7.6226 1.7582 7.55273 1.82148 7.49957C1.88476 7.4464 1.9617 7.41208 2.04354 7.40051L6.34366 6.77193C6.62694 6.73072 6.89596 6.62129 7.12757 6.45306C7.35919 6.28482 7.54645 6.06283 7.67324 5.80618L9.5956 1.91067Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TopAgenciesRatingStarIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.75536 1.14604C5.77724 1.10182 5.81105 1.06461 5.85296 1.03859C5.89487 1.01257 5.94322 0.998779 5.99256 0.998779C6.04189 0.998779 6.09024 1.01257 6.13215 1.03859C6.17406 1.06461 6.20787 1.10182 6.22975 1.14604L7.38328 3.48255C7.45927 3.63634 7.57144 3.76939 7.71017 3.87028C7.8489 3.97117 8.01004 4.0369 8.17976 4.06181L10.7595 4.43932C10.8083 4.44641 10.8543 4.46703 10.892 4.49885C10.9298 4.53067 10.9579 4.57243 10.9732 4.6194C10.9885 4.66637 10.9903 4.71667 10.9785 4.76463C10.9666 4.81258 10.9416 4.85627 10.9063 4.89075L9.04066 6.70742C8.91762 6.82732 8.82557 6.97532 8.77242 7.13869C8.71927 7.30205 8.70661 7.47588 8.73555 7.64522L9.17599 10.2119C9.18461 10.2608 9.17934 10.3111 9.16075 10.3571C9.14217 10.4031 9.11103 10.4429 9.07089 10.4721C9.03075 10.5013 8.98322 10.5185 8.93373 10.522C8.88423 10.5254 8.83477 10.5149 8.79098 10.4916L6.48493 9.27913C6.33298 9.19935 6.16393 9.15766 5.99231 9.15766C5.82069 9.15766 5.65163 9.19935 5.49969 9.27913L3.19414 10.4916C3.15036 10.5148 3.10096 10.5252 3.05155 10.5217C3.00214 10.5182 2.9547 10.5009 2.91464 10.4717C2.87458 10.4426 2.8435 10.4028 2.82494 10.3569C2.80637 10.3109 2.80107 10.2607 2.80963 10.2119L3.24957 7.64572C3.27863 7.47631 3.26604 7.30236 3.21288 7.13889C3.15973 6.97543 3.0676 6.82735 2.94446 6.70742L1.07884 4.89125C1.04319 4.85681 1.01792 4.81304 1.00592 4.76495C0.993918 4.71685 0.995668 4.66634 1.01097 4.61919C1.02627 4.57204 1.05451 4.53013 1.09246 4.49824C1.13042 4.46635 1.17657 4.44577 1.22566 4.43883L3.80486 4.06181C3.97477 4.03709 4.13613 3.97145 4.27505 3.87055C4.41397 3.76964 4.52628 3.63649 4.60234 3.48255L5.75536 1.14604Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.998722"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RecentPayoutsIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.1513 8.32553C18.5316 10.1915 18.2606 12.1315 17.3836 13.8218C16.5066 15.5122 15.0766 16.8509 13.3321 17.6145C11.5876 18.3782 9.63404 18.5208 7.79716 18.0184C5.96029 17.516 4.35115 16.3991 3.2381 14.8539C2.12505 13.3087 1.57537 11.4286 1.68073 9.52722C1.78608 7.6258 2.5401 5.81796 3.81704 4.40519C5.09398 2.99242 6.81666 2.06012 8.69779 1.76375C10.5789 1.46738 12.5048 1.82486 14.1543 2.77658"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.49219 9.15805L9.98984 11.6557L18.3153 3.3302"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GlobalActivityIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.99151 18.3161C14.5896 18.3161 18.317 14.5886 18.317 9.9906C18.317 5.39255 14.5896 1.6651 9.99151 1.6651C5.39347 1.6651 1.66602 5.39255 1.66602 9.9906C1.66602 14.5886 5.39347 18.3161 9.99151 18.3161Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99036 1.6651C7.85256 3.90978 6.66016 6.8908 6.66016 9.9906C6.66016 13.0904 7.85256 16.0714 9.99036 18.3161C12.1281 16.0714 13.3206 13.0904 13.3206 9.9906C13.3206 6.8908 12.1281 3.90978 9.99036 1.6651Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.66602 9.9906H18.317"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RoleDashboardGridIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.49335 2.49768H3.3306C2.87079 2.49768 2.49805 2.87043 2.49805 3.33023V9.15808C2.49805 9.61788 2.87079 9.99063 3.3306 9.99063H7.49335C7.95315 9.99063 8.3259 9.61788 8.3259 9.15808V3.33023C8.3259 2.87043 7.95315 2.49768 7.49335 2.49768Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6506 2.49768H12.4878C12.028 2.49768 11.6553 2.87043 11.6553 3.33023V5.82788C11.6553 6.28768 12.028 6.66043 12.4878 6.66043H16.6506C17.1104 6.66043 17.4831 6.28768 17.4831 5.82788V3.33023C17.4831 2.87043 17.1104 2.49768 16.6506 2.49768Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6506 9.9906H12.4878C12.028 9.9906 11.6553 10.3633 11.6553 10.8232V16.651C11.6553 17.1108 12.028 17.4835 12.4878 17.4835H16.6506C17.1104 17.4835 17.4831 17.1108 17.4831 16.651V10.8232C17.4831 10.3633 17.1104 9.9906 16.6506 9.9906Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.49335 13.3208H3.3306C2.87079 13.3208 2.49805 13.6935 2.49805 14.1534V16.651C2.49805 17.1108 2.87079 17.4835 3.3306 17.4835H7.49335C7.95315 17.4835 8.3259 17.1108 8.3259 16.651V14.1534C8.3259 13.6935 7.95315 13.3208 7.49335 13.3208Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RoleBriefcaseIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.3206 16.6509V3.33014C13.3206 2.88853 13.1451 2.465 12.8329 2.15274C12.5206 1.84047 12.0971 1.66504 11.6555 1.66504H8.32526C7.88364 1.66504 7.46012 1.84047 7.14785 2.15274C6.83559 2.465 6.66016 2.88853 6.66016 3.33014V16.6509"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6509 4.99524H3.33014C2.41053 4.99524 1.66504 5.74073 1.66504 6.66034V14.9858C1.66504 15.9054 2.41053 16.6509 3.33014 16.6509H16.6509C17.5705 16.6509 18.316 15.9054 18.316 14.9858V6.66034C18.316 5.74073 17.5705 4.99524 16.6509 4.99524Z"
      stroke="currentColor"
      strokeWidth="1.6651"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RoleCandidatesIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.3203 9.15802L14.9854 10.8231L18.3156 7.49292" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.3207 17.4836V15.8185C13.3207 14.9353 12.9699 14.0882 12.3453 13.4637C11.7208 12.8391 10.8738 12.4883 9.99054 12.4883H4.99524C4.11201 12.4883 3.26497 12.8391 2.64043 13.4637C2.0159 14.0882 1.66504 14.9353 1.66504 15.8185V17.4836" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.49328 9.15808C9.3325 9.15808 10.8235 7.6671 10.8235 5.82788C10.8235 3.98866 9.3325 2.49768 7.49328 2.49768C5.65407 2.49768 4.16309 3.98866 4.16309 5.82788C4.16309 7.6671 5.65407 9.15808 7.49328 9.15808Z" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const RoleProfileIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.8188 17.4836V15.8185C15.8188 14.9353 15.4679 14.0882 14.8434 13.4637C14.2189 12.8391 13.3718 12.4883 12.4886 12.4883H7.49328C6.61006 12.4883 5.76301 12.8391 5.13848 13.4637C4.51395 14.0882 4.16309 14.9353 4.16309 15.8185V17.4836" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.99036 9.15808C11.8296 9.15808 13.3206 7.6671 13.3206 5.82788C13.3206 3.98866 11.8296 2.49768 9.99036 2.49768C8.15114 2.49768 6.66016 3.98866 6.66016 5.82788C6.66016 7.6671 8.15114 9.15808 9.99036 9.15808Z" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const RoleChatIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15.75 11.25C15.75 11.6478 15.592 12.0294 15.3107 12.3107C15.0294 12.592 14.6478 12.75 14.25 12.75H5.25L2.25 15.75V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V11.25Z" stroke="currentColor" strokeWidth="1.18278" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const RoleCalendarIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.66016 1.66504V4.99524" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.3203 1.66504V4.99524" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.8188 3.3302H4.16315C3.24354 3.3302 2.49805 4.07569 2.49805 4.9953V16.651C2.49805 17.5706 3.24354 18.3161 4.16315 18.3161H15.8188C16.7385 18.3161 17.4839 17.5706 17.4839 16.651V4.9953C17.4839 4.07569 16.7385 3.3302 15.8188 3.3302Z" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.49805 8.3255H17.4839" stroke="currentColor" strokeWidth="1.6651" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const OpenExternalIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.83203 5.83215H14.1637V14.1638"
      stroke="currentColor"
      strokeWidth="1.66633"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83203 14.1638L14.1637 5.83215"
      stroke="currentColor"
      strokeWidth="1.66633"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const OverallScoreBoltIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.29539 11.5327C3.13949 11.5332 2.98664 11.4895 2.8546 11.4067C2.72256 11.3238 2.61675 11.2051 2.54945 11.0645C2.48216 10.9239 2.45615 10.767 2.47444 10.6122C2.49274 10.4574 2.55458 10.3109 2.6528 10.1899L10.8087 1.78685C10.8699 1.71623 10.9532 1.66851 11.0451 1.65152C11.137 1.63453 11.2319 1.64928 11.3143 1.69335C11.3967 1.73742 11.4616 1.80818 11.4985 1.89404C11.5354 1.97989 11.542 2.07572 11.5172 2.16581L9.93543 7.12524C9.88879 7.25007 9.87312 7.38435 9.88978 7.51657C9.90644 7.64878 9.95492 7.77498 10.0311 7.88434C10.1072 7.9937 10.2088 8.08296 10.327 8.14445C10.4452 8.20595 10.5766 8.23784 10.7098 8.23741H16.4766C16.6325 8.23688 16.7854 8.28059 16.9174 8.36347C17.0494 8.44635 17.1552 8.565 17.2225 8.70563C17.2898 8.84625 17.3158 9.00309 17.2976 9.15791C17.2793 9.31273 17.2174 9.45918 17.1192 9.58025L8.96331 17.9833C8.90213 18.0539 8.81876 18.1016 8.72689 18.1186C8.63501 18.1356 8.54009 18.1208 8.4577 18.0768C8.37532 18.0327 8.31036 17.9619 8.27349 17.8761C8.23663 17.7902 8.23004 17.6944 8.25482 17.6043L9.83657 12.6449C9.88321 12.5201 9.89887 12.3858 9.88222 12.2536C9.86556 12.1213 9.81708 11.9951 9.74093 11.8858C9.66478 11.7764 9.56324 11.6872 9.44502 11.6257C9.3268 11.5642 9.19543 11.5323 9.06217 11.5327H3.29539Z"
      stroke="currentColor"
      strokeWidth="1.64765"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RecruiterVacancyRoleIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M2.96777 10.8942V1.98118C2.96777 1.71852 3.07201 1.46663 3.25754 1.28091C3.44308 1.09518 3.69472 0.990845 3.9571 0.990845H7.91441C8.1768 0.990845 8.42844 1.09518 8.61397 1.28091C8.79951 1.46663 8.90374 1.71852 8.90374 1.98118V10.8942H2.96777Z" stroke="currentColor" strokeWidth="0.98983" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.96791 5.94244H1.97859C1.7162 5.94244 1.46456 6.04678 1.27903 6.23251C1.09349 6.41823 0.989258 6.67012 0.989258 6.93278V9.90377C0.989258 10.1664 1.09349 10.4183 1.27903 10.604C1.46456 10.7898 1.7162 10.8941 1.97859 10.8941H2.96791" stroke="currentColor" strokeWidth="0.98983" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.9043 4.45709H9.89362C10.156 4.45709 10.4076 4.56143 10.5932 4.74715C10.7787 4.93288 10.883 5.18477 10.883 5.44742V9.90392C10.883 10.1666 10.7787 10.4185 10.5932 10.6042C10.4076 10.7899 10.156 10.8943 9.89362 10.8943H8.9043" stroke="currentColor" strokeWidth="0.98983" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.94629 2.97168H6.92419" stroke="currentColor" strokeWidth="0.98983" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.94629 4.95154H6.92419" stroke="currentColor" strokeWidth="0.98983" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.94629 6.93237H6.92419" stroke="currentColor" strokeWidth="0.98983" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.94629 8.91321H6.92419" stroke="currentColor" strokeWidth="0.98983" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const RecruiterVacancyLocationIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.89314 4.95217C9.89314 7.42454 7.15319 9.9994 6.23312 10.7946C6.14741 10.8592 6.04307 10.894 5.93583 10.894C5.82858 10.894 5.72425 10.8592 5.63853 10.7946C4.71846 9.9994 1.97852 7.42454 1.97852 4.95217C1.97852 3.90156 2.39545 2.89398 3.13759 2.15109C3.87973 1.4082 4.88628 0.990845 5.93583 0.990845C6.98537 0.990845 7.99193 1.4082 8.73407 2.15109C9.47621 2.89398 9.89314 3.90156 9.89314 4.95217Z" stroke="currentColor" strokeWidth="0.98983" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.93614 6.43712C6.75573 6.43712 7.42013 5.77204 7.42013 4.95162C7.42013 4.13121 6.75573 3.46613 5.93614 3.46613C5.11655 3.46613 4.45215 4.13121 4.45215 4.95162C4.45215 5.77204 5.11655 6.43712 5.93614 6.43712Z" stroke="currentColor" strokeWidth="0.98983" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CandidateDownloadIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.23535 7.79493V1.55951" stroke="currentColor" strokeWidth="1.03924" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.9127 7.79468V9.87315C10.9127 10.1488 10.8032 10.4131 10.6083 10.608C10.4134 10.8029 10.1491 10.9124 9.87347 10.9124H2.59881C2.32318 10.9124 2.05885 10.8029 1.86396 10.608C1.66906 10.4131 1.55957 10.1488 1.55957 9.87315V7.79468" stroke="currentColor" strokeWidth="1.03924" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.6377 5.19629L6.23579 7.79438L8.83388 5.19629" stroke="currentColor" strokeWidth="1.03924" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CandidateViewIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1.03128 6.18076C0.989573 6.06841 0.989573 5.94481 1.03128 5.83245C1.43749 4.8475 2.12702 4.00534 3.01244 3.41274C3.89786 2.82014 4.9393 2.50378 6.00473 2.50378C7.07016 2.50378 8.1116 2.82014 8.99702 3.41274C9.88244 4.00534 10.572 4.8475 10.9782 5.83245C11.0199 5.94481 11.0199 6.06841 10.9782 6.18076C10.572 7.16572 9.88244 8.00788 8.99702 8.60048C8.1116 9.19308 7.07016 9.50943 6.00473 9.50943C4.9393 9.50943 3.89786 9.19308 3.01244 8.60048C2.12702 8.00788 1.43749 7.16572 1.03128 6.18076Z" stroke="currentColor" strokeWidth="1.0009" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.00525 7.50684C6.83442 7.50684 7.50659 6.83466 7.50659 6.00549C7.50659 5.17632 6.83442 4.50415 6.00525 4.50415C5.17608 4.50415 4.50391 5.17632 4.50391 6.00549C4.50391 6.83466 5.17608 7.50684 6.00525 7.50684Z" stroke="currentColor" strokeWidth="1.0009" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const RecruiterChevronRightIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.52246 11.1951L9.20393 7.46347L5.52246 3.73184"
      stroke="currentColor"
      strokeWidth="1.23549"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RecruiterInterviewTimeIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.52274 10.2627C8.06427 10.2627 10.1246 8.17432 10.1246 5.59817C10.1246 3.02202 8.06427 0.93364 5.52274 0.93364C2.98121 0.93364 0.920898 3.02202 0.920898 5.59817C0.920898 8.17432 2.98121 10.2627 5.52274 10.2627Z"
      stroke="currentColor"
      strokeWidth="0.926616"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.52246 2.79955V5.59827L7.3632 6.53117"
      stroke="currentColor"
      strokeWidth="0.926616"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RecruiterActivityPulseIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.8736 9.32961H14.9716C14.6364 9.32888 14.3102 9.43946 14.0428 9.64444C13.7755 9.84942 13.5818 10.1375 13.4913 10.4646L11.6889 16.9639C11.6773 17.0043 11.6531 17.0397 11.6199 17.065C11.5867 17.0902 11.5463 17.1038 11.5048 17.1038C11.4633 17.1038 11.423 17.0902 11.3898 17.065C11.3566 17.0397 11.3324 17.0043 11.3208 16.9639L7.08707 1.69533C7.07545 1.65495 7.05123 1.61949 7.01804 1.59426C6.98485 1.56903 6.94448 1.55539 6.90299 1.55539C6.86151 1.55539 6.82114 1.56903 6.78795 1.59426C6.75476 1.61949 6.73054 1.65495 6.71892 1.69533L4.91653 8.19457C4.82639 8.52043 4.63381 8.80758 4.36804 9.01243C4.10227 9.21728 3.77782 9.32864 3.44394 9.32961H1.53418"
      stroke="currentColor"
      strokeWidth="1.54436"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FormSelectChevronIcon = ({ className, ...props }) => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.9489 16.0075C12.7578 16.1985 12.4986 16.3059 12.2284 16.3059C11.9581 16.3059 11.699 16.1985 11.5079 16.0075L5.74276 10.2424C5.64543 10.1484 5.56779 10.0359 5.51438 9.91158C5.46097 9.78724 5.43285 9.65351 5.43168 9.5182C5.4305 9.38288 5.45629 9.24869 5.50753 9.12344C5.55877 8.9982 5.63444 8.88441 5.73013 8.78872C5.82582 8.69304 5.9396 8.61737 6.06485 8.56612C6.19009 8.51488 6.32429 8.4891 6.4596 8.49027C6.59492 8.49145 6.72865 8.51956 6.85298 8.57297C6.97732 8.62638 7.08977 8.70402 7.18378 8.80136L12.2284 13.8459L17.273 8.80136C17.4652 8.61572 17.7226 8.513 17.9898 8.51532C18.257 8.51764 18.5126 8.62482 18.7016 8.81377C18.8905 9.00272 18.9977 9.25833 19 9.52553C19.0023 9.79274 18.8996 10.0502 18.714 10.2424L12.9489 16.0075Z" fill="currentColor" fillOpacity="0.7" />
  </svg>
);

export const TopCountriesGlobeIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.98656 12.8167C10.2022 12.8167 12.8091 10.2086 12.8091 6.99127C12.8091 3.77396 10.2022 1.16582 6.98656 1.16582C3.77088 1.16582 1.16406 3.77396 1.16406 6.99127C1.16406 10.2086 3.77088 12.8167 6.98656 12.8167Z"
      stroke="currentColor"
      strokeWidth="1.1648"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.9872 1.16582C5.49212 2.73645 4.6582 4.8223 4.6582 6.99127C4.6582 9.16024 5.49212 11.2461 6.9872 12.8167C8.48228 11.2461 9.3162 9.16024 9.3162 6.99127C9.3162 4.8223 8.48228 2.73645 6.9872 1.16582Z"
      stroke="currentColor"
      strokeWidth="1.1648"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.16406 6.9908H12.8091"
      stroke="currentColor"
      strokeWidth="1.1648"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ApplyFiltersChevronDownIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.47221 10.4715C8.34719 10.5965 8.17766 10.6667 8.00088 10.6667C7.8241 10.6667 7.65456 10.5965 7.52955 10.4715L3.75821 6.70015C3.69454 6.63865 3.64375 6.56509 3.60881 6.48375C3.57387 6.40241 3.55548 6.31493 3.55471 6.22641C3.55394 6.1379 3.57081 6.05011 3.60433 5.96818C3.63785 5.88625 3.68735 5.81181 3.74995 5.74922C3.81254 5.68662 3.88698 5.63712 3.96891 5.6036C4.05084 5.57008 4.13863 5.55321 4.22715 5.55398C4.31567 5.55475 4.40315 5.57314 4.48448 5.60808C4.56582 5.64302 4.63938 5.69381 4.70088 5.75748L8.00088 9.05748L11.3009 5.75748C11.4266 5.63604 11.595 5.56885 11.7698 5.57036C11.9446 5.57188 12.1118 5.642 12.2354 5.7656C12.359 5.88921 12.4291 6.05642 12.4307 6.23121C12.4322 6.40601 12.365 6.57441 12.2435 6.70015L8.47221 10.4715Z"
      fill="currentColor"
    />
  </svg>
);

export const ApplyFiltersStarIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.82108 1.55756C7.85083 1.49747 7.89677 1.44689 7.95373 1.41153C8.0107 1.37616 8.07641 1.35742 8.14346 1.35742C8.2105 1.35742 8.27622 1.37616 8.33318 1.41153C8.39014 1.44689 8.43609 1.49747 8.46583 1.55756L10.0336 4.73313C10.1368 4.94214 10.2893 5.12297 10.4778 5.26009C10.6664 5.39722 10.8854 5.48654 11.1161 5.5204L14.6221 6.03349C14.6885 6.04311 14.7509 6.07114 14.8023 6.11439C14.8536 6.15764 14.8918 6.21439 14.9126 6.27823C14.9333 6.34206 14.9358 6.41043 14.9198 6.47561C14.9037 6.54078 14.8697 6.60016 14.8216 6.64702L12.2861 9.11607C12.1189 9.27903 11.9938 9.48018 11.9215 9.70221C11.8493 9.92424 11.8321 10.1605 11.8714 10.3906L12.47 13.8791C12.4817 13.9455 12.4746 14.0138 12.4493 14.0764C12.4241 14.1389 12.3817 14.193 12.3272 14.2327C12.2726 14.2723 12.208 14.2958 12.1408 14.3005C12.0735 14.3052 12.0063 14.2908 11.9468 14.2591L8.81263 12.6113C8.60612 12.5029 8.37636 12.4462 8.14312 12.4462C7.90987 12.4462 7.68011 12.5029 7.4736 12.6113L4.34015 14.2591C4.28065 14.2906 4.21351 14.3048 4.14636 14.3C4.0792 14.2953 4.01474 14.2717 3.96029 14.2321C3.90585 14.1926 3.86361 14.1385 3.83838 14.0761C3.81315 14.0136 3.80594 13.9454 3.81757 13.8791L4.41549 10.3913C4.45498 10.1611 4.43787 9.92466 4.36563 9.70249C4.29339 9.48032 4.16818 9.27906 4.00081 9.11607L1.46528 6.6477C1.41682 6.60089 1.38248 6.54141 1.36617 6.47604C1.34986 6.41067 1.35224 6.34203 1.37303 6.27794C1.39383 6.21386 1.4322 6.1569 1.48379 6.11356C1.53538 6.07022 1.5981 6.04224 1.66481 6.03281L5.17017 5.5204C5.4011 5.48681 5.6204 5.3976 5.8092 5.26046C5.99801 5.12331 6.15066 4.94235 6.25402 4.73313L7.82108 1.55756Z"
      stroke="currentColor"
      strokeWidth="1.35736"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ApplyFiltersSearchIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.46652 12.8948C10.4651 12.8948 12.8959 10.464 12.8959 7.46537C12.8959 4.46675 10.4651 2.03589 7.46652 2.03589C4.46794 2.03589 2.03711 4.46675 2.03711 7.46537C2.03711 10.464 4.46794 12.8948 7.46652 12.8948Z"
      stroke="currentColor"
      strokeWidth="1.35736"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.2523 14.2523L11.334 11.334"
      stroke="currentColor"
      strokeWidth="1.35736"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ApplyFiltersClearIcon = ({ className, ...props }) => (
  <svg
    className={className}
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.2164 4.07202L4.07227 12.2162"
      stroke="currentColor"
      strokeWidth="1.35736"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.07227 4.07202L12.2164 12.2162"
      stroke="currentColor"
      strokeWidth="1.35736"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const VacancyCardClockIcon = ({ className, ...props }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7.99219 3.99585V7.99176L10.6561 9.32373" stroke="currentColor" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.99188 14.6516C11.67 14.6516 14.6517 11.6699 14.6517 7.99176C14.6517 4.31363 11.67 1.33191 7.99188 1.33191C4.31375 1.33191 1.33203 4.31363 1.33203 7.99176C1.33203 11.6699 4.31375 14.6516 7.99188 14.6516Z" stroke="currentColor" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VacancyCardEyeIcon = ({ className, ...props }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.37366 8.22357C1.31816 8.07405 1.31816 7.90957 1.37366 7.76004C1.91424 6.44929 2.83184 5.32856 4.01014 4.53994C5.18844 3.75132 6.57436 3.33032 7.99222 3.33032C9.41007 3.33032 10.796 3.75132 11.9743 4.53994C13.1526 5.32856 14.0702 6.44929 14.6108 7.76004C14.6663 7.90957 14.6663 8.07405 14.6108 8.22357C14.0702 9.53432 13.1526 10.6551 11.9743 11.4437C10.796 12.2323 9.41007 12.6533 7.99222 12.6533C6.57436 12.6533 5.18844 12.2323 4.01014 11.4437C2.83184 10.6551 1.91424 9.53432 1.37366 8.22357Z" stroke="currentColor" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.9921 9.98981C9.09554 9.98981 9.99005 9.09529 9.99005 7.99185C9.99005 6.88841 9.09554 5.9939 7.9921 5.9939C6.88866 5.9939 5.99414 6.88841 5.99414 7.99185C5.99414 9.09529 6.88866 9.98981 7.9921 9.98981Z" stroke="currentColor" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VacancyCardEnvelopeIcon = ({ className, ...props }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14.6517 4.66187L8.66386 8.47596C8.46066 8.59398 8.22986 8.65615 7.99488 8.65615C7.75989 8.65615 7.52909 8.59398 7.3259 8.47596L1.33203 4.66187" stroke="currentColor" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.3198 2.66382H2.664C1.92837 2.66382 1.33203 3.26016 1.33203 3.99579V11.9876C1.33203 12.7232 1.92837 13.3196 2.664 13.3196H13.3198C14.0554 13.3196 14.6517 12.7232 14.6517 11.9876V3.99579C14.6517 3.26016 14.0554 2.66382 13.3198 2.66382Z" stroke="currentColor" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VacancyCardBidIcon = ({ className, ...props }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M7.99219 1.33203V14.6517" stroke="currentColor" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.3219 3.32983H6.32704C5.70884 3.32983 5.11595 3.57542 4.67881 4.01255C4.24168 4.44969 3.99609 5.04258 3.99609 5.66078C3.99609 6.27899 4.24168 6.87187 4.67881 7.30901C5.11595 7.74615 5.70884 7.99173 6.32704 7.99173H9.65697C10.2752 7.99173 10.8681 8.23731 11.3052 8.67445C11.7423 9.11159 11.9879 9.70447 11.9879 10.3227C11.9879 10.9409 11.7423 11.5338 11.3052 11.9709C10.8681 12.408 10.2752 12.6536 9.65697 12.6536H3.99609" stroke="currentColor" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VacancyCardViewJobIcon = ({ className, ...props }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10.656 13.3198V2.664C10.656 2.31074 10.5157 1.97195 10.2659 1.72216C10.0161 1.47236 9.6773 1.33203 9.32403 1.33203H6.66009C6.30683 1.33203 5.96804 1.47236 5.71825 1.72216C5.46846 1.97195 5.32813 2.31074 5.32812 2.664V13.3198" stroke="currentColor" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.3198 3.99585H2.664C1.92837 3.99585 1.33203 4.59219 1.33203 5.32782V11.9877C1.33203 12.7233 1.92837 13.3196 2.664 13.3196H13.3198C14.0554 13.3196 14.6517 12.7233 14.6517 11.9877V5.32782C14.6517 4.59219 14.0554 3.99585 13.3198 3.99585Z" stroke="currentColor" strokeWidth="1.33197" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VacancyCardChatIcon = ({ className, ...props }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.25 8.75024C12.25 9.05966 12.1271 9.35641 11.9083 9.5752C11.6895 9.79399 11.3928 9.91691 11.0833 9.91691H4.08333L1.75 12.2502V2.91691C1.75 2.60749 1.87292 2.31075 2.09171 2.09195C2.3105 1.87316 2.60725 1.75024 2.91667 1.75024H11.0833C11.3928 1.75024 11.6895 1.87316 11.9083 2.09195C12.1271 2.31075 12.25 2.60749 12.25 2.91691V8.75024Z" stroke="currentColor" strokeWidth="1.18278" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VacancyCardLocationIcon = ({ className, ...props }) => (
  <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.144 5.57212C11.144 8.3543 8.05756 11.2518 7.02114 12.1467C6.92459 12.2193 6.80706 12.2586 6.68625 12.2586C6.56545 12.2586 6.44792 12.2193 6.35137 12.1467C5.31494 11.2518 2.22852 8.3543 2.22852 5.57212C2.22852 4.38985 2.69817 3.25601 3.53416 2.42002C4.37014 1.58403 5.50399 1.11438 6.68625 1.11438C7.86852 1.11438 9.00236 1.58403 9.83835 2.42002C10.6743 3.25601 11.144 4.38985 11.144 5.57212Z" stroke="currentColor" strokeWidth="1.11443" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.68532 7.24369C7.60855 7.24369 8.35698 6.49527 8.35698 5.57204C8.35698 4.64881 7.60855 3.90039 6.68532 3.90039C5.7621 3.90039 5.01367 4.64881 5.01367 5.57204C5.01367 6.49527 5.7621 7.24369 6.68532 7.24369Z" stroke="currentColor" strokeWidth="1.11443" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VacancyCardStarFilledIcon = ({ className, ...props }) => (
  <svg className={className} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.4237 1.03486C5.44347 0.994925 5.474 0.961311 5.51186 0.93781C5.54971 0.914309 5.59338 0.901855 5.63794 0.901855C5.68249 0.901855 5.72616 0.914309 5.76402 0.93781C5.80187 0.961311 5.83241 0.994925 5.85217 1.03486L6.89402 3.14517C6.96265 3.28407 7.06397 3.40424 7.18927 3.49536C7.31457 3.58649 7.4601 3.64585 7.61339 3.66835L9.94335 4.00932C9.9875 4.01571 10.029 4.03433 10.0631 4.06308C10.0972 4.09182 10.1226 4.12953 10.1364 4.17196C10.1502 4.21438 10.1518 4.25981 10.1412 4.30312C10.1305 4.34644 10.1079 4.38589 10.0759 4.41704L8.39095 6.05784C8.27982 6.16613 8.19668 6.2998 8.14868 6.44735C8.10067 6.5949 8.08924 6.7519 8.11537 6.90485L8.51317 9.22307C8.52097 9.2672 8.5162 9.31263 8.49942 9.35418C8.48263 9.39573 8.45451 9.43172 8.41825 9.45805C8.382 9.48439 8.33907 9.5 8.29437 9.50311C8.24967 9.50622 8.20499 9.4967 8.16544 9.47564L6.08264 8.38057C5.9454 8.30851 5.79272 8.27086 5.63771 8.27086C5.48271 8.27086 5.33002 8.30851 5.19278 8.38057L3.11044 9.47564C3.0709 9.49658 3.02628 9.50599 2.98165 9.50282C2.93702 9.49965 2.89418 9.48402 2.858 9.4577C2.82182 9.43139 2.79375 9.39545 2.77698 9.35397C2.76021 9.31249 2.75542 9.26714 2.76315 9.22307L3.1605 6.9053C3.18675 6.75228 3.17538 6.59518 3.12737 6.44754C3.07936 6.29989 2.99615 6.16615 2.88493 6.05784L1.19993 4.41749C1.16772 4.38638 1.1449 4.34686 1.13406 4.30341C1.12322 4.25997 1.1248 4.21436 1.13862 4.17177C1.15244 4.12918 1.17795 4.09133 1.21223 4.06253C1.24651 4.03373 1.28819 4.01513 1.33253 4.00886L3.66203 3.66835C3.81549 3.64602 3.96123 3.58674 4.0867 3.4956C4.21217 3.40446 4.31362 3.2842 4.3823 3.14517L5.4237 1.03486Z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="0.902034" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const VacancyCardStarOutlineIcon = ({ className, ...props }) => (
  <svg className={className} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.4237 1.03486C5.44347 0.994925 5.474 0.961311 5.51186 0.93781C5.54971 0.914309 5.59338 0.901855 5.63794 0.901855C5.68249 0.901855 5.72616 0.914309 5.76402 0.93781C5.80187 0.961311 5.83241 0.994925 5.85217 1.03486L6.89402 3.14517C6.96265 3.28407 7.06397 3.40424 7.18927 3.49536C7.31457 3.58649 7.4601 3.64585 7.61339 3.66835L9.94335 4.00932C9.9875 4.01571 10.029 4.03433 10.0631 4.06308C10.0972 4.09182 10.1226 4.12953 10.1364 4.17196C10.1502 4.21438 10.1518 4.25981 10.1412 4.30312C10.1305 4.34644 10.1079 4.38589 10.0759 4.41704L8.39095 6.05784C8.27982 6.16613 8.19668 6.2998 8.14868 6.44735C8.10067 6.5949 8.08924 6.7519 8.11537 6.90485L8.51317 9.22307C8.52097 9.2672 8.5162 9.31263 8.49942 9.35418C8.48263 9.39573 8.45451 9.43172 8.41825 9.45805C8.382 9.48439 8.33907 9.5 8.29437 9.50311C8.24967 9.50622 8.20499 9.4967 8.16544 9.47564L6.08264 8.38057C5.9454 8.30851 5.79272 8.27086 5.63771 8.27086C5.48271 8.27086 5.33002 8.30851 5.19278 8.38057L3.11044 9.47564C3.0709 9.49658 3.02628 9.50599 2.98165 9.50282C2.93702 9.49965 2.89418 9.48402 2.858 9.4577C2.82182 9.43139 2.79375 9.39545 2.77698 9.35397C2.76021 9.31249 2.75542 9.26714 2.76315 9.22307L3.1605 6.9053C3.18675 6.75228 3.17538 6.59518 3.12737 6.44754C3.07936 6.29989 2.99615 6.16615 2.88493 6.05784L1.19993 4.41749C1.16772 4.38638 1.1449 4.34686 1.13406 4.30341C1.12322 4.25997 1.1248 4.21436 1.13862 4.17177C1.15244 4.12918 1.17795 4.09133 1.21223 4.06253C1.24651 4.03373 1.28819 4.01513 1.33253 4.00886L3.66203 3.66835C3.81549 3.64602 3.96123 3.58674 4.0867 3.4956C4.21217 3.40446 4.31362 3.2842 4.3823 3.14517L5.4237 1.03486Z" stroke="#D1D5DB" strokeWidth="0.902034" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Icon size constants
export const ICON_SIZES = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
  "2xl": "w-10 h-10",
  "3xl": "w-12 h-12",
};

// Icon color constants
export const ICON_COLORS = {
  primary: "text-blue-600",
  secondary: "text-gray-600",
  success: "text-green-600",
  warning: "text-yellow-600",
  danger: "text-red-600",
  info: "text-blue-500",
  light: "text-gray-400",
  dark: "text-gray-800",
  white: "text-white",
  black: "text-black",
};
