import { PageShell } from '@/components/page-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PerformancePage() {
  return (
    <PageShell
      title="Performance"
      description="Track plan performance and compare key metrics."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {['Contribution trends', 'Funding status'].map((item) => (
          <Card key={item}>
            <CardHeader>
              <CardTitle className="text-base font-semibold text-gray-900">
                {item}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Data will sync once reporting is connected.
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
