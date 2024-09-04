"use client";

import Sidebar from './components/Sidebar';
import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar /> 
      <main className="flex-1 p-1 sm:p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
