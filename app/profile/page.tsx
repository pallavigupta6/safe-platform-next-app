import dynamic from 'next/dynamic';
import { ProfileHeader } from '@/components/profile-header';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function SectionLoadingCard() {
  return (
    <Card className="rounded-xl border bg-white p-6">
      <Skeleton className="mb-3 h-7 w-64" />
      <Skeleton className="mb-6 h-4 w-96" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </Card>
  );
}

const ProfileInformationCard = dynamic(
  () =>
    import('@/components/profile/profile-information-card').then(
      (module) => module.ProfileInformationCard,
    ),
  {
    ssr: false,
    loading: () => <SectionLoadingCard />,
  },
);

const SecurityCard = dynamic(
  () =>
    import('@/components/profile/security-card').then(
      (module) => module.SecurityCard,
    ),
  {
    ssr: false,
    loading: () => <SectionLoadingCard />,
  },
);

const NotificationPreferencesCard = dynamic(
  () =>
    import('@/components/profile/notification-preferences-card').then(
      (module) => module.NotificationPreferencesCard,
    ),
  {
    ssr: false,
    loading: () => <SectionLoadingCard />,
  },
);

const DisplayPreferencesCard = dynamic(
  () =>
    import('@/components/profile/display-preferences-card').then(
      (module) => module.DisplayPreferencesCard,
    ),
  {
    ssr: false,
    loading: () => <SectionLoadingCard />,
  },
);

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileHeader
        title="Your Profile"
        description="Manage your profile, security settings, notifications, and preferences."
      />

      <main className="mx-auto w-full max-w-3xl space-y-6 px-6 py-6">
        <ProfileInformationCard />
        <SecurityCard />
        <NotificationPreferencesCard />
        <DisplayPreferencesCard />
      </main>
    </div>
  );
}
