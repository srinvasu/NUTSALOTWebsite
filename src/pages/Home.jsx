import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Home;
