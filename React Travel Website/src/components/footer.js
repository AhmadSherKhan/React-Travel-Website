import "./footerStyle.css";

function footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h2>Trippy</h2>
          <p>Choose your favourite Destination</p>
        </div>
        <div>
          <a href="#">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-pinterest-square"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="#">Changelog</a>
          <a href="#">Versions</a>
          <a href="#">Status</a>
          <a href="#">License</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="#">Github</a>
          <a href="#">Issues</a>
          <a href="#">Twitter</a>
          <a href="#">Project</a>
        </div>

        <div>
          <h4>Help</h4>
          <a href="#">Support</a>
          <a href="#">TroubleShooting</a>
          <a href="#">Contactus</a>
          <a href="#">Socials</a>
        </div>

        <div>
          <h4>Others</h4>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">License</a>
          <a href="#">Agreement</a>
        </div>
      </div>
      <p className="credits">Created by M.Ahmad Sher</p>
    </div>
  );
}

export default footer;
