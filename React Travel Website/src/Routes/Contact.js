import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import ContactImg from "../assets/2.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={ContactImg}
        title="Contact"
        url="/about"
        btnClass="hide"
        btnTxt="Travel Plan"
      />
      <ContactUs />
      <Footer />
    </>
  );
}
export default Contact;
