import React from "react";
import { getAuth } from "firebase/auth";
import TaskList from "../../core/components/TaskList";
import Header from "../../core/components/Header";
import Calendar from "../../core/components/Calendar";
// import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
// import { db } from "../../firebase";

const Work = () => {
  const auth = getAuth();

  return (
    <>
      <Header text={"work"} />
      <Calendar />

      <TaskList />

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
