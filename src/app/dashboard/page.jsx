"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';



const DashboardPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') {
      return;
    }

    if (status === 'unauthenticated') {
      router.push('/auth/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
      <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>

      </section>
  );
};

export default DashboardPage;
