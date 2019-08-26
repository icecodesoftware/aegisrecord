import * as React from 'react';
import { Button, Card } from "@blueprintjs/core";
export default class Counter extends React.Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        });
    };

    decrement = () => {
        this.setState({
            count: (this.state.count - 1)
        })
    };

    render() {
        return (<Card className="bp3-dark">
            <h2>Count</h2>
            <p>{this.state.count}</p>
            <Button onClick={this.increment}>Increment</Button>
            <Button onClick={this.decrement}>Decrement</Button>
        </Card>);
    }
}