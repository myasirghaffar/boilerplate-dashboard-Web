// Dummy user data for authentication
export const dummyUsers = [
  {
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    name: "Nomad Admin",
    route: "admin",
  },
  {
    email: "agency@example.com",
    password: "agency123",
    role: "agency",
    name: "Nomad Agency",
    route: "agency",
  },
  {
    email: "company@example.com",
    password: "company123",
    role: "company",
    name: "Nomad Company",
    route: "company",
  },
  {
    email: "recruiter@example.com",
    password: "recruiter123",
    role: "recruiter",
    name: "Nomad Recruiter",
    route: "recruiter",
  },
];

// Function to authenticate user
export const authenticateUser = (email, password) => {
  const user = dummyUsers.find(
    (user) => user.email === email && user.password === password
  );
  return user || null;
};
