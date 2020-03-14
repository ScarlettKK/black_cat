import React, { Component } from 'react';
import { Button } from 'antd'

class CommonButton extends Component {
    constructor(props) {
        super(props);
        this.content = this.props.content
    }
    render() {
        return (
            <div>
                <Button>{this.content}</Button>
            </div>
        )
    }
}

export default CommonButton;



