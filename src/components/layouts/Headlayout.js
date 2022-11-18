import React from "react";
import Header from "../commons/Header";

const Headlayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Headlayout;
