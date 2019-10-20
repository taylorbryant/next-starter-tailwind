function Footer() {
  return (
    <footer className="bg-blue-500">
      <ul className="flex items-center justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm text-white">
        <li>
          Created by{" "}
          <a href="https://bryant.io" target="_blank" className="font-bold">
            Taylor Bryant
          </a>
        </li>

        <li>
          <a
            href="https://github.com/oddstronaut/tailwind-next"
            target="_blank"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
