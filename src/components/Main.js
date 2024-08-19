import React from "react";
import NavBar from "./NavBar";

export default function Main({ children }) {
  return (
    <div className="h-full">
      <div className=" mt-0 h-[80px] w-full">
        <NavBar />
      </div>
      {children}
    </div>
  );
}
