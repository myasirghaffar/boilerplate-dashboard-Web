import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { CalendarDays, Clock3, Trash2, Upload, X } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { ReusableInput } from "../../../components/Form";

const ROLE_LABELS = {
  recruiter: "Recruiter",
  agency: "Agency",
  company: "Company",
};

const TABS = [
  { key: "info", color: "indigo", textColor: "text-indigo-500" },
  { key: "founding", label: "Founding Info", color: "amber", textColor: "text-amber-500" },
  {
    key: "social",
    label: "Social-Media-Profile",
    color: "emerald",
    textColor: "text-emerald-500",
  },
];

const getActiveBorderClass = (color) => {
  if (color === "indigo") return "border-indigo-500";
  if (color === "amber") return "border-amber-500";
  return "border-emerald-500";
};

const isVideo = (file) => file?.type?.startsWith("video/");

const UploadDrop = ({
  id,
  title,
  subtitle,
  compact = false,
  accept = "image/*",
  multiple = false,
  value = null,
  onFileSelect,
  onClear,
}) => {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const files = Array.isArray(value) ? value : value ? [value] : [];
  const hasPreview = files.length > 0;
  const firstFile = files[0];

  const previewUrl = useMemo(() => {
    if (!firstFile) return null;
    try {
      return URL.createObjectURL(firstFile);
    } catch {
      return null;
    }
  }, [firstFile]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleChange = useCallback(
    (e) => {
      const next = e.target.files;
      if (next?.length) {
        onFileSelect?.(Array.from(next));
        e.target.value = "";
      }
    },
    [onFileSelect]
  );

  const handleClear = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      onClear?.();
      if (inputRef.current) inputRef.current.value = "";
    },
    [onClear]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      const dropped = e.dataTransfer.files;
      if (dropped?.length) {
        onFileSelect?.(Array.from(dropped));
      }
      if (inputRef.current) inputRef.current.value = "";
    },
    [onFileSelect]
  );

  const dropZoneClasses = `${compact ? "h-48 px-4 py-6" : "h-48 px-6 py-8"} flex w-full cursor-pointer flex-col items-center justify-center rounded-[10px] border border-gray-200 bg-gray-50 text-center transition-colors ${isDragging ? "border-[#2A4870] bg-blue-50/50" : ""}`;

  if (hasPreview && previewUrl) {
    const isVideoFile = isVideo(firstFile);
    return (
      <div className="relative w-full">
        <div
          className={`relative overflow-hidden rounded-[10px] border border-gray-200 bg-gray-100 ${compact ? "h-48" : "h-44"}`}
        >
          {isVideoFile ? (
            <video
              src={previewUrl}
              controls
              className="h-full w-full object-contain"
            />
          ) : (
            <img
              src={previewUrl}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          )}
          <button
            type="button"
            onClick={handleClear}
            aria-label="Remove file"
            className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          >
            <X className="h-4 w-4" />
          </button>
          <label
            htmlFor={id}
            className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/0 transition-colors hover:bg-black/20"
          >
            <input
              ref={inputRef}
              id={id}
              type="file"
              accept={accept}
              multiple={multiple}
              onChange={handleChange}
              className="sr-only"
            />
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-700 opacity-0 transition-opacity hover:opacity-100">
              Change
            </span>
          </label>
        </div>
        <p className="mt-1 truncate text-center text-xs text-gray-500">
          {firstFile.name}
        </p>
      </div>
    );
  }

  return (
    <label
      htmlFor={id}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={dropZoneClasses}
    >
      <input
        ref={inputRef}
        id={id}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        className="sr-only"
      />
      <span
        className={`mb-3 inline-flex items-center justify-center rounded-full bg-[#2A4870] ${compact ? "h-12 w-12" : "h-16 w-16"}`}
      >
        <Upload className={`${compact ? "h-6 w-6" : "h-8 w-8"} text-white`} />
      </span>
      <p className={`${compact ? "text-sm" : "text-lg"} font-semibold text-slate-900`}>
        {title}
      </p>
      <p className={`${compact ? "text-xs" : "text-sm"} mt-1 font-normal text-gray-600`}>
        {subtitle}
      </p>
    </label>
  );
};

const UploadButton = ({ htmlFor, onClick }) => {
  const className =
    "inline-flex h-9 cursor-pointer items-center gap-2 rounded-[10px] border border-gray-200 px-4 text-sm font-normal leading-5 text-blue-500 transition-colors hover:bg-gray-50";
  const iconSpan = (
    <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#2A4870]">
      <Upload className="h-3.5 w-3.5 text-white" />
    </span>
  );
  if (htmlFor) {
    return (
      <label htmlFor={htmlFor} className={className}>
        {iconSpan}
        Upload
      </label>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {iconSpan}
      Upload
    </button>
  );
};

const TabHeader = ({ activeTab, setActiveTab, roleLabel }) => (
  <div className="w-full border-b border-gray-200 px-3">
    <div className="flex h-14 flex-nowrap items-end gap-2 overflow-x-auto overflow-y-hidden">
      {TABS.map((tab) => {
        const label =
          tab.key === "info" ? `${roleLabel} Info` : tab.label;
        const active = activeTab === tab.key;

        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`h-14 shrink-0 border-b px-6 text-sm font-medium leading-5 transition-colors ${active
              ? `${getActiveBorderClass(tab.color)} ${tab.textColor}`
              : `border-transparent ${tab.textColor}`
              }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  </div>
);

const SocialField = ({ icon, label, name, value, placeholder }) => (
  <ReusableInput
    variant="profile"
    name={name}
    label={label}
    type="text"
    defaultValue={value}
    placeholder={placeholder}
    iconLeft={<span className="text-[1.2rem]">{icon}</span>}
    containerClasses="flex w-full flex-col gap-2"
  />
);

const ProfilePage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("info");
  const [uploads, setUploads] = useState({
    profilePicture: null,
    video: null,
    photo1: null,
    photo2: null,
  });

  const handleFileSelect = useCallback((key, files) => {
    setUploads((prev) => ({ ...prev, [key]: files }));
  }, []);

  const handleClearUpload = useCallback((key) => {
    setUploads((prev) => ({ ...prev, [key]: null }));
  }, []);

  const roleLabel = useMemo(() => {
    const roleFromPath = location.pathname.split("/").filter(Boolean)[0];
    return ROLE_LABELS[roleFromPath] || "Profile";
  }, [location.pathname]);

  return (
    <section className="space-y-6">
      {activeTab === "info" ? (
        <>
          <div className="w-full space-y-6 rounded-2xl border border-gray-100 bg-white pb-6">
            <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} roleLabel={roleLabel} />

            <div className="space-y-6 px-4 sm:px-6">
              <div className="rounded-2xl border border-gray-100 bg-white p-6">
                <h2 className="text-xl font-semibold leading-7 text-slate-900">
                  Upload Profile Picture
                </h2>
                <p className="mt-2 text-sm font-normal leading-5 text-gray-600">
                  Upload profile picture which will shown at the resumes
                </p>
                <div className="mt-5">
                  <UploadDrop
                    id="profile-picture-upload"
                    title="Drag & Drop Picture here"
                    subtitle="or click to browse"
                    accept="image/*"
                    value={uploads.profilePicture}
                    onFileSelect={(files) => handleFileSelect("profilePicture", files)}
                    onClear={() => handleClearUpload("profilePicture")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <ReusableInput
                  variant="profile"
                  name="roleName"
                  label={`${roleLabel} Name`}
                  defaultValue="Tata Consultancy Services"
                  placeholder={`Enter ${roleLabel.toLowerCase()} name`}
                />
                <ReusableInput
                  variant="profile"
                  name="email"
                  label="Email"
                  defaultValue="tejasdarania007@gmail.com"
                  placeholder="Enter email address"
                />
                <ReusableInput
                  variant="profile"
                  name="phone"
                  label="Phone Number"
                  defaultValue="8460820628"
                  placeholder="Enter phone number"
                />
                <ReusableInput
                  variant="profile"
                  name="location"
                  label="Location"
                  defaultValue="TCS, Gandhinagar, Gujarat, India"
                  placeholder="Enter location"
                />
              </div>

              <ReusableInput
                variant="profile"
                name="aboutUs"
                label="About us"
                as="textarea"
                rows={6}
                defaultValue="Tata Consultancy Services (TCS) is an Indian multinational technology company specializing in information technology services and consulting."
                placeholder="Enter a brief description about your company"
              />

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-5 text-slate-900">
                    Upload Video
                  </label>
                  <UploadDrop
                    id="video-upload"
                    title="Drag & Drop Video here"
                    subtitle="or click to browse"
                    accept="video/*"
                    value={uploads.video}
                    onFileSelect={(files) => handleFileSelect("video", files)}
                    onClear={() => handleClearUpload("video")}
                  />
                  <UploadButton htmlFor="video-upload" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium leading-5 text-slate-900">
                    Upload Photos
                  </label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <UploadDrop
                      id="photo-1-upload"
                      compact
                      title="Drag & Drop Picture here"
                      subtitle="or click to browse"
                      accept="image/*"
                      value={uploads.photo1}
                      onFileSelect={(files) => handleFileSelect("photo1", files)}
                      onClear={() => handleClearUpload("photo1")}
                    />
                    <UploadDrop
                      id="photo-2-upload"
                      compact
                      title="Drag & Drop Picture here"
                      subtitle="or click to browse"
                      accept="image/*"
                      value={uploads.photo2}
                      onFileSelect={(files) => handleFileSelect("photo2", files)}
                      onClear={() => handleClearUpload("photo2")}
                    />
                  </div>
                  <UploadButton htmlFor="photo-1-upload" />
                </div>
              </div>

              <ReusableInput
                variant="profile"
                name="subscriptionPlan"
                label="Subscription Plan"
                defaultValue="Subscription Plan"
                placeholder="Select or enter subscription plan"
              />

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <ReusableInput
                  variant="profile"
                  name="subscriptionStart"
                  type="date"
                  label="Subscription Plan Start Date"
                  defaultValue="2025-01-01"
                  iconRight={<CalendarDays className="h-4 w-4" />}
                />
                <ReusableInput
                  variant="profile"
                  name="subscriptionEnd"
                  type="date"
                  label="Subscription Plan End Date"
                  defaultValue="2025-12-31"
                  iconRight={<CalendarDays className="h-4 w-4" />}
                />
              </div>

              <button
                type="button"
                className="h-12 rounded-[10px] bg-[#2A4870] px-8 text-base font-medium leading-6 text-white hover:opacity-90"
              >
                Save Changes
              </button>
            </div>
          </div>

          <div className="w-full space-y-6 rounded-2xl border border-gray-100 bg-white px-4 py-6 sm:px-6">
            <h3 className="text-xl font-semibold leading-7 text-slate-900">Bank Details</h3>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <ReusableInput
                variant="profile"
                name="bankName"
                label="Bank Name"
                defaultValue="Meezan"
                placeholder="Enter bank name"
              />
              <ReusableInput
                variant="profile"
                name="bankAccount"
                label="Bank Account Number"
                defaultValue="12345678987654"
                placeholder="Enter account number"
              />
            </div>
            <ReusableInput
              variant="profile"
              name="bankCode"
              label="Bank Code"
              defaultValue="Bank Code"
              placeholder="Enter bank code"
            />
            <button
              type="button"
              className="h-12 rounded-[10px] bg-[#2A4870] px-8 text-base font-medium leading-6 text-white hover:opacity-90"
            >
              Save Changes
            </button>
          </div>

          <div className="w-full rounded-2xl border border-red-200 bg-red-600/5 px-4 py-6 sm:px-6">
            <h3 className="text-xl font-semibold leading-7 text-slate-900">Delete Account</h3>
            <p className="mt-2 text-base font-normal leading-6 text-gray-600">
              Warning: This action will permanently delete your account and all associated data.
              This cannot be undone.
            </p>
            <button
              type="button"
              className="mt-5 inline-flex h-12 items-center gap-2 rounded-[10px] bg-red-600 px-6 text-base font-medium leading-6 text-white hover:bg-red-700"
            >
              <Trash2 className="h-5 w-5" />
              Delete Account
            </button>
          </div>
        </>
      ) : null}

      {activeTab === "founding" ? (
        <div className="w-full rounded-2xl border border-gray-100 bg-white pb-6">
          <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} roleLabel={roleLabel} />
          <div className="space-y-5 px-4 pt-6 sm:px-6">
            <ReusableInput
              variant="profile"
              name="specialization"
              label="Specialization"
              defaultValue="IT & Software Recruitment"
              placeholder="Enter your specialization"
            />
            <ReusableInput
              variant="profile"
              name="recruiterType"
              label="Recruiter Type"
              defaultValue="Recruitment Agency"
              placeholder="Enter recruiter type"
            />
            <ReusableInput
              variant="profile"
              name="activeClients"
              label="Active Clients"
              defaultValue="25+ Companies"
              placeholder="e.g. 25+ Companies"
            />
            <ReusableInput
              variant="profile"
              name="experienceSince"
              label="Experience Since"
              defaultValue="2016"
              placeholder="Enter year (e.g. 2016)"
            />
            <ReusableInput
              variant="profile"
              name="vision"
              label="Vision"
              as="textarea"
              rows={7}
              defaultValue="Tata Consultancy Services (TCS) is an Indian multinational technology company specializing in information technology services and consulting."
              placeholder="Describe your vision and mission"
            />
            <button
              type="button"
              className="h-12 rounded-[10px] bg-amber-500 px-8 text-base font-medium leading-6 text-white hover:bg-amber-600"
            >
              Update
            </button>
          </div>
        </div>
      ) : null}

      {activeTab === "social" ? (
        <div className="w-full rounded-2xl border border-gray-100 bg-white pb-6">
          <TabHeader activeTab={activeTab} setActiveTab={setActiveTab} roleLabel={roleLabel} />
          <div className="space-y-5 px-4 pt-6 sm:px-6">
            <SocialField
              icon={<FaFacebook color="#1877F2" />}
              name="facebook"
              label="Facebook"
              value="https://www.tcs.com/"
              placeholder="Enter Facebook profile URL"
            />
            <SocialField
              icon={<BsTwitterX />}
              name="twitter"
              label="Twitter"
              value="https://www.tcs.com/"
              placeholder="Enter Twitter profile URL"
            />
            <SocialField
              icon={<FaInstagram color="#E1306C" />}
              name="instagram"
              label="Instagram"
              value="https://www.tcs.com/"
              placeholder="Enter Instagram profile URL"
            />
            <SocialField
              icon={<FaYoutube color="#FF0000" />}
              name="youtube"
              label="YouTube"
              value="https://www.tcs.com/"
              placeholder="Enter YouTube channel URL"
            />
            <SocialField
              icon={<FaLinkedin color="#0076B2" />}
              name="linkedin"
              label="LinkedIn"
              value="https://www.tcs.com/"
              placeholder="Enter LinkedIn profile URL"
            />
            <button
              type="button"
              className="h-12 rounded-[10px] bg-amber-500 px-8 text-base font-medium leading-6 text-white hover:bg-amber-600"
            >
              Update
            </button>
          </div>
        </div>
      ) : null}

      <div className="hidden items-center gap-2 text-xs text-slate-400">
        <Clock3 className="h-3 w-3" />
        <span>Profile last synced just now</span>
      </div>
    </section>
  );
};

export default ProfilePage;
