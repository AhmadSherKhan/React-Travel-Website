import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import AboutUs from "../components/About";
import AboutImg from "../assets/night.jpg";

function About(props) {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={AboutImg}
        title="About"
        url="/about"
        btnClass="hide"
        btnTxt="Travel Plan"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
