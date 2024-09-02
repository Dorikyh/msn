"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaShieldDog } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-6 max-w-[360px] lg:mb-16">
                <Link href="/" className="flex items-center mb-2 inline-block">
                <FaShieldDog className="text-3xl" />
                <p className="ml-4 text-3xl font-extrabold">msn</p>
                </Link>
                <p className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  The security your pets need
                </p>
                <div className="flex items-center text-2xl">
                <Link href="https://x.com/MSN_fblanca?t=JkwopBQYSXMhL7DTpgDEQQ&s=09" className="mr-4">
                    <FaXTwitter />
                </Link>
                <Link href="https://www.instagram.com/msn_fblanca?igsh=MWYxNHBvZ3dpNHZvdA==" className="mr-4">
                    <FaInstagram />
                  </Link>
                  <Link href="/">
                  <FaGlobeAmericas />
                  </Link>
                
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                  Links de Ayuda
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Sobre Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Nuestro Equipo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              Proyecto Desarrollado Por {" "}
              <a
                href="https://msn-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Equipo M.S.N
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
