import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import { NoActivityWrapper } from './style'
import LikeSvg from '../../static/svg/no-activity.svg'

class NoActivity extends Component {
  render() {
    return (
        <NoActivityWrapper>
          <div>
            <SVG src={LikeSvg}/>
          </div>
          <div>
            No activity found
          </div>
        </NoActivityWrapper>
    )
  }
}
  
export default NoActivity;


