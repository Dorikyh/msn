import Team from "@/components/Team";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSN | Team",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Team"
        description="MSN Development Team."
      />
      <Team />
    </>
  );
};

export default AboutPage;
