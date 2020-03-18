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
  CreateMessage
} from './style'
import ChannelName from '../../components/channel-name'
import Avatar from '../../components/avatar'
import Tabs from '../../components/tabs'

class ActivityDetails extends Component {
  render() {
    const event = this.getCurrentEvent();
    if(event) {
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
                <p className="createTime">Published {event.create_time} ago</p>
              </CreateMessage>
            </ActivityCreatorMessage>
          </ActivityDetailsHeader>
          <ActivityDetailsContent>
            <Tabs contents={['Details','Participants','Comments']}>
              <div>
                test1
              </div>
              <div>
                test2
              </div>
              <div>
                test3
              </div>
            </Tabs>
          </ActivityDetailsContent>
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
    this.props.getEvents()
  }

  getCurrentEvent() {
    const { events } = this.props;
    const id = this.props.match.params.id;
    if(events.length > 0) {
      const result = events.find((event) => { 
        if (event.id.toString() === id)  return event; 
        return undefined;
      })
      return result;
    }
  }
}

const mapState = (state) => ({
  events: state.getIn(['events', 'events'])
})

const mapDispatch = (dispatch) => ({
	getEvents(){
		dispatch(() => {
      eventsApi.getEvents().then((res) => {
        const data = res.data;
        if(data) {
          const action = {
            type: 'set_events',
            events: data.events
          }
          dispatch(action)
        }
      })
    })
	}
})

export default connect(mapState, mapDispatch)(ActivityDetails);


