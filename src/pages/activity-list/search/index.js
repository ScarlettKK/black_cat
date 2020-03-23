import React, { Component } from 'react';
import { connect } from 'react-redux'
import { DatePicker } from 'antd';
// import moment from 'moment'

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
import time from '../../../util/time'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: {
        value: '',
        name: ''
      },
      channel: {
        value: '',
        name: ''
      },
      canStartSearch: false,
      searchValue: '',
      isRangePicker: false,
      rangePickerValue: '',
      dateStrings: ''
    }
  }
 
  render() {
    const { RangePicker } = DatePicker;
    const { isSearch, channels } = this.props;
    const dates = ['ANYTIME', 'TODAY', 'TOMORROW', 'THIS WEEK', 'THIS MONTH']

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
                                    onClick={this.select.bind(this, 'date', date)}
                                  >{date}</DateBtns>
                        })
                    }
                    <DateBtns 
                      className={this.state.date.name === 'LATER' ? 'selected' : ''}
                      onClick={this.openRangePicker.bind(this)}
                    >LATER</DateBtns>
                    {
                      this.state.isRangePicker ? 
                      <RangePicker 
                        onChange={this.handleRangePickerValueChange.bind(this)}
                      />
                      : ''
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
                    onClick={this.select.bind(this, 'channel', 'ALL', '')}
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

  openRangePicker() {
    this.setState((prevState) => {
      return {
        isRangePicker: !prevState.isRangePicker
      }
    })
  }

  handleRangePickerValueChange(dates, dateStrings) {
    this.setState({
      rangePickerValue: {
        before: dates[0].valueOf(), 
        after: dates[1].valueOf()
      },
      dateStrings: {
        start_time: dateStrings[0],
        end_time: dateStrings[1]
      }
    }, ()=> {
      this.select('date', 'LATER')
    })
  }

  select(type, name, value) {
    const newState = {};
    newState[type] = {
      name: name,
      value: type === 'channel' ? value : this.createTimeValue(name)
    };
    this.setSelectedState(newState)
  }

  setSelectedState(newState) {
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
    const { date, channel, dateStrings } = this.state
    const dateName = date.name;
    const channelName = channel.name;
    const start_time = dateStrings.start_time || ''
    const end_time = dateStrings.end_time || ''

    if(dateName === 'ANYTIME' && channelName === 'ALL')
      return 'All activities'
    else if (dateName === 'LATER')
      return `${channelName} activities from ${start_time} to ${end_time}`
    else
      return `${channelName} activities of ${dateName.toLowerCase()}`
  }

  createTimeValue(timeType) {
    const { rangePickerValue } = this.state
    if(timeType === 'LATER')
      return rangePickerValue !== '' ? rangePickerValue : ''
    else if(timeType === 'ANYTIME')
      return ''
    else 
      return time.getTimeFilter(timeType.toLowerCase())
  }

  sendSearchRequest() {
    const { setSearchContent, setIsSearch } = this.props;
    eventsApi.getEvents(this.getEventsApiFilter()).then(() => {
      setSearchContent(this.state.searchValue)
      setIsSearch()
      this.props.showActivitySearch()
    })
  }

  getEventsApiFilter() {
    const result = {}
    const { channel, date }  = this.state;

    if(channel.value !== '')
      result.channels = channel.value;
    if(date.value !== '') {
      result.before = date.value.before
      result.after = date.value.after
    }

    return result;
  }
}

const mapState = (state) => ({
    channels: state.getIn(['channels', 'channels'])
})

const mapDispatch = (dispatch) => ({
	setSearchContent(searchValue) {
		dispatch({
      type: 'set_search_content',
      searchValue: searchValue
    });
  },
  setIsSearch() {
    dispatch({
      type: 'set_isSearch',
      isSearch: true
    });
  }
});

export default connect(mapState, mapDispatch)(Search);


