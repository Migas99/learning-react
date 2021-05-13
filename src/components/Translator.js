import React, { useState, useEffect, useRef } from "react";

import Dropdown from "./Dropdown";
import Convert from "./Convert";

import google from "../api/translator";

const Translator = () => {
  const languages = google.languages;

  const [sentence, setSentence] = useState("");
  const [language, setLanguage] = useState(languages[0]);
  
  const onChangeInput = (event) => {
    setSentence(event.target.value);
  };

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Enter here the text to translate</label>
        <input className="input" value={sentence} onChange={onChangeInput} />
      </div>
      <div className="field">
        <Dropdown
          label="Select language"
          selected={language}
          onSelectedChange={setLanguage}
          options={languages}
        />
      </div>
      <Convert sentence={sentence} language={language} />
    </div>
  );
};

export default Translator;
