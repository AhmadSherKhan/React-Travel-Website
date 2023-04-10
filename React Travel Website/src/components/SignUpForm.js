import "./SignupFormStyle.css";

function SignUpForm() {
  return (
    <form className="sign-up-form">
      <h2>Sign Up</h2>
      <div className="form-group">
        <input type="email" id="email" required placeholder="Email" />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Password" id="password" required />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
