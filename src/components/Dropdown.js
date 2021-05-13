import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({label, selected, onSelectedChange, options }) => {
  const [open, setOpen] = useState(false);
  const componentRoot = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (componentRoot.current.contains(event.target)) return;
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, {
      capture: true,
    });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <div ref={componentRoot} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {options.map((option, index) => {
              if (option.value === selected.value) return null;
              return (
                <div
                  key={index}
                  className="item"
                  onClick={() => onSelectedChange(option)}
                >
                  {option.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
