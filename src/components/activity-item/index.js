import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import { 
  ActivityItemWrapper, 
  ActivityHeader,
  ActivityTitle,
  ActivityTime,
  ActivityContent,
  ActivityFooter,
  ChannelNameWrapper,
  Like,
  Going,
  UnGoUnLike
} from './style'
import Avatar from '../avatar'
import ChannelName from '../channel-name'
import likeOutlineSvg from '../../static/svg/like-outline.svg'
// import LikeSvg from '../../static/svg/like.svg'
import checkOutlineSvg from '../../static/svg/check-outline.svg'
// import checkSvg from '../../static/svg/check.svg'
import timeSvg from '../../static/svg/time.svg'
import time from '../../util/time'


class ActivityItem extends Component {
  render() {
    const { event } = this.props
    console.log(event)
    return (
    	<ActivityItemWrapper>
    		<ActivityHeader>
          <Avatar imgUrl={event.creator.avatar}/>
          <span className="username">{event.creator.username}</span>
          <ChannelNameWrapper>
          <ChannelName channelName={event.channel.name}/>
          </ChannelNameWrapper>
        </ActivityHeader>
        <ActivityTitle>{event.name}</ActivityTitle>
        <ActivityTime>
          <SVG src={timeSvg}/>
          {time.getDate(event.begin_time)}  {time.getTime(event.begin_time)} - {time.getDate(event.end_time)} {time.getTime(event.end_time)}
        </ActivityTime>
        <ActivityContent>{event.description}</ActivityContent>
        <ActivityFooter>
          <Going>
            {
              event.me_going ? 
              'I am going!' 
              : 
              <UnGoUnLike>
                <SVG src={checkOutlineSvg}/>
                {`${event.goings_count} Going`}
              </UnGoUnLike>
            }
          </Going>
          <Like>
            {
              event.me_likes ? 'I like it' 
              : 
              <UnGoUnLike>
                <SVG src={likeOutlineSvg}/>
                {`${event.likes_count} Likes`}
              </UnGoUnLike>
            }
          </Like>
        </ActivityFooter>
    	</ActivityItemWrapper>
    )
  }
  
}

export default ActivityItem;


