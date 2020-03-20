import React, { Component } from 'react';
import { connect } from 'react-redux'

import userApi from '../../api/user'
import Header from '../../components/header'
import Avatar from '../../components/avatar'
import Tabs from '../../components/tabs'
import NoActivity from '../../components/no-activity'

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
        >
          <PersonalActivity>
            {
              user.likes_count < 1 ?
              <NoActivity/>
              :
              <div>Likes</div> // 获取到Activity后，展示循环activity-item 组件即可
            }
          </PersonalActivity>
          <PersonalActivity>
            {
              user.goings_count < 1 ?
              <NoActivity/>
              :
              <div>Going</div>
            }
          </PersonalActivity>
          <PersonalActivity>
            {
              user.past_count < 1 ?
              <NoActivity/>
              :
              <div>Past</div>
            }
          </PersonalActivity>
        </Tabs>
    	</PersonalWrapper>
    )
  }

  componentDidMount() {
    userApi.getUser();
    userApi.getUserEvents({type:'liked'});
  }
}

const mapState = (state) => ({
  user: state.getIn(['user', 'user'])
})

export default connect(mapState)(Personal);

