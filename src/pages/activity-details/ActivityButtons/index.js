import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import eventsApi from '../../../api/events'
import {
    ActivityButtonsWrapper
} from './style'

import likeOutlineSvg from '../../../static/svg/like-outline.svg'
import LikeSvg from '../../../static/svg/like.svg'
import checkOutlineSvg from '../../../static/svg/check-outline.svg'
import checkSvg from '../../../static/svg/check.svg'
import commentSvg from '../../../static/svg/comment-single.svg'

class ActivityButtons extends Component {
  render() {
    const { event, startComment } = this.props;
    return (
        <ActivityButtonsWrapper>
            <button className="purple" onClick={startComment.bind(null, null)}>
                <SVG src={commentSvg}/>
            </button>
            <button className="purple" onClick={this.likes.bind(this, event.me_likes)}>
                {
                event.me_likes ? 
                <span>
                    <SVG src={LikeSvg} className="liked"/>
                </span>
                : 
                <span>
                    <SVG src={likeOutlineSvg}/>
                </span>
                }
            </button>
            <button className="yellow" onClick={this.participate.bind(this, event.me_going)}>
                {
                event.me_going ?
                <span>
                    <SVG src={checkSvg} className="joined"/>
                    <span className="btnText">I am going! </span>
                </span>
                : 
                <span>
                    <SVG src={checkOutlineSvg}/>
                    <span className="btnText">Join</span>
                </span>
                }
            </button>
        </ActivityButtonsWrapper>
    )
    
  }

  participate(me_going) {
    const id = this.props.id;
    if(me_going) 
      eventsApi.deleteParticipants(id)
    else 
      eventsApi.addParticipants(id)
  }

  likes(me_likes) {
    const id = this.props.id;
    if(me_likes) 
      eventsApi.deleteLikes(id)
    else 
      eventsApi.addLikes(id)
  }
}

export default ActivityButtons;


