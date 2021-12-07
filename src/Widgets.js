import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        {/* <SearchIcon className="widgets__searchIcon" /> */}
        <input placeholder="Search Twitter" type="text" />
      </div>
    </div>
  );
}

export default Widgets;
