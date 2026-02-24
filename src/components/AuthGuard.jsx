import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const roleRouteMap = {
  admin: "/admin",
  agency: "/agency",
  company: "/company",
  recruiter: "/recruiter",
};

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const user = useSelector((state) => state.auth?.user);

  useEffect(() => {
    if (!isAuthenticated || !user) {
      toast.error("Please login to access this page.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      navigate("/login", {
        replace: true,
        state: { from: location.pathname },
      });
      return;
    }

    const currentPath = location.pathname;
    const userRole = user.role;
    const expectedRoutePrefix = roleRouteMap[userRole];

    if (!expectedRoutePrefix) {
      navigate("/unauthorized", { replace: true });
      return;
    }

    if (expectedRoutePrefix && !currentPath.startsWith(expectedRoutePrefix)) {
      toast.warning("You do not have permission to access this page.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      navigate(`${expectedRoutePrefix}/dashboard`, { replace: true });
      return;
    }
  }, [isAuthenticated, user, navigate, location]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return children;
};

export default AuthGuard;
