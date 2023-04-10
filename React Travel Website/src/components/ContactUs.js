import "./ContactUsStyle.css";

function ContactUs() {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
      </form>
      <button>Send Message</button>
    </div>
  );
}

export default ContactUs;
