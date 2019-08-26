import * as React from 'react';
import { Button, Card, Navbar, AnchorButton, NavbarDivider, NavbarGroup, Alignment, Icon, Popover, Menu, MenuItem, Colors } from "@blueprintjs/core";
import Counter from './Counter';
import { ALIGNMENT_HORIZONTAL_CENTER } from '@blueprintjs/icons/lib/esm/generated/iconContents';
import FlexView from 'react-flexview/lib';
export default class Header extends React.Component {

    render() {
        return (<FlexView>
            <Navbar className="bp3-dark">
                <NavbarGroup align={Alignment.LEFT}>
                    <Navbar.Heading><Icon icon="globe" /> <AnchorButton text="Home" href="/" className="bp3-minimal"></AnchorButton></Navbar.Heading>
                    <NavbarDivider />
                    <AnchorButton text="Counter" href="/counter" className="bp3-minimal"></AnchorButton>
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                    <Popover content={<Menu>
                        <MenuItem text="Profile" icon="person" />
                        <MenuItem text="Settings" icon="cog" />
                    </Menu>}>
                        <Button icon={<Icon icon="user" color={Colors.GREEN4} />} text="Mark" />
                    </Popover>
                </NavbarGroup>
            </Navbar>
        </FlexView>);

    }
}