import React, { useState } from "react";

import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translator from "./components/Translator";
import Route from "./Route";

import data from "./api/staticData";
import options from "./api/dropdownOptions";

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={data} />;
  }
};

const showSearch = () => {
  if (window.location.pathname === "/search") {
    return <Search />;
  }
};

const showDropdown = (selected, setSelected) => {
  if (window.location.pathname === "/dropdown") {
    return (
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    );
  }
};

const showTranslator = () => {
  if (window.location.pathname === "/translator") {
    return <Translator />;
  }
};

// const showComponent = (route, component) => {
//   return window.location.pathname === route ? component : null;
// };

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <div className="ui segment">
        <Route path="/">
          <Accordion items={data} />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
          />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/translator">
          <Translator />
        </Route>
      </div>
    </div>
  );
};

export default App;
