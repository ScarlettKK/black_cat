import React, { Component } from 'react';
import { connect } from 'react-redux'

import userApi from '../../api/user'
import Header from '../../components/header'
import Avatar from '../../components/avatar'
import Tabs from '../../components/tabs'

import { 
  PersonalWrapper, 
  PersonalMessage,
  UserName,
  Email 
} from './style'

class Personal extends Component {
  render() {
    const { user } = this.props
    return (
    	<PersonalWrapper>
    		<Header></Header>
        <PersonalMessage>
          <Avatar imgUrl={user.avatar}/>
          <UserName>{user.username}</UserName>
          <Email>{user.email}</Email>
        </PersonalMessage>
        <Tabs contents={[`${user.likes_count} Likes`,
          `${user.goings_count} Going`,
          `${user.past_count} Past`]}
        >
          <div>
            Likes
          </div>
          <div>
            Going
          </div>
          <div>
            Past
          </div>
        </Tabs>
    	</PersonalWrapper>
    )
  }

  componentDidMount() {
    userApi.getUser()
  }
}

const mapState = (state) => ({
  user: state.getIn(['user', 'user'])
})

export default connect(mapState)(Personal);

