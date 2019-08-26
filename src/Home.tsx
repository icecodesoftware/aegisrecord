import * as React from 'react';
import { Button, Card, Navbar, AnchorButton, NavbarDivider, NavbarGroup, Alignment, Icon, Popover, Menu, MenuItem, Colors, H1 } from "@blueprintjs/core";
import FlexView from 'react-flexview/lib';
import Header from './Header';
export default class Home extends React.Component {
    state = {
        count: 0
    };

    render() {
        return (<FlexView column grow className="bp3-dark">
            <Header />
            <FlexView grow basis="auto" hAlignContent="center" >
                <H1>Header</H1>
                <p>contets</p>
            </FlexView>
            <footer><Navbar>Footer</Navbar></footer>
        </FlexView>);
    }
}