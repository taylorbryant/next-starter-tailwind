export default function Footer() {
  return (
    <footer className="bg-blue-600">
      <ul className="mx-auto flex items-center justify-between px-4 py-6 text-sm text-white md:px-6 lg:container">
        <li>
          Created by{" "}
          <a
            href="https://taylorbryant.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Taylor Bryant
          </a>
        </li>

        <li>
          <a
            href="https://github.com/oddstronaut/next-starter-tailwind"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
