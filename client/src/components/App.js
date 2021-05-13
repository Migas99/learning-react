import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "./NotFound";
import Header from "./Header";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={StreamList} />
          <Route path="/streams/new" exact={true} component={StreamCreate} />
          <Route path="/streams/edit" exact={true} component={StreamEdit} />
          <Route path="/streams/delete" exact={true} component={StreamDelete} />
          <Route path="/streams/show" exact={true} component={StreamShow} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
