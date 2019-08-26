
import * as React from "react";
import { render } from "react-dom";
import { Header, Menu, Dropdown } from "semantic-ui-react";
class Home1 extends React.Component {
    state = {
        count: 0
    };

    render() {
        return (<Header>
            <Menu inverted attached borderless>
                <Menu.Item icon="globe" />
                <Menu.Item name="Analytics" active />
                <Menu.Item name="Feeds" />
                <Menu.Item name="Domains" />
                <Menu.Item position="right">
                    <Dropdown item icon="user" >
                        <Dropdown.Menu direction="left">
                            <Dropdown.Item icon="cog" text="Settings" />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
            </Menu>
        </Header>);
    }
}
render(<Home1/>
    , document.getElementById('main'));