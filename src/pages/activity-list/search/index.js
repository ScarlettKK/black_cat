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

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      channel: '',
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
                                    className={this.state.date === date ? 'selected' : ''}
                                    onClick={this.select.bind(this, 'date', date)}
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
                    className={this.state.channel === 'ALL' ? 'selected' : ''}
                    onClick={this.select.bind(this, 'channel', 'ALL')}
                  >ALL</ChannelBtns>
                  {
                      channels.length ? channels.map((channel) => {
                        if(channel.name.length > 1)
                          return <ChannelBtns 
                                    key={channel.id}
                                    className={this.state.channel === channel.name ? 'selected' : ''}
                                    onClick={this.select.bind(this, 'channel', channel.name)}
                                  >{channel.name}</ChannelBtns>
                        else return ''
                      }) : ''
                  }
                </div>
            </ChannelWrapper>
            <SearchBtnWrapper className={this.state.canStartSearch ? 'canStartSearch' : ''}>
                <span>SEARCH</span>
                <SearchValue>{this.state.searchValue}</SearchValue>
            </SearchBtnWrapper>
        </SearchWrapper>
    )
  }
  
  componentDidMount() {
    channelsApi.getChannels()
  }

  select(type, value) {
    const newState = {};
    newState[type] = value;
    this.setState(newState, () => {
      const { date, channel } = this.state
      if(date.length > 0 && channel.length > 0) {
        this.setState({canStartSearch: true})
      }
    })
  }
}

const mapState = (state) => ({
    channels: state.getIn(['channels', 'channels'])
})

export default connect(mapState)(Search);


