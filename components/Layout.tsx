import Header from "./Header";
import Footer from "./Footer";
import { FC } from "react";

const Layout: FC = ({ children }) => (
  <div className="flex min-h-screen flex-col">
    <Header />

    <main className="mx-auto flex-1 px-4 py-6 md:px-6 md:py-12 lg:container">
      {children}
    </main>

    <Footer />
  </div>
);

export default Layout;
