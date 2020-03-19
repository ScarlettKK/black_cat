import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  CommentsWrapper,
  CommentWrapper,
  CommentMessage,
  UserName,
  CreateTime,
  Comment
 } from './style'
import eventsApi from '../../../api/events'
import Avatar from '../../../components/avatar'

class Comments extends Component {
  render() {
    const { comments } = this.props;
    return (
        <CommentsWrapper>
          {
            comments.map((comment) => {
              return (
                <CommentWrapper key={comment.id}>
                  <Avatar imgUrl={comment.user.avatar} key={comment.user.id}/>
                  <CommentMessage>
                    <UserName>{comment.user.username}</UserName>
                    <CreateTime>{comment.create_time}</CreateTime>
                    <Comment>
                      {comment.comment}
                    </Comment>
                  </CommentMessage>
                </CommentWrapper>
              )
            })
          }
        </CommentsWrapper>
    )
  }

  componentDidMount() {
    this.props.getComments(this.props.id)
  }
}

const mapState = (state) => ({
  comments: state.getIn(['comments', 'comments'])
})

const mapDispatch = (dispatch) => ({
	getComments(id){
		dispatch(() => {
      eventsApi.getEventComments(id).then((res) => {
        if(res) {
          const data = res.data;
          const action = {
            type: 'set_comments',
            comments: data.comments
          }
          dispatch(action)
        }
      })
    })
  }
})
export default connect(mapState, mapDispatch)(Comments);


