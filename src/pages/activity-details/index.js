import React, { Component } from 'react';
import { connect } from 'react-redux'
import SVG from 'react-inlinesvg';

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

import likeOutlineSvg from '../../static/svg/like-outline.svg'
import LikeSvg from '../../static/svg/like.svg'
import checkOutlineSvg from '../../static/svg/check-outline.svg'
import checkSvg from '../../static/svg/check.svg'
import commentSvg from '../../static/svg/comment-single.svg'

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
            <button className="purple">
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

  participate(me_going) {
    if(me_going) 
      eventsApi.deleteParticipants(this.props.match.params.id)
    else 
      eventsApi.addParticipants(this.props.match.params.id)
  }

  likes(me_likes) {
    if(me_likes) 
      eventsApi.deleteLikes(this.props.match.params.id)
    else 
      eventsApi.addLikes(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  event: state.getIn(['event', 'event'])
})

export default connect(mapState)(ActivityDetails);


