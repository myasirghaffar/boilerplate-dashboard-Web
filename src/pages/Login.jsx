import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ArrowBackIcon, HeroArrowRightIcon } from "../assets/icons";
import { logo } from "../assets/logos";
import { ReusableInput } from "../components/Form";
import { authenticateUser, dummyUsers } from "../data/dummyUsers";
import { setUser } from "../store/slices/authSlice";
import { getDashboardPathByRole } from "../utils/roles";

const Login = () => {
  const [error, setError] = useState(null);
  const [selectedRole, setSelectedRole] = useState("company");
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roleOptions = [
    { id: "admin", label: "Admin" },
    { id: "company", label: "Company" },
    { id: "recruiter", label: "Recruiter" },
    { id: "agency", label: "Agency" },
  ];
  const quickFillUsers = ["admin", "agency", "company", "recruiter"]
    .map((role) => dummyUsers.find((user) => user.role === role))
    .filter(Boolean);
  const selectedRoleLabel =
    roleOptions.find((role) => role.id === selectedRole)?.label || "Company";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (auth.isAuthenticated && auth.user?.role) {
      navigate(getDashboardPathByRole(auth.user.role), { replace: true });
    }
  }, [auth.isAuthenticated, auth.user, navigate]);

  const loginWithCredentials = (email, password) => {
    setError(null);
    const authenticatedUser = authenticateUser(email, password);

    if (!authenticatedUser) {
      toast.error("Incorrect email or password. Please try again.");
      return;
    }

    dispatch(
      setUser({
        role: authenticatedUser.role,
        email: authenticatedUser.email,
        name: authenticatedUser.name,
      })
    );

    toast.success(`Welcome, ${authenticatedUser.name}!`);
    navigate(getDashboardPathByRole(authenticatedUser.role));
  };

  const onSubmit = ({ email, password }) => {
    loginWithCredentials(email, password);
  };

  const fillCredentials = (user) => {
    setValue("email", user.email, { shouldValidate: true, shouldDirty: true });
    setValue("password", user.password, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setSelectedRole(user.role);
    setError(null);
  };

  return (
    <div className="flex h-screen items-center justify-center overflow-auto bg-gradient-to-l from-slate-900 to-blue-900 px-4 py-4">
      <div className="mx-auto w-full max-w-[480px]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-gray-300"
        >
          <ArrowBackIcon className="h-3 w-3 text-gray-400" />
          Back to Home
        </Link>

        <div className="mt-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:p-6">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <img src={logo} alt="Nomad logo" className="h-12 w-12 rounded-xl object-cover shadow-lg" />
            <h1 className="text-2xl font-semibold leading-tight text-slate-900">
              Sign In to Nomad
            </h1>
            <p className="text-sm text-gray-500">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-900">
                Select Role
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {roleOptions.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(role.id)}
                    className={`h-10 rounded-xl text-sm font-medium transition ${selectedRole === role.id
                      ? "bg-[#25406A] text-white"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                      }`}
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            </div>

            <ReusableInput
              label="Email"
              placeholder="Enter your email"
              border="border-gray-200"
              backgroundColor="bg-white"
              focusRing="focus:ring-cyan-900"
              inputClassName="!h-11 rounded-xl border text-sm text-slate-900 placeholder:text-gray-400"
              labelClassName="mb-1.5 text-sm font-medium text-slate-900"
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />

            <ReusableInput
              type="password"
              label="Password"
              placeholder="Enter your password"
              border="border-gray-200"
              backgroundColor="bg-white"
              focusRing="focus:ring-cyan-900"
              inputClassName="!h-11 rounded-xl border text-sm text-slate-900 placeholder:text-gray-400"
              labelClassName="mb-1.5 text-sm font-medium text-slate-900"
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
              })}
            />

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-[#25406A] transition hover:text-[#1f3557]"
              >
                Forgot password?
              </button>
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-2.5 text-xs text-red-700">
                {error}
              </div>
            )}

            <button
              disabled={auth.loading}
              type="submit"
              className="h-11 w-full rounded-xl bg-[#25406A] text-base font-medium text-white transition hover:bg-[#1f3557] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {auth.loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {selectedRole !== "admin" && (
            <>
              <div className="mt-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-gray-500">or</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <Link
                to="/signup"
                className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-xl border border-[#25406A] text-base font-medium text-[#25406A] transition hover:bg-[#25406A]/5"
              >
                Create New Account
              </Link>

              <div className="mt-4 text-center">
                <span className="text-sm text-gray-500">Don&apos;t have an account? </span>
                <Link to="/signup" className="font-medium text-[#25406A] hover:text-[#1f3557]">
                  {`Sign up as ${selectedRoleLabel}`}
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-20 flex flex-col items-end gap-2">
        <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white shadow-lg backdrop-blur-sm">
          Quick Fill
        </span>
        <div className="flex gap-2 rounded-full bg-white/90 p-2 shadow-xl backdrop-blur">
          {quickFillUsers.map((user) => (
            <button
              key={user.role}
              type="button"
              onClick={() => fillCredentials(user)}
              title={`${user.name}: ${user.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25406A] text-xs font-semibold uppercase text-white transition hover:bg-[#1f3557]"
            >
              {user.role.slice(0, 2)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
