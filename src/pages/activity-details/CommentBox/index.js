import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import { CommentBoxWrapper, Purple, Yellow } from './style'
import crossSvg from '../../../static/svg/cross.svg'
import sendSvg from '../../../static/svg/send.svg'

class CommentBox extends Component {
  render() {
    const {closeComment} = this.props;
    return (
        <CommentBoxWrapper>
            <Purple>
                <button onClick={closeComment}>
                    <SVG src={crossSvg}/>
                </button>
                <input/>
            </Purple>
            <Yellow>
                <button>
                    <SVG src={sendSvg}/>
                </button>
            </Yellow>
        </CommentBoxWrapper>
    )
  }
}

export default CommentBox;


