import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip(props) {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Lahore"
          text="Pakistan has a total area of 803,940 square kilometers, slightly greater than France and the United Kingdom put together. Pakistan is located in South Asia. To the south is the Arabian Sea, with 1,046 km of Pakistani coastline.
         To Pakistan's east is India, which has a 2,912 km border with Pakistan."
        />

        <TripData
          image={Trip2}
          heading="Trip in Islamabad"
          text="Pakistan has a total area of 803,940 square kilometers, slightly greater than France and the United Kingdom put together. Pakistan is located in South Asia. To the south is the Arabian Sea, with 1,046 km of Pakistani coastline.
         To Pakistan's east is India, which has a 2,912 km border with Pakistan."
        />

        <TripData
          image={Trip3}
          heading="Trip in Hunza"
          text="Pakistan has a total area of 803,940 square kilometers, slightly greater than France and the United Kingdom put together. Pakistan is located in South Asia. To the south is the Arabian Sea, with 1,046 km of Pakistani coastline.
         To Pakistan's east is India, which has a 2,912 km border with Pakistan."
        />
      </div>
    </div>
  );
}
export default Trip;
