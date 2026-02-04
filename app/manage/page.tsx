import { PageShell } from '@/components/page-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ManagePage() {
  return (
    <PageShell
      title="Manage"
      description="Coordinate participants, approvals, and ongoing requests."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {['Participant management', 'Access requests'].map((item) => (
          <Card key={item}>
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-900">
                {item}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Manage workflows will appear once enabled.
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
