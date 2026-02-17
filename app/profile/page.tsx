import dynamic from 'next/dynamic';
import { ProfileHeader } from '@/components/profile-header';

const ProfileInformationCard = dynamic(() =>
  import('@/components/profile/profile-information-card').then(
    (module) => module.ProfileInformationCard,
  ),
);
const SecurityCard = dynamic(() =>
  import('@/components/profile/security-card').then(
    (module) => module.SecurityCard,
  ),
);
const NotificationPreferencesCard = dynamic(() =>
  import('@/components/profile/notification-preferences-card').then(
    (module) => module.NotificationPreferencesCard,
  ),
);
const DisplayPreferencesCard = dynamic(() =>
  import('@/components/profile/display-preferences-card').then(
    (module) => module.DisplayPreferencesCard,
  ),
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
