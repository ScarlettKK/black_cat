import React, { Component } from 'react';
import { connect } from 'react-redux'

import eventsApi from '../../api/events'
import Header from '../../components/header'
import {
  ActivityDetailsWrapper,
  ActivityDetailsHeader,
  ActivityDetailsContent,
  ActivityDetailsTitile,
  ActivityCreatorMessage,
  CreateMessage,
  ActivityButtons
} from './style'
import ChannelName from '../../components/channel-name'
import Avatar from '../../components/avatar'
import Tabs from '../../components/tabs'
import Details from './details'
import Comments from './comment'
import Participants from './participants'
import time from '../../util/time'

class ActivityDetails extends Component {
  render() {
    const { event } = this.props || {};
    if(event.name) {
      return (
        <ActivityDetailsWrapper>
          <Header/>
          <ActivityDetailsHeader>
            <ChannelName channelName={event.channel.name}/>
            <ActivityDetailsTitile>{event.name}</ActivityDetailsTitile>
            <ActivityCreatorMessage>
              <Avatar imgUrl={event.creator.avatar}/>
              <CreateMessage>
                <p className="userName">{event.creator.username}</p>
                <p className="createTime">Published {time.getDiff(event.create_time)} ago</p>
              </CreateMessage>
            </ActivityCreatorMessage>
          </ActivityDetailsHeader>
          <ActivityDetailsContent>
            <Tabs contents={['Details','Participants','Comments']}>
              <div>
                <Details contents={event}></Details>
              </div>
              <div>
                <Participants id={event.id}></Participants>
              </div>
              <div>
                <Comments id={event.id}></Comments>
              </div>
            </Tabs>
          </ActivityDetailsContent>
          <ActivityButtons>
            <button className="purple">Comment</button>
            <button className="purple">Like</button>
            <button className="yellow">Going</button>
          </ActivityButtons>
        </ActivityDetailsWrapper>
      )
    } else {
      return (
        <div>
          No data
        </div>
      )
    }
    
  }

  componentDidMount() {
    eventsApi.getEvent(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  event: state.getIn(['event', 'event'])
})

export default connect(mapState)(ActivityDetails);


