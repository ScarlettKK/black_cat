import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import { CommentBoxWrapper, Purple, Yellow } from './style'
import crossSvg from '../../../static/svg/cross.svg'
import sendSvg from '../../../static/svg/send.svg'
import eventsApi from '../../../api/events'

class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: ''
    }
  }
  render() {
    const {closeComment} = this.props;
    return (
        <CommentBoxWrapper>
            <Purple>
                <button onClick={closeComment}>
                    <SVG src={crossSvg}/>
                </button>
                <input 
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state.comment}
                />
            </Purple>
            <Yellow>
                <button onClick={this.sendComment.bind(this)}>
                    <SVG src={sendSvg}/>
                </button>
            </Yellow>
        </CommentBoxWrapper>
    )
  }

  sendComment() {
    eventsApi.addComment(this.props.id, this.state)
  }

  handleInputChange(event) {
    this.setState({
      comment: event.target.value
    })
  }
}

export default CommentBox;


