import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ParticipantsWrapper, ParticipantsContent, Users, Number } from './style'
import eventsApi from '../../../api/events'
import Avatar from '../../../components/avatar'

class Participants extends Component {
  render() {
    const { going, likes } = this.props;
    const goingNum = going.length || 0;
    const likesNum = likes.length || 0;
    return (
        <ParticipantsWrapper>
          <ParticipantsContent>
            <Number>{goingNum} going</Number>
            <Users>
              {
                going.map((people) => {
                  return (
                    <Avatar imgUrl={people.avatar} key={people.id}/>
                  )
                })
              }
            </Users>
          </ParticipantsContent>
          <ParticipantsContent className="likes">
            <Number>{likesNum} likes</Number>
            <Users>
              {
                likes.map((people) => {
                  return (
                    <Avatar imgUrl={people.avatar} key={people.id}/>
                  )
                })
              }
            </Users>
          </ParticipantsContent>
        </ParticipantsWrapper>
    )
  }

  componentDidMount() {
    eventsApi.getEventParticipants(this.props.id)
    eventsApi.getEventLikes(this.props.id)
  }
}

const mapState = (state) => ({
  going: state.getIn(['participants', 'going']),
  likes: state.getIn(['participants', 'likes'])
})

export default connect(mapState)(Participants);


