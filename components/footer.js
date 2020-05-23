import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-500">
      <ul className="flex items-center justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-white">
        <li>
          Created by{` `}
          <a
            className="font-bold"
            href="https://bryant.io"
            rel="noreferrer"
            target="_blank"
          >
            Taylor Bryant
          </a>
        </li>

        <li>
          <a
            className="font-bold"
            href="https://github.com/oddstronaut/tailwind-next"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
