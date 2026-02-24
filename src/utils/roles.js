export const ROLE_ROUTES = {
  admin: "admin",
  agency: "agency",
  company: "company",
  recruiter: "recruiter",
};

export const ROLE_LABELS = {
  admin: "Admin",
  agency: "Agency",
  company: "Company",
  recruiter: "Recruiter",
};

export const getDashboardPathByRole = (role) => {
  const route = ROLE_ROUTES[role];
  if (!route) return "/login";
  return `/${route}/dashboard`;
};
