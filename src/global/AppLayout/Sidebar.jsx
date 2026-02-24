"use client";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { persistor } from "../../store";
import {
  DashboardIcon,
  AdminDashboardNavIcon,
  AdminCompanyNavIcon,
  AdminRecruiterNavIcon,
  AdminRecruiterCompanyNavIcon,
  AdminCompanyJobNavIcon,
  AdminRecruiterEmployeeNavIcon,
  AdminSubscriptionPlanNavIcon,
  AdminPageNavIcon,
  AdminChatNavIcon,
  AdminConfigurationNavIcon,
  AdminSupportNavIcon,
  LogoutIcon,
  XIcon,
  StudentIcon,
  TeacherIcon,
  FinancialIcon,
  ScheduleIcon,
  CalendarIcon,
  MessageIcon,
  RelationIcon,
} from "../../assets/icons";

function Sidebar({ isMobileSidebarOpen, toggleSidebar }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileSidebarOpen &&
        !event.target.closest(".sidebar-content") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        toggleSidebar();
      }
    };

    if (isMobileSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent scrolling when mobile sidebar is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Restore scrolling when mobile sidebar is closed
      document.body.style.overflow = "unset";
    };
  }, [isMobileSidebarOpen, toggleSidebar]);

  // React Icons for sidebar navigation

  const getRoleBasedMenuItems = (role) => {
    const menu = {
      admin: {
        main: [
          { path: "/admin/dashboard", name: "Dashboard", icon: AdminDashboardNavIcon },
          { path: "/admin/company", name: "Company", icon: AdminCompanyNavIcon },
          { path: "/admin/recruiter", name: "Recruiter", icon: AdminRecruiterNavIcon },
          {
            path: "/admin/recruiter-company",
            name: "Recruiter Company",
            icon: AdminRecruiterCompanyNavIcon,
          },
          {
            path: "/admin/company-job",
            name: "Company Job",
            icon: AdminCompanyJobNavIcon,
          },
          {
            path: "/admin/recruiter-employee",
            name: "Recruiter Employee",
            icon: AdminRecruiterEmployeeNavIcon,
          },
          {
            path: "/admin/subscription-plan",
            name: "Subscription Plan",
            icon: AdminSubscriptionPlanNavIcon,
          },
          { path: "/admin/page", name: "Page", icon: AdminPageNavIcon },
          { path: "/admin/chat", name: "Chat", icon: AdminChatNavIcon },
          {
            path: "/admin/configuration",
            name: "Configuration",
            icon: AdminConfigurationNavIcon,
          },
          { path: "/admin/support", name: "Support", icon: AdminSupportNavIcon },
        ],
        bottom: [],
      },
      agency: {
        main: [
          { path: "/agency/dashboard", name: "Dashboard", icon: DashboardIcon },
          { path: "/agency/candidates", name: "Candidates", icon: StudentIcon },
          { path: "/agency/jobs", name: "Jobs", icon: TeacherIcon },
          { path: "/agency/messages", name: "Messages", icon: MessageIcon },
          {
            path: "/agency/reports",
            name: "Reports",
            icon: RelationIcon,
          },
        ],
        bottom: [],
      },
      company: {
        main: [
          { path: "/company/dashboard", name: "Dashboard", icon: DashboardIcon },
          { path: "/company/jobs", name: "Jobs", icon: TeacherIcon },
          {
            path: "/company/agency",
            name: "Agency Partners",
            icon: RelationIcon,
          },
          {
            path: "/company/recruiters",
            name: "Recruiters",
            icon: MessageIcon,
          },
          {
            path: "/company/reports",
            name: "Reports",
            icon: FinancialIcon,
          },
        ],
        bottom: [],
      },
      recruiter: {
        main: [
          {
            path: "/recruiter/dashboard",
            name: "Dashboard",
            icon: DashboardIcon,
          },
          { path: "/recruiter/jobs", name: "Jobs", icon: TeacherIcon },
          {
            path: "/recruiter/candidates",
            name: "Candidates",
            icon: StudentIcon,
          },
          {
            path: "/recruiter/schedule",
            name: "Schedule",
            icon: ScheduleIcon,
          },
          {
            path: "/recruiter/reports",
            name: "Reports",
            icon: CalendarIcon,
          },
        ],
        bottom: [],
      },
    };

    return menu[role] || {};
  };
  const currentUser = useSelector((state) => state.auth.user);
  const currentRole = currentUser?.role;

  // Extract role from URL path as fallback
  const getRoleFromPath = (pathname) => {
    if (pathname.startsWith("/admin")) return "admin";
    if (pathname.startsWith("/agency")) return "agency";
    if (pathname.startsWith("/company")) return "company";
    if (pathname.startsWith("/recruiter")) return "recruiter";
    return null;
  };

  // Use URL-based role detection first, then Redux role as fallback
  const urlBasedRole = getRoleFromPath(location.pathname);
  const detectedRole = urlBasedRole || currentRole;

  const validRoles = ["admin", "agency", "company", "recruiter"];
  const roleName = validRoles.includes(detectedRole) ? detectedRole : null;
  const finalRoleName = roleName || "admin";
  const roleLabel = finalRoleName.charAt(0).toUpperCase() + finalRoleName.slice(1);

  const rawUserName =
    currentUser?.name ||
    currentUser?.fullName ||
    currentUser?.firstName ||
    currentUser?.username ||
    currentUser?.email?.split("@")[0] ||
    "Nomad";

  const firstWord = rawUserName.trim().split(/\s+/)[0] || "N";
  const userInitial = firstWord.charAt(0).toUpperCase();
  const brandTitle = `${firstWord} ${roleLabel}`;

  const menuItems = getRoleBasedMenuItems(finalRoleName);

  // Fallback for testing - if no role is detected, show appropriate menu based on URL
  const finalMenuItems = menuItems?.main
    ? menuItems
    : location.pathname.startsWith("/agency")
    ? getRoleBasedMenuItems("agency")
    : location.pathname.startsWith("/company")
    ? getRoleBasedMenuItems("company")
    : location.pathname.startsWith("/recruiter")
    ? getRoleBasedMenuItems("recruiter")
    : getRoleBasedMenuItems("admin");

  // Utility function to render NavLink items
  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    navigate("/login");
  };
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  const handleClickMobile = () => {
    if (isMobile) {
      toggleSidebar(); // your custom function
    }
  };

  const toggleMenuExpansion = (parentName) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [parentName]: !prev[parentName],
    }));
  };
  const renderNavLink = (item, extraClasses = "") => {
    // Check if this item should be active based on current location
    const isActive =
      location.pathname === item.path ||
      location.pathname.startsWith(item.path + "/");

    return (
      <div
        onClick={() => {
          handleClickMobile();
          // Navigate to the item path using React Router
          navigate(item.path);
        }}
        className={`
          flex items-center w-full h-[48px] pl-[10px] pr-4 gap-[10px] group transition-all duration-200 relative rounded-[10px] cursor-pointer
          ${
            isActive
              ? "bg-[#FFFFFF1A] text-white"
              : "text-white/70 hover:bg-white/5 hover:text-white"
          }
          ${extraClasses}
        `}
      >
        {/* Active state left indicator bar */}
        {/* {isActive && (
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#14F195] to-[#9945FF] rounded-l-md"></div>
        )} */}

        {/* Only show icon if item has no parent (not a nested item) */}
        {!item.parent && item.icon && (
          <div
            className={`w-5 h-5 flex items-center justify-center ${
              isActive ? "text-white" : "text-white/70"
            }`}
          >
            <item.icon />
          </div>
        )}
        <span className="text-base font-normal leading-5 font-poppins">
          {item.name}
        </span>
        {item.badge && (
          <span className="ml-auto bg-white/20 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {item.badge}
          </span>
        )}
      </div>
    );
  };

  const renderSidebarContent = () => {
    // Group menu items by parent for nested structure
    const groupedMenuItems = {};
    const standaloneItems = [];
    const processedParents = new Set();

    finalMenuItems?.main?.forEach((item) => {
      if (item.parent) {
        if (!groupedMenuItems[item.parent]) {
          groupedMenuItems[item.parent] = [];
        }
        groupedMenuItems[item.parent].push(item);
      } else {
        standaloneItems.push(item);
      }
    });

    return (
      <div className="sidebar-content w-[18.5625rem] bg-gradient flex flex-col h-[100vh] relative py-0 sm:py-4">
        <div className=" rounded-lg flex flex-col h-full">
          {/* Mobile close button */}
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white/70 hover:text-white md:hidden z-50"
          >
            <XIcon size={20} />
          </button>

          {/* Brand Section */}
          <div className="h-24 px-6 pt-6 pb-[1.3px] border-b border-white/10 inline-flex flex-col justify-start items-start">
            <div className="self-stretch h-10 pr-5 inline-flex justify-between items-center">
              <div className="w-48 h-10 flex justify-start items-center gap-3">
                <div className="size-10 bg-white/20 rounded-[10px] flex justify-center items-center">
                  <span className="text-white text-lg font-semibold leading-7">
                    {userInitial}
                  </span>
                </div>
                <span className="text-white text-xl font-semibold leading-7">
                  {brandTitle}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="sidebar-nav-scroll flex-1 min-h-0 overflow-y-auto overflow-x-hidden px-4 border-t border-[#FFFFFF1A] pt-4">
            <div className="space-y-1">
              {/* Render items in order, checking for parent groups */}
              {finalMenuItems?.main?.map((item, index) => {
                // If this item has a parent and we haven't processed this parent yet
                if (item.parent && !processedParents.has(item.parent)) {
                  processedParents.add(item.parent);
                  const children = groupedMenuItems[item.parent];
                  const hasActiveChild = children.some(
                    (child) =>
                      location.pathname === child.path ||
                      location.pathname.startsWith(child.path + "/")
                  );
                  const isExpanded = expandedMenus[item.parent];

                  return (
                    <div key={`parent-${item.parent}`} className="space-y-1">
                      {/* Parent header */}
                      <div
                        onClick={() => toggleMenuExpansion(item.parent)}
                        className={`flex items-center w-full h-[42px] pl-[10px] pr-4 gap-[10px] group transition-all duration-200 relative rounded-md cursor-pointer ${
                          hasActiveChild
                            ? "bg-secondary text-white"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 flex items-center justify-center ${
                            hasActiveChild ? "text-white" : "text-white/70"
                          }`}
                        >
                          <TeacherIcon />
                        </div>
                        <span className="text-base font-normal leading-5 font-poppins">
                          {item.parent}
                        </span>
                        <div className="ml-auto">
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? "rotate-90" : ""
                            } ${
                              hasActiveChild ? "text-white" : "text-white/70"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Children items - only show when expanded */}
                      {isExpanded && (
                        <div className="space-y-1">
                          {children.map((child, childIndex) => (
                            <div
                              key={`child-${item.parent}-${childIndex}`}
                              className="ml-6"
                            >
                              {renderNavLink(child, "text-sm")}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // If this is a standalone item (no parent), render it normally
                if (!item.parent) {
                  return <div key={index}>{renderNavLink(item)}</div>;
                }

                // If this item has a parent but we've already processed the parent, skip it
                return null;
              })}
            </div>

            {/* Bottom Navigation */}
            <div className="space-y-1">
              {finalMenuItems?.bottom?.map((item, index) => (
                <div key={index}>{renderNavLink(item)}</div>
              ))}
            </div>
          </nav>

          {/* User Section */}
          <div className=" fixed left-0 border-t border-[#FFFFFF1A]  bottom-0 w-full md:static bg-[#131d33]">
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center justify-start w-full h-[81px] p-4 gap-[10px] text-[#FFFFFFB2]  transition-all duration-200"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <LogoutIcon color="text-gray-600 text-[1.4375rem]" />
              </div>
              <span className="text-base font-medium leading-[1.5625rem] font-poppins">
                Logout
              </span>
              
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Sidebar - always visible on larger screens */}
      <aside className="hidden md:block mt-0">
        {renderSidebarContent()}
      </aside>

      {/* Mobile Sidebar - only visible when toggled */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {renderSidebarContent()}
      </aside>

      {/* Overlay when mobile sidebar is open */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default Sidebar;
