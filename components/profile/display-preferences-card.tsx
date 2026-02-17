'use client';

import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function DisplayPreferencesCard() {
  return (
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
  );
}
