import {
  ContactClockIcon,
  ContactEmailIcon,
  ContactLocationIcon,
  ContactPhoneIcon,
} from "../../../../assets/icons";

const contacts = [
  {
    label: "Email",
    value: "hello@nomad.com",
    icon: <ContactEmailIcon className="h-5 w-5" />,
  },
  {
    label: "Phone",
    value: "+1 (555) 000-0000",
    icon: <ContactPhoneIcon className="h-5 w-5" />,
  },
  {
    label: "Office",
    value: "123 Sample St, Sydney NSW 2000 AU",
    icon: <ContactLocationIcon className="h-5 w-5" />,
  },
];

const supportHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const quickLinks = [
  "Frequently Asked Questions",
  "How It Works",
  "For Companies",
  "For Recruiters",
];

const ContactSidebarCards = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-[#2f4d97] to-[#03153f] p-7 text-white shadow-[0_10px_30px_rgba(15,23,42,0.2)]">
        <h3 className="text-xl font-semibold">Get in Touch</h3>
        <div className="mt-7 space-y-5">
          {contacts.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="rounded-lg bg-white/15 p-2.5 text-white">{item.icon}</div>
              <div>
                <p className="text-md text-white/75">{item.label}</p>
                <p className="mt-1 text-md font-medium text-white/95">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-[#2f4d97]/10 p-2 text-[#2f4d97]">
            <ContactClockIcon className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900">Support Hours</h3>
        </div>

        <div className="mt-6 space-y-3">
          {supportHours.map((item) => (
            <div key={item.day} className="flex items-center justify-between gap-3">
              <span className="text-md text-slate-600">{item.day}</span>
              <span className="text-md font-semibold text-slate-800">{item.hours}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <h3 className="text-xl font-semibold text-slate-900">Quick Links</h3>
        <ul className="mt-5 space-y-3">
          {quickLinks.map((item) => (
            <li key={item} className="flex items-center gap-3 text-md text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactSidebarCards;
