import { Mail, Megaphone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';

export function NotificationPreferencesCard() {
  return (
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
          <label className="flex items-center gap-2">
            <Checkbox defaultChecked /> New action items require my attention
          </label>
          <label className="flex items-center gap-2">
            <Checkbox defaultChecked /> Quarterly performance reports are available
          </label>
          <label className="flex items-center gap-2">
            <Checkbox defaultChecked /> Tax documents are ready
          </label>
          <label className="flex items-center gap-2">
            <Checkbox /> Meeting reminders (24 hours before)
          </label>
        </div>
      </div>
    </Card>
  );
}
