import React, { useState } from "react";
import { withRouter } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import Header from "../../core/components/Header";

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
      <Header text={"register"} />
      <div className="form">
        <div className="form__main">
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
        </div>
        <div className="form__footer">
          <span>Already have a account?</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Register);
