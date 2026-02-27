import { useState } from "react";
import { ReusableInput } from "../../../../components/Form";

const ContactFormCard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.08)] md:p-9">
      <h2 className="text-3xl font-semibold text-slate-900">Send us a message</h2>
      <p className="mt-3 max-w-lg text-md leading-6 text-slate-500">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
        <ReusableInput
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          border="border-slate-200"
          focusRing="focus:ring-[#2f4d97]"
          backgroundColor="bg-white"
          inputClassName="h-12 rounded-xl border text-md text-slate-900 placeholder:text-slate-400"
          labelClassName="mb-2 text-sm font-medium text-slate-800"
        />

        <ReusableInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          border="border-slate-200"
          focusRing="focus:ring-[#2f4d97]"
          backgroundColor="bg-white"
          inputClassName="h-12 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400"
          labelClassName="mb-2 text-sm font-medium text-slate-800"
        />

        <ReusableInput
          label="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter your company name"
          border="border-slate-200"
          focusRing="focus:ring-[#2f4d97]"
          backgroundColor="bg-white"
          inputClassName="h-12 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400"
          labelClassName="mb-2 text-sm font-medium text-slate-800"
        />

        <ReusableInput
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter subject"
          border="border-slate-200"
          focusRing="focus:ring-[#2f4d97]"
          backgroundColor="bg-white"
          inputClassName="h-12 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400"
          labelClassName="mb-2 text-sm font-medium text-slate-800"
        />

        <ReusableInput
          as="textarea"
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us how we can help..."
          border="border-slate-200"
          focusRing="focus:ring-[#2f4d97]"
          backgroundColor="bg-white"
          inputClassName="min-h-[126px] resize-none rounded-xl border text-sm text-slate-900 placeholder:text-slate-400"
          labelClassName="mb-2 text-sm font-medium text-slate-800"
        />

        <button
          type="submit"
          className="mt-3 w-full rounded-xl bg-gradient-to-r from-[#2f4d97] to-[#03153f] px-5 py-3 text-md font-medium text-white shadow-[0_12px_20px_rgba(15,23,42,0.2)] transition hover:opacity-95"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactFormCard;
