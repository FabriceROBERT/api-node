import React from "react";

export default function NavBar() {
  return (
    <div className="bg-sky-700 shadow-md h-[80px] w-full">
      <div className="flex px-6 justify-between items-center h-full">
        <h1>Logo</h1>
        <div className="flex gap-3 justify-center items-center h-full">
          <h1>Connexion</h1>
          <h1>Inscription</h1>
        </div>
      </div>
    </div>
  );
}
