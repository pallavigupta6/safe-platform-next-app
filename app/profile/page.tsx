import { Mail, Megaphone, Phone, Pencil, Shield, Lock } from 'lucide-react';
import { ProfileHeader } from '@/components/profile-header';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';

function LabelValue({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-gray-900">{value}</p>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileHeader
        title="Your Profile"
        description="Manage your profile, security settings, notifications, and preferences."
      />

      <main className="mx-auto w-full max-w-3xl space-y-6 px-6 py-6">
        <Card className="rounded-xl border bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
          <p className="text-sm text-gray-600">Your personal information and how others see you</p>

          <div className="mt-6 grid gap-4 border-t pt-6 md:grid-cols-[auto_1fr_1fr_1fr_1fr] md:items-center">
            <Avatar className="h-12 w-12 bg-amber-400 text-base font-semibold text-gray-900">
              <AvatarFallback className="bg-amber-400 text-gray-900">JD</AvatarFallback>
            </Avatar>
            <LabelValue label="Name" value="John Doe" />
            <LabelValue label="Employee ID" value="EMP-2024-001" />
            <LabelValue label="Email Address" value="john.anderson@company.com" />
            <LabelValue label="Phone Number" value="+1 (555) 123-4567" />
          </div>
        </Card>

        <Card className="rounded-xl border bg-white p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Security</h2>
              <p className="text-sm text-gray-600">Managed by your organization (Microsoft)</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Manage MFA</Button>
              <Button variant="outline" size="sm" className="border-amber-400">Change Password</Button>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Lock className="mt-0.5 h-5 w-5 text-amber-500" />
              <div>
                <p className="font-semibold text-gray-900">Password</p>
                <p className="text-sm text-gray-600">Managed by your organization</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 text-amber-500" />
              <div>
                <p className="font-semibold text-gray-900">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Managed by your organization</p>
              </div>
            </div>
          </div>

          <Separator className="my-5" />

          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-gray-900">Having Trouble?</p>
              <p className="text-sm text-gray-600">Reach out to your organization&apos;s IT department</p>
            </div>
            <Button variant="outline" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </Card>

        <Card className="rounded-xl border bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-900">Notification Preferences</h2>
          <p className="text-sm text-gray-600">Control how you receive updates and alerts</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-amber-500" />
                <div>
                  <p className="font-semibold text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive account updates and important alerts via email</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Megaphone className="mt-0.5 h-5 w-5 text-amber-500" />
                <div>
                  <p className="font-semibold text-gray-900">Marketing Communications</p>
                  <p className="text-sm text-gray-600">Receive tips, insights, and educational content</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>

          <Separator className="my-5" />

          <div>
            <p className="mb-3 font-semibold text-gray-900">Email me when:</p>
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2"><Checkbox defaultChecked /> New action items require my attention</label>
              <label className="flex items-center gap-2"><Checkbox defaultChecked /> Quarterly performance reports are available</label>
              <label className="flex items-center gap-2"><Checkbox defaultChecked /> Tax documents are ready</label>
              <label className="flex items-center gap-2"><Checkbox /> Meeting reminders (24 hours before)</label>
            </div>
          </div>
        </Card>

        <Card className="rounded-xl border bg-white p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Display Preferences</h2>
              <p className="text-sm text-gray-600">Customize how you view and interact with the platform</p>
            </div>
            <Button variant="outline" size="sm">
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>

          <div className="mt-6 space-y-4 text-sm">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">Language</p>
              <p className="font-semibold text-gray-900">English (US)</p>
            </div>
            <Separator />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">Time Zone</p>
              <p className="font-semibold text-gray-900">Eastern Time (US &amp; Canada)</p>
            </div>
            <Separator />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">Date Format</p>
              <p className="font-semibold text-gray-900">MM/DD/YYYY</p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
