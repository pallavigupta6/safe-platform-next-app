"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Edit2, Lock, ShieldAlert } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

type Tab = "profile" | "security" | "notifications" | "preferences";

interface NotificationPreferences {
  emailNotifications: boolean;
  smsNotifications: boolean;
  marketingCommunications: boolean;
  newActionItems: boolean;
  quarterlyReports: boolean;
  taxDocuments: boolean;
  meetingReminders: boolean;
}

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  employeeId: string;
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingNotifications, setIsEditingNotifications] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: "John",
    lastName: "Anderson",
    email: "john.anderson@company.com",
    phone: "+1 (555) 123-4567",
    employeeId: "EMP-2024-001",
  });
  const [tempProfileData, setTempProfileData] =
    useState<ProfileData>(profileData);
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    emailNotifications: true,
    smsNotifications: false,
    marketingCommunications: true,
    newActionItems: true,
    quarterlyReports: true,
    taxDocuments: true,
    meetingReminders: false,
  });
  const [tempPreferences, setTempPreferences] =
    useState<NotificationPreferences>(preferences);

  const sidebarItems: { id: Tab; label: string }[] = [
    { id: "profile", label: "Profile" },
    { id: "security", label: "Security" },
    { id: "notifications", label: "Notifications" },
    { id: "preferences", label: "Preferences" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-yellow-400 px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Your Profile</h1>
          <p className="mt-2 text-gray-700">
            Manage your profile, security settings, notifications, and
            preferences.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full rounded-lg px-4 py-3 text-left font-medium transition-colors ${
                    activeTab === item.id
                      ? "bg-yellow-300 text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="lg:col-span-3 space-y-6">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <Card className="border-0 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Profile Information
                      </h2>
                      {isEditingProfile && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <span>* Required</span>
                        </p>
                      )}
                      {!isEditingProfile && (
                        <p className="mt-1 text-sm text-gray-600">
                          Your personal information and how others see you
                        </p>
                      )}
                    </div>
                    {!isEditingProfile && (
                      <Button
                        variant="outline"
                        className="gap-2"
                        size="sm"
                        onClick={() => {
                          setIsEditingProfile(true);
                          setTempProfileData(profileData);
                        }}
                      >
                        <Edit2 className="h-4 w-4" />
                        Edit
                      </Button>
                    )}
                  </div>

                  {!isEditingProfile ? (
                    <>
                      <div className="mb-8 flex items-center gap-4 border-b pb-6">
                        <Avatar className="h-20 w-20">
                          <AvatarImage
                            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                            alt={
                              profileData.firstName + " " + profileData.lastName
                            }
                          />
                          <AvatarFallback className="bg-yellow-400 text-lg font-bold text-gray-900">
                            {profileData.firstName[0]}
                            {profileData.lastName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {profileData.firstName} {profileData.lastName}
                          </h3>
                          <p className="text-gray-600">Executive Participant</p>
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                            First Name
                          </label>
                          <p className="text-base font-medium text-gray-900">
                            {profileData.firstName}
                          </p>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                            Last Name
                          </label>
                          <p className="text-base font-medium text-gray-900">
                            {profileData.lastName}
                          </p>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                            Email Address
                          </label>
                          <p className="text-base font-medium text-gray-900">
                            {profileData.email}
                          </p>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                            Phone Number
                          </label>
                          <p className="text-base font-medium text-gray-900">
                            {profileData.phone}
                          </p>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                            Employee ID
                          </label>
                          <p className="text-base font-medium text-gray-900">
                            {profileData.employeeId}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="space-y-6">
                      <div className="border-b pb-6">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-20 w-20">
                            <AvatarImage
                              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                              alt={
                                tempProfileData.firstName +
                                " " +
                                tempProfileData.lastName
                              }
                            />
                            <AvatarFallback className="bg-yellow-400 text-lg font-bold text-gray-900">
                              {tempProfileData.firstName[0]}
                              {tempProfileData.lastName[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex gap-2">
                            <Button className="bg-gray-700 text-white hover:bg-gray-800">
                              Upload Photo
                            </Button>
                            <Button variant="outline">Remove</Button>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            First Name <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            value={tempProfileData.firstName}
                            onChange={(e) =>
                              setTempProfileData({
                                ...tempProfileData,
                                firstName: e.target.value,
                              })
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Last Name <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="text"
                            value={tempProfileData.lastName}
                            onChange={(e) =>
                              setTempProfileData({
                                ...tempProfileData,
                                lastName: e.target.value,
                              })
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Email Address{" "}
                            <span className="text-red-600">*</span>
                          </label>
                          <input
                            type="email"
                            value={tempProfileData.email}
                            disabled
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none disabled:bg-gray-100 disabled:text-gray-500"
                          />
                          <p className="mt-1 text-sm text-gray-500">
                            Contact support to update your email address
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Phone Number{" "}
                            <span className="text-gray-500">(Optional)</span>
                          </label>
                          <input
                            type="tel"
                            value={tempProfileData.phone}
                            onChange={(e) =>
                              setTempProfileData({
                                ...tempProfileData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Employee ID{" "}
                            <span className="text-gray-500">
                              (System Managed)
                            </span>
                          </label>
                          <input
                            type="text"
                            value={tempProfileData.employeeId}
                            disabled
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none disabled:bg-gray-100 disabled:text-gray-500"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end gap-3 border-t pt-6">
                        <Button
                          variant="outline"
                          onClick={() => setIsEditingProfile(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="bg-gray-700 text-white hover:bg-gray-800"
                          onClick={() => {
                            setProfileData(tempProfileData);
                            setIsEditingProfile(false);
                          }}
                        >
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>

                <Card className="border-0 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        Security
                      </h3>
                      <p className="text-sm text-gray-600">
                        Managed by your organization (Microsoft)
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="gap-2" size="sm">
                        <Lock className="h-4 w-4" />
                        Change Password
                      </Button>
                      <Button variant="outline" className="gap-2" size="sm">
                        <ShieldAlert className="h-4 w-4" />
                        Manage MFA
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <Lock className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">Password</p>
                        <p className="text-sm text-gray-600">
                          Managed by your organization
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "security" && (
              <Card className="border-0 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Security Settings
                </h2>
                <p className="text-gray-600">
                  Security settings management coming soon.
                </p>
              </Card>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <Card className="border-0 bg-white p-6 shadow-sm">
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Notification Preferences
                      </h2>
                      <p className="mt-1 text-sm text-gray-600">
                        Control how you receive updates and alerts
                      </p>
                    </div>
                    {!isEditingNotifications && (
                      <Button
                        variant="outline"
                        className="gap-2"
                        size="sm"
                        onClick={() => {
                          setIsEditingNotifications(true);
                          setTempPreferences(preferences);
                        }}
                      >
                        <Edit2 className="h-4 w-4" />
                        Edit
                      </Button>
                    )}
                  </div>

                  {!isEditingNotifications ? (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Email Notifications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Receive account updates and important alerts via
                            email
                          </p>
                        </div>
                        <div
                          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${preferences.emailNotifications ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}
                        >
                          {preferences.emailNotifications ? "On" : "Off"}
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            SMS Notifications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Get text message alerts for urgent matters
                          </p>
                        </div>
                        <div
                          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${preferences.smsNotifications ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}
                        >
                          {preferences.smsNotifications ? "On" : "Off"}
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Marketing Communications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Receive tips, insights, and educational content
                          </p>
                        </div>
                        <div
                          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${preferences.marketingCommunications ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}
                        >
                          {preferences.marketingCommunications ? "On" : "Off"}
                        </div>
                      </div>

                      <div className="pt-4">
                        <h3 className="mb-4 font-semibold text-gray-900">
                          Email me when:
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded border ${preferences.newActionItems ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}
                            >
                              {preferences.newActionItems && (
                                <svg
                                  className="h-3.5 w-3.5 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            <span
                              className={
                                preferences.newActionItems
                                  ? "font-medium text-gray-900"
                                  : "text-gray-600"
                              }
                            >
                              New action items require my attention
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded border ${preferences.quarterlyReports ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}
                            >
                              {preferences.quarterlyReports && (
                                <svg
                                  className="h-3.5 w-3.5 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            <span
                              className={
                                preferences.quarterlyReports
                                  ? "font-medium text-gray-900"
                                  : "text-gray-600"
                              }
                            >
                              Quarterly performance reports are available
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded border ${preferences.taxDocuments ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}
                            >
                              {preferences.taxDocuments && (
                                <svg
                                  className="h-3.5 w-3.5 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            <span
                              className={
                                preferences.taxDocuments
                                  ? "font-medium text-gray-900"
                                  : "text-gray-600"
                              }
                            >
                              Tax documents are ready
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-5 w-5 items-center justify-center rounded border ${preferences.meetingReminders ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}
                            >
                              {preferences.meetingReminders && (
                                <svg
                                  className="h-3.5 w-3.5 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                            <span
                              className={
                                preferences.meetingReminders
                                  ? "font-medium text-gray-900"
                                  : "text-gray-600"
                              }
                            >
                              Meeting reminders (24 hours before)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Email Notifications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Receive account updates and important alerts via
                            email
                          </p>
                        </div>
                        <Switch
                          checked={tempPreferences.emailNotifications}
                          onCheckedChange={(checked) =>
                            setTempPreferences({
                              ...tempPreferences,
                              emailNotifications: checked,
                            })
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            SMS Notifications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Get text message alerts for urgent matters
                          </p>
                        </div>
                        <Switch
                          checked={tempPreferences.smsNotifications}
                          onCheckedChange={(checked) =>
                            setTempPreferences({
                              ...tempPreferences,
                              smsNotifications: checked,
                            })
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Marketing Communications
                          </h3>
                          <p className="text-sm text-gray-600">
                            Receive tips, insights, and educational content
                          </p>
                        </div>
                        <Switch
                          checked={tempPreferences.marketingCommunications}
                          onCheckedChange={(checked) =>
                            setTempPreferences({
                              ...tempPreferences,
                              marketingCommunications: checked,
                            })
                          }
                        />
                      </div>

                      <div className="pt-4">
                        <h3 className="mb-4 font-semibold text-gray-900">
                          Email me when:
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="newActionItems"
                              checked={tempPreferences.newActionItems}
                              onCheckedChange={(checked) =>
                                setTempPreferences({
                                  ...tempPreferences,
                                  newActionItems: checked === true,
                                })
                              }
                            />
                            <label
                              htmlFor="newActionItems"
                              className="cursor-pointer text-gray-900"
                            >
                              New action items require my attention
                            </label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="quarterlyReports"
                              checked={tempPreferences.quarterlyReports}
                              onCheckedChange={(checked) =>
                                setTempPreferences({
                                  ...tempPreferences,
                                  quarterlyReports: checked === true,
                                })
                              }
                            />
                            <label
                              htmlFor="quarterlyReports"
                              className="cursor-pointer text-gray-900"
                            >
                              Quarterly performance reports are available
                            </label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="taxDocuments"
                              checked={tempPreferences.taxDocuments}
                              onCheckedChange={(checked) =>
                                setTempPreferences({
                                  ...tempPreferences,
                                  taxDocuments: checked === true,
                                })
                              }
                            />
                            <label
                              htmlFor="taxDocuments"
                              className="cursor-pointer text-gray-900"
                            >
                              Tax documents are ready
                            </label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox
                              id="meetingReminders"
                              checked={tempPreferences.meetingReminders}
                              onCheckedChange={(checked) =>
                                setTempPreferences({
                                  ...tempPreferences,
                                  meetingReminders: checked === true,
                                })
                              }
                            />
                            <label
                              htmlFor="meetingReminders"
                              className="cursor-pointer text-gray-900"
                            >
                              Meeting reminders (24 hours before)
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-3 border-t pt-6">
                        <Button
                          variant="outline"
                          onClick={() => setIsEditingNotifications(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          className="bg-gray-900 text-white hover:bg-gray-800"
                          onClick={() => {
                            setPreferences(tempPreferences);
                            setIsEditingNotifications(false);
                          }}
                        >
                          Save Preferences
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            )}

            {activeTab === "preferences" && (
              <Card className="border-0 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Preferences
                </h2>
                <p className="text-gray-600">
                  Preference settings management coming soon.
                </p>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
