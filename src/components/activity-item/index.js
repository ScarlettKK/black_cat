import React, { Component } from 'react';
import { 
  ActivityItemWrapper, 
  ActivityHeader,
  ActivityTitle,
  ActivityTime,
  ActivityContent,
  ActivityFooter,
  ChannelNameWrapper 
} from './style'
import Avatar from '../avatar'
import ChannelName from '../channel-name'


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
        <ActivityTime>ActivityTime</ActivityTime>
        <ActivityContent>{event.description}</ActivityContent>
        <ActivityFooter>ActivityFooter</ActivityFooter>
    	</ActivityItemWrapper>
    )
  }
  
}

export default ActivityItem;


