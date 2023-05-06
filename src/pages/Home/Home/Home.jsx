import React from "react";
import useTitle from "./../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <h2>this is home page</h2>
    </div>
  );
};

export default Home;
