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
    console.log(goingNum, likesNum, going)
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
    this.props.getParticipants(this.props.id)
    this.props.getLikes(this.props.id)
  }
}

const mapState = (state) => ({
  going: state.getIn(['participants', 'going']),
  likes: state.getIn(['participants', 'likes'])
})

const mapDispatch = (dispatch) => ({
	getParticipants(id){
		dispatch(() => {
      eventsApi.getEventParticipants(id).then((res) => {
        if(res) {
          const data = res.data;
          const action = {
            type: 'set_going_participants',
            going: data.users
          }
          dispatch(action)
        }
      })
    })
  },
  getLikes(id){
		dispatch(() => {
      eventsApi.getEventLikes(id).then((res) => {
        if(res) {
          const data = res.data;
          const action = {
            type: 'set_likes_participants',
            likes: data.users
          }
          dispatch(action)
        }
      })
    })
	}
})

export default connect(mapState, mapDispatch)(Participants);


