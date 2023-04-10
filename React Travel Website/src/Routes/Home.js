import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/footer";

import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import Mountain5 from "../assets/5.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={require("../assets/12.jpg")}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        url="/"
        btnClass="show"
        btnTxt="Travel Plan"
      />
      <Destination
        cName="first-des"
        title="Popular Destinations"
        title_text="Tours give you the opportunity to see a lot, within a time frame"
        city="Lahore, Pakistan"
        description="Lahore was annexed to the British Raj in 1849 and became the capital
      of British Punjab Lahore was central to the independence movements
      of both India and Pakistan, with the city being the site of both the
      declaration of Indian Independence and the resolution calling for
      the establishment of Pakistan."
        image1={Mountain1}
        image2={Mountain2}
      />
      <Destination
        cName="first-des-reverse"
        city="Balochistan, Pakistan"
        description="Lahore was annexed to the British Raj in 1849 and became the capital
      of British Punjab Lahore was central to the independence movements
      of both India and Pakistan, with the city being the site of both the
      declaration of Indian Independence and the resolution calling for
      the establishment of Pakistan."
        image1={Mountain3}
        image2={Mountain4}
      />
      <Trip
        title="Recent Trips"
        title_text="You can discover unique
      destination using google maps"
        img={Mountain5}
        heading="Lahore, Pakistan"
        text="Lahore is the second-largest city of
       Pakistan and the provincial capital of 
       Punjab. Historically, it is said to be
        about 2000 years old. In the earliest times,
         it was a colony of Kangra hill Kingdoms
          and was a cut-off township on 
         the trade route to Delhi. It had hardly 
         any reputation in the Pre-Muslim era."
      />
      <Footer />
    </>
  );
}
export default Home;
