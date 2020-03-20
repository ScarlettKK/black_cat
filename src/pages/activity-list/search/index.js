import React, { Component } from 'react';
import { connect } from 'react-redux'

import { 
    SearchWrapper,
    DateWrapper,
    ChannelWrapper,
    SearchBtnWrapper,
    Header,
    DateBtns,
    ChannelBtns
 } from './style'
import channelsApi from '../../../api/channels'

class Search extends Component {
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
                            return <DateBtns key={index}>{date}</DateBtns>
                        })
                    }
                </div>
            </DateWrapper>
            <ChannelWrapper>
                <Header>
                    <span>CHANNEL</span>
                </Header>
                <div className="channelBtns">
                    {
                        channels.length ? channels.map((channel) => {
                            return <ChannelBtns key={channel.id}>{channel.name}</ChannelBtns>
                        }) : ''
                    }
                </div>
            </ChannelWrapper>
            <SearchBtnWrapper>
                SEARCH
            </SearchBtnWrapper>
        </SearchWrapper>
    )
  }
  
  componentDidMount() {
    channelsApi.getChannels()
  }
}

const mapState = (state) => ({
    channels: state.getIn(['channels', 'channels'])
})

export default connect(mapState)(Search);


