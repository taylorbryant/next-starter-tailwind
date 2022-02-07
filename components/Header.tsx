import Link from "next/link";
import { useState, useCallback } from "react";
import cn from "classnames";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const toggleMobileMenu = useCallback(
    (prevState) => setMobileMenuIsOpen(!prevState),
    []
  );

  return (
    <header className="bg-green-600">
      <div className="md:flex-no-wrap mx-auto flex flex-wrap items-center justify-between px-4 py-6 md:px-6 lg:container">
        <div className="flex items-center">
          <Image
            src="/tailwind-logo.svg"
            width={40}
            height={40}
            priority
            alt="Tailwind CSS logo"
          />

          <Link href="/">
            <a className="ml-3 text-lg font-bold text-white md:text-xl">
              Next.js Starter Tailwind
            </a>
          </Link>
        </div>

        <button
          className="flex items-center rounded border border-white px-3 py-2 text-white md:hidden"
          onClick={toggleMobileMenu}
          type="button"
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            "w-full flex-col text-sm md:flex md:w-auto md:flex-row md:items-center md:justify-center",
            isMobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "Home", route: "/" },
            { title: "About", route: "/about" },
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={title}>
              <Link href={route}>
                <a className="block text-white">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
