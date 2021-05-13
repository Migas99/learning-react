import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it's chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (2 < month < 9) {
    //Return Summer if lat > 0
    return lat > 0 ? "summer" : "winter";
  }

  return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  // It's like an if statement
  //   const text =
  //     season === "Winter" ? "Burr, it is chilly!" : "Lets hit the beach!";
  //   const icon = season === "Winter" ? "snowflake" : "sun";

  // Joins the icon variable value with the 'icon' string
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
