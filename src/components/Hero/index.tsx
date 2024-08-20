import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";

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
            src="https://media.discordapp.net/attachments/1268670062580203641/1274495214970601483/dog.webp?ex=66c275aa&is=66c1242a&hm=d8d494006949704e611e222325fe1623f19b481e910b0932611143c7b3fffe3b&=&format=webp&width=640&height=426"
            alt="Dog background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="blur-sm"
          />
          <div className="absolute inset-0 dark:bg-black opacity-50"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="flex justify-center">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-1 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Mobile Security Necklace
              </h1>
              <p className="mb-6 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                The security your pets need, right at your fingertips with our smart collar
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/"
                  className="flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  <FaYoutube className="mr-2 text-xl" />
                  Watch Demo
                </Link>
                <Link
                  href="https://www.instagram.com/msn_fblanca"
                  className="flex items-center rounded-lg bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                >
                  <FaInstagram className="mr-2 text-xl" />
                  Follow us
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
