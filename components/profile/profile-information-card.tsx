import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

function LabelValue({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-gray-900">{value}</p>
    </div>
  );
}

export function ProfileInformationCard() {
  return (
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
  );
}
