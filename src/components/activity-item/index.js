import React, { Component } from 'react';
import { 
  ActivityItemWrapper, 
  ActivityHeader,
  ActivityTitle,
  ActivityTime,
  ActivityContent,
  ActivityFooter,
  ChannelNameWrapper,
  Like,
  Going
} from './style'
import Avatar from '../avatar'
import ChannelName from '../channel-name'


class ActivityItem extends Component {
  render() {
    const { event } = this.props
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
    <ActivityTime>{event.begin_time} - {event.end_time}</ActivityTime>
        <ActivityContent>{event.description}</ActivityContent>
        <ActivityFooter>
          <Going>{event.me_going ? 'I am going!' : `${event.goings_count} Going`}</Going>
          <Like>{event.me_likes ? 'I like it' : `${event.likes_count} Likes`}</Like>
        </ActivityFooter>
    	</ActivityItemWrapper>
    )
  }
  
}

export default ActivityItem;


