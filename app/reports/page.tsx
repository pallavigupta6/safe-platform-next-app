import { PageShell } from '@/components/page-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ReportsPage() {
  return (
    <PageShell
      title="Reports"
      description="Generate plan reports with compliance-ready exports."
      actions={<Button>New report</Button>}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold text-gray-900">
            Scheduled reports
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-gray-600">
          No reports scheduled. Create one to automate updates.
        </CardContent>
      </Card>
    </PageShell>
  );
}
