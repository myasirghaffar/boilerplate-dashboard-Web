import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/slices/authSlice";
import { strongPasswordRegex } from "../utils/constants";
import {
  ChevronDownIcon,
  HeroArrowRightIcon,
  SearchIcon,
} from "../assets/icons";
import ReusableInput from "../components/ReusableInput";

const SignUp = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      companyName: "",
      email: "",
      password: "",
      contactNumber: "",
      location: "",
      companyRegistrationNo: "",
    },
  });

  const onSubmit = async (values) => {
    await dispatch(
      signup({
        fullName: values.companyName,
        email: values.email,
        password: values.password,
        contactNumber: values.contactNumber,
        location: values.location,
        companyRegistrationNo: values.companyRegistrationNo,
        joinAs: "company",
      })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-slate-900 to-blue-900 px-4 py-10">
      <div className="mx-auto w-full max-w-[600px]">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-white/90 transition hover:text-white"
        >
          <HeroArrowRightIcon className="h-5 w-5 rotate-180 text-white" />
          Back to Sign In
        </Link>

        <div className="mt-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:p-10">
          <div className="text-center">
            <h1 className="mx-auto max-w-xs text-3xl font-semibold leading-10 text-slate-900">
              Welcome to Nomad Recruitment
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              If you already have an account, you can{" "}
              <Link to="/login" className="font-medium text-cyan-900">
                log in here!
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <ReusableInput
              label="Company Name"
              placeholder="Enter company name"
              border="border-gray-200"
              backgroundColor="bg-white"
              focusRing="focus:ring-cyan-900"
              inputClassName="!h-12 rounded-xl border text-sm text-slate-900 placeholder:text-gray-400"
              labelClassName="mb-2 text-sm font-medium text-slate-900"
              error={errors.companyName?.message}
              {...register("companyName", {
                required: "Company name is required",
              })}
            />

            <ReusableInput
              label="Email"
              type="email"
              placeholder="Enter email address"
              border="border-gray-200"
              backgroundColor="bg-white"
              focusRing="focus:ring-cyan-900"
              inputClassName="!h-12 rounded-xl border text-sm text-slate-900 placeholder:text-gray-400"
              labelClassName="mb-2 text-sm font-medium text-slate-900"
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
              label="Password"
              type="password"
              placeholder="Enter your password"
              border="border-gray-200"
              backgroundColor="bg-white"
              focusRing="focus:ring-cyan-900"
              inputClassName="!h-12 rounded-xl border text-sm text-slate-900 placeholder:text-gray-400"
              labelClassName="mb-2 text-sm font-medium text-slate-900"
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: strongPasswordRegex,
                  message:
                    "Password must include uppercase, lowercase, number, and special character",
                },
              })}
            />

            <ReusableInput
              label="Contact Number"
              placeholder="Enter contact number"
              border="border-gray-200"
              backgroundColor="bg-white"
              focusRing="focus:ring-cyan-900"
              inputClassName="!h-12 rounded-xl border text-sm text-slate-900 placeholder:text-gray-400"
              labelClassName="mb-2 text-sm font-medium text-slate-900"
              error={errors.contactNumber?.message}
              {...register("contactNumber", {
                required: "Contact number is required",
              })}
            />

            <ReusableInput
              label="Location"
              placeholder="Search location"
              border="border-gray-200"
              backgroundColor="bg-white"
              focusRing="focus:ring-cyan-900"
              inputClassName="!h-12 rounded-xl border text-sm text-slate-900 placeholder:text-gray-400"
              labelClassName="mb-2 text-sm font-medium text-slate-900"
              error={errors.location?.message}
              {...register("location", {
                required: "Location is required",
              })}
            />

            <div>
              <ReusableInput
                label="Search Company Registration No."
                placeholder="Search Registration no."
                border="border-gray-200"
                backgroundColor="bg-white"
                focusRing="focus:ring-cyan-900"
                iconLeft={<SearchIcon />}
                iconRight={<ChevronDownIcon className="h-5 w-5 text-gray-400" />}
                inputClassName="!h-12 rounded-xl border text-sm text-slate-900 placeholder:text-gray-400"
                labelClassName="mb-2 text-sm font-medium text-slate-900"
                error={errors.companyRegistrationNo?.message}
                {...register("companyRegistrationNo", {
                  required: "Company registration number is required",
                })}
              />
              <p className="mt-2 text-xs text-gray-400">
                Search for your company using the registration number (e.g.,
                2019/123456/07)
              </p>
            </div>

            <button
              disabled={auth.loading}
              type="submit"
              className="h-12 w-full rounded-2xl bg-[#25406A] text-base font-medium text-white transition hover:bg-[#1f3557] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {auth.loading ? "Saving..." : "Save and Next"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
