import React from "react";
import "../css/Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>

      {newsArticle("PAPA React is back", "Top news - 9099 readers")}
      {newsArticle("PAPA React is back", "Top news - 9099 readers")}
      {newsArticle("PAPA React is back", "Top news - 9099 readers")}
      {newsArticle("PAPA React is back", "Top news - 9099 readers")}
    </div>
  );
}

export default Widgets;
