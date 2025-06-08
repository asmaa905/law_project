"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("الرئيسية");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-[200px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">


        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">افتح القائمة الرئيسية</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="/" className="block w-[200px] h-[75px]">
            <img
              src="https://rowadalhikmah.com/wp-content/uploads/2023/01/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A9-1-h.png"
              alt="Company Logo"
            />
          </a>
        </div>

        {/* Navigation Me nu */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* Language and Search */}
            <div className="md:flex items-center hidden">
              <div className="language mr-[5px]">
                <div className="ar hidden h-full w-full">
                  <div className="text mr-[5px]">
                    <span className={styles.navtext}>AR</span>
                  </div>
                  <div className="image">
                    <img src="assets/images/flags/ar.jpg" alt="arabic" />
                  </div>
                </div>
                <div className="en flex flex-row items-center justify-between h-full w-full">
                  <div className="text mr-[5px]">
                    <span className={styles.navtext}>EN</span>
                  </div>
                  <div className="image w-[25px] h-fit">
                    <img src="assets/images/flags/en.jpg" className="h-full w-full" alt="english" />
                  </div>
                </div>
              </div>

              <button className={`${styles.consult} ${styles.fontFamilyChanga} mr-[5px]`}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-white font-normal text-[22px] leading-[44px]"
                />
              </button>

              <button className={`${styles.consult} ${styles.fontFamilyChanga} text-white mr-[5px] font-light text-[16px] leading-[26px]`}>
                استشارتك
              </button>
            </div>

            <li className="navlink">
              <Link
                href="/contactUs"
                passHref
                className={`${styles.navtext} block py-2 px-3 ${activeLink === "تواصل معنا" ? styles.active : ''} block py-2 px-3`}
                onClick={() => handleLinkClick("انظمة ومقالات")} aria-current="page">تواصل معنا
              </Link>
            </li>
            <li className={`${styles.navlink}`}>
              <Link
                href="/articles"
                passHref
                className={`${styles.navtext} ${activeLink === "انظمة ومقالات" ? styles.active : ''} block py-2 px-3`}
                onClick={() => handleLinkClick("انظمة ومقالات")}
              >
                انظمة ومقالات
              </Link>
            </li>
            <li className={`${styles.navlink}`}>
              <Link
                href="/services"
                className={`${styles.navtext} ${activeLink === "خدماتنا" ? styles.active : ''} block py-2 px-3`}
                onClick={() => handleLinkClick("خدماتنا")}
              >
                خدماتنا
              </Link>
            </li>
            <li className={`${styles.navlink}`}>
              <Link
                href="/about"
                className={`${styles.navtext} ${activeLink === "نبذة عن الشركة" ? styles.active : ''} block py-2 px-3`}
                onClick={() => handleLinkClick("نبذة عن الشركة")}
              >
                نبذة عن الشركة
              </Link>
            </li>
            <li className={`${styles.navlink}`}>
              <Link
                href="/"
                className={`${styles.navtext} ${activeLink === "الرئيسية" ? styles.active : ''} block py-2 px-3`}
                onClick={() => handleLinkClick("الرئيسية")}
              >
                الرئيسية
              </Link>
            </li>

            {/* Language and Search (moved outside the ul) */}
            <div className="flex items-center md:hidden">
              <div className="language mr-[5px]">
                <div className="ar hidden h-full w-full">
                  <div className="text mr-[5px]">
                    <span className={styles.navtext}>AR</span>
                  </div>
                  <div className="image">
                    <img src="assets/images/flags/ar.jpg" alt="arabic" />
                  </div>
                </div>
                <div className="en flex flex-row items-center justify-between h-full w-full">
                  <div className="text mr-[5px]">
                    <span className={styles.navtext}>EN</span>
                  </div>
                  <div className="image w-[25px] h-fit">
                    <img src="assets/images/flags/en.jpg" className="h-full w-full" alt="english" />
                  </div>
                </div>
              </div>

              <button className={`${styles.consult} ${styles.fontFamilyChanga} mr-[5px]`}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-white font-normal text-[22px] leading-[44px]"
                />
              </button>

              <button className={`${styles.consult} ${styles.fontFamilyChanga} text-white mr-[5px] font-light text-[16px] leading-[26px]`}>
                استشارتك
              </button>
            </div>
          </ul>
        </div>


      </div>
    </nav>
  );
}