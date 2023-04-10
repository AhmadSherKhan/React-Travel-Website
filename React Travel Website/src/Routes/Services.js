import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Trip from "../components/Trip";
import Hero from "../components/Hero";
import ServiceImg from "../assets/10.jpg";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={ServiceImg}
        title="Service"
        url="/about"
        btnClass="hide"
        btnTxt="Travel Plan"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Services;
