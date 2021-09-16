import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../auth";
import { Link } from "react-router-dom";
import Header from "../../core/components/Header";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      history.push("/");
    } catch {
      alert("User not found");
    }
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    console.log(currentUser);
    return <Redirect to="/" />;
  }
  return (
    <>
      <Header text={"login"} />
      <div className="form">
        <div className="form__main">
          <form onSubmit={handleLogin}>
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

            <button type="submit">Login</button>
          </form>
        </div>

        <div className="form__footer">
          <span className="form__footer-title">HaventAccount?</span>

          <Link to="/register">CreateAccount</Link>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
