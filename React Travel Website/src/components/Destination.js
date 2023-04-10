import "./DestinationStyle.css";

const Destination = (props) => {
  return (
    <div className="destination">
      <h1>{props.title}</h1>
      <p>{props.title_text}</p>

      <div className={props.cName}>
        <div className="des-text">
          <h2>{props.city}</h2>
          <p>{props.description}</p>
        </div>

        <div className="image">
          <img alt="Mountain" src={props.image1} />
          <img alt="Mountain" src={props.image2} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
