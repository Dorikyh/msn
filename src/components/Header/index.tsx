import { useState } from "react";
import { FaShieldDog } from "react-icons/fa6";
import Link from "next/link";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { MdSpaceDashboard } from "react-icons/md";

interface SubmenuItem {
  title: string;
  path?: string; // Optional path
}

interface MenuItem {
  title: string;
  path?: string; // Optional path
  submenu?: SubmenuItem[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className="header sticky top-0 left-0 z-40 flex w-full items-center bg-white !bg-opacity-80 shadow-fixed backdrop-blur-sm dark:bg-gray-dark dark:shadow-fixed-dark p-4 md:p-2"
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <a href="/">
              <div className="flex items-center w-60 max-w-full px-4 xl:mr-12">
                <FaShieldDog className="text-3xl" />
                <p className="ml-4 text-3xl font-extrabold">msn</p>
              </div>
            </a>
            <div className="flex w-full items-center justify-between px-4">
              <div className="flex items-center space-x-4">
                {/* Button to toggle the menu */}
                <button
                  onClick={toggleMenu}
                  className="lg:hidden p-2 text-dark dark:text-white z-50"
                >
                  {/* Menu Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-40 w-[250px] rounded-lg border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    isMenuOpen ? "block" : "hidden lg:block"
                  }`}
                  style={{ top: '100%', right: 0 }} // Ensure the dropdown is positioned correctly
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <div>
                            <p className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6">
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            {menuItem.submenu && (
                              <div className="submenu absolute left-0 top-full rounded-lg bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full">
                                {menuItem.submenu.map((submenuItem, submenuIndex) =>
                                  submenuItem.path ? (
                                    <Link
                                      href={submenuItem.path}
                                      key={submenuIndex}
                                      className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                    >
                                      {submenuItem.title}
                                    </Link>
                                  ) : (
                                    <span
                                      key={submenuIndex}
                                      className="block rounded py-2.5 text-sm text-dark dark:text-white/70 lg:px-3"
                                    >
                                      {submenuItem.title}
                                    </span>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="hidden lg:flex items-center ease-in-up shadow-btn hover:shadow-btn-hover rounded-lg bg-primary p-3 text-base font-bold text-white transition duration-300 hover:bg-opacity-90"
                >
                  <MdSpaceDashboard className="text-xl" />
                  <span className="ml-2">Dashboard</span>
                </Link>
                <div className="flex items-center">
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
