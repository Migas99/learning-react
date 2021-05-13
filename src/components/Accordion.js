import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onTitleClick = (item) => {
    if (activeItem === item) setActiveItem(null);
    else setActiveItem(item);
  };

  const isActive = (item) => {
    if (activeItem === item) {
      return "active";
    }
  };

  return (
    <div className="container">
      <label className="label">Accordion</label>
      <div className="ui styled accordion">
        {items.map((item) => {
          return (
            <div key={item.title}>
              <div
                className={`title ${isActive(item)}`}
                onClick={() => onTitleClick(item)}
              >
                <i className="dropdown icon" />
                {item.title}
              </div>
              <div className={`content ${isActive(item)}`}>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
