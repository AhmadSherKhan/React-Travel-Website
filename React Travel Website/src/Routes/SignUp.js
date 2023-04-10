import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import SignUpForm from "../components/SignUpForm";
import SignupImg from "../assets/10.jpg";

function SignUp() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-about"
        heroImg={SignupImg}
        title="SignUp"
        url="/signup"
        btnClass="hide"
        btnTxt="Travel Plan"
      />
      <SignUpForm />
      <Footer />
    </>
  );
}
export default SignUp;
