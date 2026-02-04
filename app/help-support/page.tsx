import { PageShell } from '@/components/page-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function HelpSupportPage() {
  return (
    <PageShell
      title="Help & Support"
      description="Find answers quickly or connect with the support team."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold text-gray-900">
              Knowledge base
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            Browse our help center for guides, policies, and FAQs.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold text-gray-900">
              Contact support
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-600">
            Email <Link className="font-medium text-blue-600" href="mailto:support@triscend.com">support@triscend.com</Link> for assistance.
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
