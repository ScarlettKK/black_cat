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
import Details from './details'
import Comments from './comment'
import Participants from './participants'
import time from '../../util/time'
import NoActivity from '../../components/no-activity'
import ActivityButtons from './ActivityButtons'
import CommentBox from './CommentBox'

const defaultPlaceholder = 'Leave your comment here';

class ActivityDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isComment : false,
      placeholder: defaultPlaceholder
    }
  }

  render() {
    const { event } = this.props || {};
    const id = this.props.match.params.id;
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
                <p className="createTime">Published {time.getDiff(event.create_time)}</p>
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
                <Comments 
                  id={event.id} 
                  isComment={this.isComment} 
                  startComment={this.startComment.bind(this)}
                ></Comments>
              </div>
            </Tabs>
          </ActivityDetailsContent>
          {
            this.state.isComment ? 
            <CommentBox 
              closeComment={this.closeComment.bind(this)}  
              id={event.id} 
              placeholder = {this.state.placeholder}
            />
            :
            <ActivityButtons 
              event={event} 
              id={id} 
              startComment={this.startComment.bind(this)}
            />
          }
        </ActivityDetailsWrapper>
      )
    } else {
      return (
        <NoActivity/>
      )
    }
    
  }

  componentDidMount() {
    eventsApi.getEvent(this.props.match.params.id)
  }

  startComment(placeholder) {
    this.setState(() => {
      return {
        isComment: true,
        placeholder: placeholder ? `@${placeholder} ` : defaultPlaceholder
      }
    })
  }

  closeComment() {
    this.setState(() => {
      return {
        isComment: false
      }
    })
  }
}

const mapState = (state) => ({
  event: state.getIn(['event', 'event'])
})

export default connect(mapState)(ActivityDetails);


