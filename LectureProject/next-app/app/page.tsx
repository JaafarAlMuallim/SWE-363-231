import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Body />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
