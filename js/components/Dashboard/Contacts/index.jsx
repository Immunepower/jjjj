import React from "react";
import { SOCIALS } from "./constants";
import Social from "./Social";

const Contacts = ({ darkMode }) => (
  <div className="space-y-3 float-right -mr-5 mt-10 flex flex-col">
    {SOCIALS.map((social, index) => (
      <div key={index}>
        <Social darkMode={darkMode} social={social} />
      </div>
    ))}
  </div>
);

export default Contacts;
