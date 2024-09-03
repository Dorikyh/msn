import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-gray-dark"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src="/images/dog.webp"
            alt="Dog background"
            fill // Use fill to make the image cover the container
            style={{ objectFit: "cover", objectPosition: "center" }} // Center the image and cover the container
            quality={100}
            className="blur-sm"
          />
          <div className="absolute inset-0 dark:bg-black opacity-50"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="text-5xl font-extrabold sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight bg-gradient-to-r from-primary to-amber-700 bg-clip-text text-transparent">
                Mobile Security Necklace.
              </h1>
              <p className="mb-6 !leading-relaxed text-gray-300 dark:text-body-color-dark sm:text-lg md:text-xl">
                The security your pets need, in a unique and singular necklane 😉
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/dashboard"
                  className="flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  <MdSpaceDashboard className="mr-2 text-xl" />
                  Dashboard 
                </Link>
                <Link
                  href="/team"
                  className="flex items-center rounded-lg bg-gray-400 bg-opacity-50 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 bg-white/10 text-white hover:bg-white/5"
                >
                  <FaUser className="mr-2 text-xl" />
                  Equipo 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;