import React, { Component } from 'react';
import { connect } from 'react-redux'

import { 
    SearchWrapper,
    DateWrapper,
    ChannelWrapper,
    SearchBtnWrapper,
    Header,
    DateBtns,
    ChannelBtns,
    SearchValue
 } from './style'
import channelsApi from '../../../api/channels'
import eventsApi from '../../../api/events'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: {
        value: '',
        name: ''
      },
      channel: {
        id: '',
        name: ''
      },
      canStartSearch: false,
      searchValue: ''
    }
  }
 
  render() {
    const { isSearch, channels } = this.props;
    const dates = ['ANYTIME', 'TODAY', 'TOMORROW', 'THIS WEEK', 'THIS MONTH', 'LATER']
    return (
        <SearchWrapper className = {isSearch ? 'searchOpened' : ''}>
            <DateWrapper>
                <Header>
                    <span>DATE</span>
                </Header>
                <div className="dateBtns">
                    {
                        dates.map((date, index) => {
                            return <DateBtns 
                                    key={index} 
                                    className={this.state.date.name === date ? 'selected' : ''}
                                    onClick={this.select.bind(this, 'date', date, 'xxx')}
                                  >{date}</DateBtns>
                        })
                    }
                </div>
            </DateWrapper>
            <ChannelWrapper>
                <Header>
                    <span>CHANNEL</span>
                </Header>
                <div className="channelBtns">
                  <ChannelBtns    
                    className={this.state.channel.name === 'ALL' ? 'selected' : ''}
                    onClick={this.select.bind(this, 'channel', 'ALL')}
                  >ALL</ChannelBtns>
                  {
                      channels.length ? channels.map((channel) => {
                        if(channel.name.length > 1)
                          return <ChannelBtns 
                                    key={channel.id}
                                    className={this.state.channel.name === channel.name ? 'selected' : ''}
                                    onClick={this.select.bind(this, 'channel', channel.name, channel.id)}
                                  >{channel.name}</ChannelBtns>
                        else return ''
                      }) : ''
                  }
                </div>
            </ChannelWrapper>
            <SearchBtnWrapper 
              className={this.state.canStartSearch ? 'canStartSearch' : ''}
              onClick={this.sendSearchRequest.bind(this)}
            >
                <span>SEARCH</span>
                <SearchValue>{this.state.searchValue}</SearchValue>
            </SearchBtnWrapper>
        </SearchWrapper>
    )
  }
  
  componentDidMount() {
    channelsApi.getChannels()
  }

  select(type, value, id) {
    const newState = {};
    newState[type] = {
      name: value,
      id: id
    };
    this.setState(newState, () => {
      const { date, channel } = this.state
      if(date.name.length > 0 && channel.name.length > 0) {
        const searchValue = this.createSearchValue()
        this.setState({
          canStartSearch: true,
          searchValue: searchValue
        })
      }
    })
  }

  createSearchValue() {
    const { date, channel } = this.state
    const dateName = date.name;
    const channelName = channel.name;
    if(dateName === 'ANYTIME' && channelName === 'ALL')
      return 'All activities'
    else if (dateName === 'LATER')
      return `${channelName} activities from start_time to end_time`
    else
      return `${channelName} activities of ${dateName.toLowerCase()}`
  }

  createTimeValue() {

  }

  sendSearchRequest() {
    eventsApi.getEvents({
      channels: this.state.channel.id
    })
  }
}

const mapState = (state) => ({
    channels: state.getIn(['channels', 'channels'])
})

export default connect(mapState)(Search);


