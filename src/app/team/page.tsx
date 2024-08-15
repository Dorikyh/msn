import Team from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSN | Team",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Team />
    </>
  );
};

export default AboutPage;
