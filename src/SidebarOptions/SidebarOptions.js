import React from "react";
import "./SidebarOptions.css";

function SidebarOPtions({ active, text, Icon }) {
  return (
    <div className={`SidebarOption ${active && "SidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOPtions;
