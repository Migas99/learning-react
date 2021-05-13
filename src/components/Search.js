import React, { useState, useEffect } from "react";

import Accordion from "./Accordion";

import wikipedia from "../api/wikipedia";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await wikipedia.search(query);
      if (response.data.query && response.data.query.search) {
        setResults(
          response.data.query.search.map((res) => {
            const result = {
              title: res.title,
              content: res.snippet,
            };
            return result;
          })
        );
      } else {
        setResults([]);
      }
    };

    const timeOutId = setTimeout(() => {
      if (query) fetchData();
      else setResults([]);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [query]);

  const onChangeSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="field">
          <label>Search</label>
          <input className="input" value={query} onChange={onChangeSearch} />
        </div>
      </div>
      <div className="ui segment">
        {results.length === 0 ? <p>No results</p> : <Accordion items={results} />}
      </div>
    </div>
  );
};

export default Search;
