import React, { Component } from 'react';
import { connect } from 'react-redux'

import userApi from '../../api/user'
import Header from '../../components/header'
import Avatar from '../../components/avatar'
import Tabs from '../../components/tabs'
import NoActivity from '../../components/no-activity'

import Likes from './likes'
import Going from './going'
import Past from './past'

import { 
  PersonalWrapper, 
  PersonalMessage,
  UserName,
  Email,
  PersonalActivity 
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
          isSwitch={true}
        >
          <PersonalActivity>
            {
              user.likes_count < 1 ?
              <NoActivity/>
              :
              <Likes/>
            }
          </PersonalActivity>
          <PersonalActivity>
            {
              user.goings_count < 1 ?
              <NoActivity/>
              :
              <Going/>
            }
          </PersonalActivity>
          <PersonalActivity>
            {
              user.past_count < 1 ?
              <NoActivity/>
              :
              <Past/>
            }
          </PersonalActivity>
        </Tabs>
    	</PersonalWrapper>
    )
  }

  componentDidMount() {
    userApi.getUser();
  }
}

const mapState = (state) => ({
  user: state.getIn(['user', 'user'])
})

export default connect(mapState)(Personal);

