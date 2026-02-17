import { Phone, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function SecurityCard() {
  return (
    <Card className="rounded-xl border bg-white p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Security</h2>
          <p className="text-sm text-gray-600">Managed by your organization (Microsoft)</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Manage MFA
          </Button>
          <Button variant="outline" size="sm" className="border-amber-400">
            Change Password
          </Button>
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
  );
}
