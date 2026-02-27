import { Menu } from "lucide-react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetDriverAlertReminderQuery } from "../../services/driver/driverApi";
import {
  ChevronDownIcon,
  HeaderLanguageIcon,
  HeaderNotificationBellIcon,
} from "../../assets/icons/icons";

function Header({ toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentRole = useSelector((state) => state.auth.user?.role);
  const { data: alertsData } = useGetDriverAlertReminderQuery();
  const unreadCount =
    alertsData?.data?.alerts?.filter((alert) => !alert.read)?.length || 0;

  const getHeaderMeta = () => {
    if (location.pathname.includes("/dashboard")) {
      return {
        title: "Dashboard",
        subtitle: `${currentRole ? `${currentRole} ` : ""}overview and statistics`,
      };
    }

    const path = location.pathname;
    // Company role - check before admin (path can contain "company")
    const headerMap = [
      [
        "chat",
        {
          title: "Chat",
          subtitle: "Messages and conversations",
        },
      ],
      [
        "profile",
        {
          title: "Profile",
          subtitle: "View and manage your profile",
        },
      ],
      [
        "notifications",
        {
          title: "Notifications",
          subtitle: "View and manage your notifications",
        },
      ],
    ];

    for (const [route, meta] of headerMap) {
      if (path.includes(route)) return meta;
    }

    const lastPath = path.split("/").filter(Boolean).pop() || "dashboard";
    const title = lastPath
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      title,
      subtitle: "Admin overview and statistics",
    };
  };

  const headerMeta = getHeaderMeta();

  return (
    <header className="z-10 md:ml-[18.5625rem] md:w-[calc(100%-18.5625rem)] bg-white border-b border-gray-200">
      <div className="flex min-h-20 items-center justify-between px-4 md:px-8 py-4">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold leading-7 text-slate-900">
            {headerMeta.title}
          </h2>
          <p className="truncate text-sm font-normal leading-5 text-gray-600">
            {headerMeta.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              const roleBase =
                location.pathname.split("/").filter(Boolean)[0] || "admin";
              navigate(`/${roleBase}/notifications`);
            }}
            className="relative hidden md:flex h-9 w-9 items-center justify-center rounded-[10px] text-[#4A5565] hover:bg-gray-100 transition-colors"
            aria-label="Notifications"
          >
            <HeaderNotificationBellIcon className="h-5 w-5" />
            {unreadCount > 0 ? (
              <span className="absolute right-[7px] top-[7px] h-2 w-2 rounded-full bg-[#E00F0F]" />
            ) : null}
          </button>

          <button
            type="button"
            className="hidden md:inline-flex h-10 items-center gap-2 rounded-[10px] border border-gray-200 bg-white px-4 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <HeaderLanguageIcon className="h-4 w-4" />
            <span className="text-sm font-medium leading-5">Eng</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>

          <button
            onClick={toggleSidebar}
            className="inline-flex md:hidden bg-[#171D41] hover:bg-[#2a3342] text-white rounded-lg p-2 border border-[#EDEDED33] transition-colors"
            aria-label="Open sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
