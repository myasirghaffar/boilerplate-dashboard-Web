import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDashboardPathByRole } from "./roles";

const AuthRedirect = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth?.isAuthenticated);
  const currentRole = useSelector((state) => state.auth.user?.role);

  useEffect(() => {
    if (!isLoggedIn || !currentRole) {
      navigate("/login", { replace: true });
      return;
    }

    navigate(getDashboardPathByRole(currentRole), { replace: true });
  }, [isLoggedIn, currentRole, navigate]);

  return null;
};

export default AuthRedirect;
