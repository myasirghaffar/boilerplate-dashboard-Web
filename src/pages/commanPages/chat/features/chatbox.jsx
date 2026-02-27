import { useMemo, useState } from "react";

const INITIAL_CONTACTS = [
  {
    id: "sarah",
    name: "Sarah Johnson",
    role: "HR Manager at TechCorp",
    online: true,
    lastTime: "2m ago",
    lastMessage: "Thanks for the candidate profile!",
    unread: 2,
  },
  {
    id: "michael",
    name: "Michael Chen",
    role: "Recruiter at Elite Agency",
    online: true,
    lastTime: "15m ago",
    lastMessage: "When can we schedule the interview?",
    unread: 0,
  },
  {
    id: "emma",
    name: "Emma Wilson",
    role: "Hiring Lead at StartupX",
    online: true,
    lastTime: "1h ago",
    lastMessage: "Perfect, I will review the CVs.",
    unread: 0,
  },
  {
    id: "david",
    name: "David Martinez",
    role: "Talent Acquisition",
    online: false,
    lastTime: "3h ago",
    lastMessage: "Can you send more candidates?",
    unread: 1,
  },
  {
    id: "lisa",
    name: "Lisa Anderson",
    role: "Company Representative",
    online: false,
    lastTime: "Yesterday",
    lastMessage: "Great! Let's move forward.",
    unread: 0,
  },
];

const INITIAL_MESSAGES = {
  sarah: [
    {
      id: "s-1",
      sender: "them",
      text: "Hi! I reviewed the candidate profile you sent.",
      time: "10:30 AM",
    },
    {
      id: "s-2",
      sender: "me",
      text: "Great! What do you think?",
      time: "10:32 AM",
    },
    {
      id: "s-3",
      sender: "them",
      text: "Very impressive background. Can we schedule an interview?",
      time: "10:35 AM",
    },
    {
      id: "s-4",
      sender: "me",
      text: "Absolutely! How about next Tuesday at 2 PM?",
      time: "10:36 AM",
    },
  ],
  michael: [
    {
      id: "m-1",
      sender: "them",
      text: "I have shortlisted two profiles for the role.",
      time: "09:45 AM",
    },
  ],
  emma: [
    {
      id: "e-1",
      sender: "them",
      text: "Perfect, I will review the CVs by tonight.",
      time: "08:20 AM",
    },
  ],
  david: [
    {
      id: "d-1",
      sender: "them",
      text: "Can you send more candidates for this position?",
      time: "07:10 AM",
    },
  ],
  lisa: [
    {
      id: "l-1",
      sender: "them",
      text: "Great! Let's move forward with the next round.",
      time: "Yesterday",
    },
  ],
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const formatTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const Chatbox = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);
  const [messagesByContact, setMessagesByContact] = useState(INITIAL_MESSAGES);
  const [selectedContactId, setSelectedContactId] = useState(INITIAL_CONTACTS[0].id);
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState("");
  const [showListOnMobile, setShowListOnMobile] = useState(true);

  const filteredContacts = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return contacts;

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query) ||
        contact.role.toLowerCase().includes(query)
    );
  }, [contacts, search]);

  const selectedContact = useMemo(
    () => contacts.find((contact) => contact.id === selectedContactId),
    [contacts, selectedContactId]
  );

  const selectedMessages = messagesByContact[selectedContactId] || [];

  const handleSelectContact = (contactId) => {
    setSelectedContactId(contactId);
    setShowListOnMobile(false);
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === contactId ? { ...contact, unread: 0 } : contact
      )
    );
  };

  const handleSend = () => {
    const message = draft.trim();
    if (!message || !selectedContactId) return;

    const now = formatTime();
    const newMessage = {
      id: `${selectedContactId}-${Date.now()}`,
      sender: "me",
      text: message,
      time: now,
    };

    setMessagesByContact((prev) => ({
      ...prev,
      [selectedContactId]: [...(prev[selectedContactId] || []), newMessage],
    }));

    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === selectedContactId
          ? { ...contact, lastMessage: message, lastTime: "now", unread: 0 }
          : contact
      )
    );
    setDraft("");
  };

  if (!selectedContact) return null;

  return (
    <div className="w-full overflow-hidden border border-gray-200 bg-white">
      <div className="flex h-[calc(100vh-180px)] min-h-[620px] flex-col lg:flex-row">
        <aside
          className={`w-full flex-col border-b border-gray-200 lg:flex lg:w-[360px] lg:border-b-0 lg:border-r ${
            showListOnMobile ? "flex" : "hidden"
          }`}
        >
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-xl font-bold text-slate-900">Messages</h2>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search contacts..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-cyan-800"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredContacts.map((contact) => {
              const active = contact.id === selectedContactId;
              return (
                <button
                  key={contact.id}
                  type="button"
                  onClick={() => handleSelectContact(contact.id)}
                  className={`flex w-full items-start gap-3 border-b border-gray-100 p-4 text-left transition ${
                    active ? "bg-gray-50" : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-900 text-sm font-semibold text-white">
                      {getInitials(contact.name)}
                    </div>
                    {contact.online ? (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                    ) : null}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {contact.name}
                      </p>
                      <span className="text-xs text-gray-500">{contact.lastTime}</span>
                    </div>
                    <p className="truncate text-xs text-gray-500">{contact.role}</p>
                    <div className="mt-1 flex items-center justify-between gap-2">
                      <p className="truncate text-sm text-gray-600">{contact.lastMessage}</p>
                      {contact.unread > 0 ? (
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-900 px-1 text-xs font-semibold text-white">
                          {contact.unread}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        <section
          className={`min-w-0 flex-1 flex-col lg:flex ${
            showListOnMobile ? "hidden" : "flex"
          }`}
        >
          <header className="flex items-center justify-between border-b border-gray-200 p-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowListOnMobile(true)}
                className="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-slate-700 lg:hidden"
                aria-label="Back to chats"
              >
                ←
              </button>
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-900 text-sm font-semibold text-white">
                  {getInitials(selectedContact.name)}
                </div>
                {selectedContact.online ? (
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                ) : null}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{selectedContact.name}</p>
                <p className="text-xs text-gray-500">
                  {selectedContact.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
            <div className="space-y-4">
              {selectedMessages.map((message) => {
                const mine = message.sender === "me";
                return (
                  <div
                    key={message.id}
                    className={`flex ${mine ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 sm:max-w-[70%] ${
                        mine
                          ? "bg-cyan-900 text-white"
                          : "border border-gray-200 bg-white text-slate-900"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`mt-1 text-right text-xs ${
                          mine ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <footer className="border-t border-gray-200 sm:p-4 p-1 py-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSend();
                }}
                className="h-11 flex-1 rounded-lg border border-gray-200 px-4 text-sm outline-none transition focus:border-cyan-800"
              />
              <button
                type="button"
                onClick={handleSend}
                className="h-11 rounded-lg bg-cyan-900 px-5 text-sm font-semibold text-white transition hover:bg-cyan-800"
              >
                Send
              </button>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Chatbox;
