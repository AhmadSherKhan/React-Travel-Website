import "./HeroStyle.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="randomimg" src={props.heroImg} />

        <div className="hero-txt">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnTxt}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;
