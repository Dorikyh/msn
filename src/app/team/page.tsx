import Team from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MSN | Team",
  description: "This is Team Page",
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
