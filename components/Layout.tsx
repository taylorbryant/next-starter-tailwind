import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto flex-1 px-4 py-6 md:px-6 md:py-12 lg:container">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
