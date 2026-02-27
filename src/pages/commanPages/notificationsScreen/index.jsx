import React, { useMemo, useState } from "react";
import {
    BriefcaseBusiness,
    CalendarDays,
    Clock3,
    CreditCard,
    FileText,
} from "lucide-react";

const notificationTypeConfig = {
    interview: {
        icon: CalendarDays,
        iconColor: "text-amber-500",
        iconBorder: "border-amber-500",
        unreadBorder: "border-amber-500",
        unreadDot: "bg-amber-500",
    },
    subscription: {
        icon: CreditCard,
        iconColor: "text-emerald-500",
        iconBorder: "border-emerald-500",
        unreadBorder: "border-emerald-500",
        unreadDot: "bg-emerald-500",
    },
    application: {
        icon: BriefcaseBusiness,
        iconColor: "text-indigo-500",
        iconBorder: "border-indigo-500",
        unreadBorder: "border-indigo-500",
        unreadDot: "bg-indigo-500",
    },
    update: {
        icon: FileText,
        iconColor: "text-[#2A4870]",
        iconBorder: "border-[#2A4870]",
        unreadBorder: "border-gray-100",
        unreadDot: "bg-[#2A4870]",
    },
};

const seedNotifications = [
    {
        type: "interview",
        message: "You have schedule a job interview.",
    },
    {
        type: "subscription",
        message: "You have purchased a subscription plan.",
    },
    {
        type: "application",
        message: "You have applied for an employee position.",
    },
    {
        type: "update",
        message: "You have updated the job.",
    },
    {
        type: "update",
        message: "You have updated a schedule for job interview.",
    },
];

const formatNotificationTime = (dateValue) =>
    dateValue.toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

const NotificationsScreen = () => {
    const initialNotifications = useMemo(
        () =>
            Array.from({ length: 83 }, (_, index) => {
                const seed = seedNotifications[index % seedNotifications.length];
                const timeOffsetMinutes = index * 53;
                const createdAt = new Date(Date.now() - timeOffsetMinutes * 60 * 1000);

                return {
                    id: index + 1,
                    type: seed.type,
                    message: seed.message,
                    createdAt: formatNotificationTime(createdAt),
                    read: index > 2,
                };
            }),
        []
    );

    const [notifications, setNotifications] = useState(initialNotifications);
    const [activeTab, setActiveTab] = useState("all");

    const unreadCount = notifications.filter((notification) => !notification.read).length;
    const readCount = notifications.length - unreadCount;

    const filteredNotifications = notifications.filter((notification) => {
        if (activeTab === "unread") return !notification.read;
        if (activeTab === "read") return notification.read;
        return true;
    });

    const tabs = [
        { key: "all", label: `All (${notifications.length})` },
        { key: "unread", label: `Unread (${unreadCount})` },
        { key: "read", label: `Read (${readCount})` },
    ];

    const handleMarkAllAsRead = () => {
        setNotifications((previous) =>
            previous.map((notification) => ({ ...notification, read: true }))
        );
    };

    return (
        <section className="space-y-6">
            <div className="w-full rounded-2xl border border-gray-100 bg-white p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="inline-flex flex-wrap items-center gap-2">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.key;
                            return (
                                <button
                                    key={tab.key}
                                    type="button"
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`inline-flex h-10 items-center justify-center rounded-[10px] px-4 text-base font-medium leading-6 transition-colors ${isActive
                                        ? "rounded-2xl bg-gradient-to-b from-slate-900 to-blue-900 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        type="button"
                        onClick={handleMarkAllAsRead}
                        className="self-start text-sm font-medium leading-5 text-cyan-900 transition-opacity hover:opacity-80 lg:self-auto"
                    >
                        Mark all as read
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {filteredNotifications.map((notification) => {
                    const config = notificationTypeConfig[notification.type] ?? notificationTypeConfig.update;
                    const NotificationIcon = config.icon;
                    const isUnread = !notification.read;

                    return (
                        <article
                            key={notification.id}
                            className={`w-full rounded-2xl bg-white p-4 ${isUnread
                                ? `border ${config.unreadBorder} shadow-md`
                                : "border border-gray-100"
                                }`}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`flex size-12 items-center justify-center rounded-2xl border bg-white shadow-lg ${config.iconBorder}`}
                                >
                                    <NotificationIcon className={`h-6 w-6 ${config.iconColor}`} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4">
                                        <p
                                            className={`text-sm leading-6 ${isUnread ? "font-medium text-slate-900" : "font-normal text-gray-600"
                                                }`}
                                        >
                                            {notification.message}
                                        </p>
                                        {isUnread ? (
                                            <span className={`mt-1 h-2.5 w-2.5 rounded-full ${config.unreadDot}`} />
                                        ) : null}
                                    </div>

                                    <div className="mt-2 inline-flex items-center gap-2">
                                        <Clock3 className="h-3.5 w-3.5 text-slate-400" />
                                        <span className="text-xs font-normal leading-4 text-slate-400">
                                            {notification.createdAt}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default NotificationsScreen;
