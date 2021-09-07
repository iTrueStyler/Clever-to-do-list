import React, { useState } from "react";
import { withRouter } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      history.push("/");
    } catch {
      alert("Something goes wrong");
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Email
          <input
            name="Email"
            type="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Password
          <input
            name="Password"
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <span>Already have a account?</span>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default withRouter(Register);
