import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="mx-auto max-w-7xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to Triscend
        </h1>
        <p className="mt-4 text-gray-600">
          Your navigation bar is ready and fully functional.
        </p>
      </div>
    </div>
  );
}
