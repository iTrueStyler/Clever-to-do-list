import React from "react";
import { getAuth, signOut } from "firebase/auth";
const Work = () => {
  const auth = getAuth();
  return (
    <>
      <div>WorkPage</div>
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        signOut
      </button>
    </>
  );
};

export default Work;
