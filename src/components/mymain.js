import React from "react";
import Leftmain from "../components/leftmain";
import Rightmain from "../components/rightmain";
function MyMain() {
  return (
    <div className="w-full flex">
      <Leftmain />
      <Rightmain />
    </div>
  );
}

export default MyMain;
