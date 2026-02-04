import { PageShell } from '@/components/page-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <PageShell
      title="Dashboard"
      description="Overview of your accounts, tasks, and recent activity."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {['Portfolio health', 'Active workflows', 'Notifications'].map((item) => (
          <Card key={item}>
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-900">
                {item}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              You have no new updates in this section yet.
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
