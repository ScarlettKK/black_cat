import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import { CommentBoxWrapper, Purple, Yellow } from './style'
import crossSvg from '../../../static/svg/cross.svg'
import sendSvg from '../../../static/svg/send.svg'
import eventsApi from '../../../api/events'

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    }
  }
  
  render() {
    const { closeComment, placeholder } = this.props;
    return (
        <CommentBoxWrapper>
            <Purple>
                <button onClick={closeComment}>
                    <SVG src={crossSvg}/>
                </button>
                <input 
                  onChange={this.handleInputChange.bind(this)}
                  value={this.state.comment}
                  placeholder={placeholder}
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
    this.clearComment();
  }

  handleInputChange(event) {
    this.setState({
      comment: event.target.value
    })
  }

  clearComment() {
    this.setState(() => {
      return {
        comment: ''
      }
    })
  }
}

export default CommentBox;


