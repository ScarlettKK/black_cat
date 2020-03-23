import React, { Component } from 'react';
import { connect } from 'react-redux';
import SVG from 'react-inlinesvg';

import { 
  CommentsWrapper,
  CommentWrapper,
  CommentMessage,
  UserName,
  CreateTime,
  Comment,
  Reply
 } from './style'
import eventsApi from '../../../api/events'
import Avatar from '../../../components/avatar'
import replySvg from '../../../static/svg/reply.svg'
import time from '../../../util/time'

class Comments extends Component {
  render() {
    const { comments, startComment } = this.props;
    return (
        <CommentsWrapper>
          {
            comments.map((comment) => {
              return (
                <CommentWrapper key={comment.id}>
                  <Avatar imgUrl={comment.user.avatar} key={comment.user.id}/>
                  <CommentMessage>
                    <UserName>{comment.user.username}</UserName>
                    <CreateTime>Published {time.getDiff(comment.create_time)}</CreateTime>
                    <Comment>
                      {comment.comment}
                    </Comment>
                  </CommentMessage>
                  <Reply>
                    <button onClick={startComment.bind(null, comment.user.username)}>
                      <SVG src={replySvg}/>
                    </button>
                  </Reply>
                </CommentWrapper>
              )
            })
          }
        </CommentsWrapper>
    )
  }

  componentDidMount() {
    eventsApi.getEventComments(this.props.id)
  }
}

const mapState = (state) => ({
  comments: state.getIn(['comments', 'comments'])
})

export default connect(mapState)(Comments);


