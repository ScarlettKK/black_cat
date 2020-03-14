import React, { Component } from 'react';
import { Input } from 'antd'

class InputBox extends Component {
  constructor(props) {
    super(props)
    this.value = this.props.value
  }

  render() {
    return (
    	<div>
    		<Input value={this.value}/>
    	</div>
    )
  }
}

export default InputBox;



