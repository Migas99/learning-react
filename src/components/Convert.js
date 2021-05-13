import React, { useState, useEffect } from "react";

import google from "../api/translator";

const Convert = ({ sentence, language }) => {
  const defaultMessage = "Translation goes here ...";

  const [translation, setTranslation] = useState(defaultMessage);
  const [text, setText] = useState(sentence);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setText(sentence);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [sentence]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await google.translate(text, language.value);
      if (response.data) {
        setTranslation(response.data.data);
      } else {
        setTranslation("Something went wrong with the translation!");
      }
    };

    if (text) fetchData();
    else setTranslation(defaultMessage);
  }, [text, language]);

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Text translated</label>
        <div className="ui segment">
          <label className="label">{translation}</label>
        </div>
      </div>
    </div>
  );
};

export default Convert;
