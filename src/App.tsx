import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Counter from "./Counter";
import Home from "./Home";
import FlexView from "react-flexview";

render(<BrowserRouter >
    <FlexView column height="100vh" className="bp3-dark">
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
    </FlexView>
</BrowserRouter>
    , document.getElementById('main'));