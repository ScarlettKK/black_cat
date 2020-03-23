import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import { 
  DetailsWrapper, 
  Images,
  Description,
  Titile,
  DetailsBlock,
  Date,
  WhenContent,
  Address,
  LocationImg,
  Time
} from './style'
import locationImg from '../../../static/gmap.png'
import time from '../../../util/time'
import dateFrom from '../../../static/svg/date-from.svg'
import dateTo from '../../../static/svg/date-to.svg'

class Details extends Component {
  render() {
    const  { 
      description, 
      images, 
      begin_time, 
      end_time ,
      location,
      location_detail
    } = this.props.contents
    return (
        <DetailsWrapper>
          <DetailsBlock>
            <Images>
              {
                images.map((image, index) => {
                  return (
                    <img src={image} key={index} alt="activity imgs"/>
                  )
                })
              }
            </Images>
            <Description>{description}</Description>
          </DetailsBlock>
          <DetailsBlock> 
            <Titile>When</Titile>
            <WhenContent>
              <Date className="begin_time">
                <SVG src={dateFrom}/>{time.getDate(begin_time)} 
                <Time>{time.getTime(begin_time)}</Time>
              </Date>
              <Date>
                <SVG src={dateTo}/>{time.getDate(end_time)}
              </Date>
            </WhenContent>
          </DetailsBlock>
          <DetailsBlock>
            <Titile>Where</Titile>
            <Address>
              <p className="location">{location}</p>
              <p>{location_detail}</p>
            </Address>
            <LocationImg src={locationImg} alt="map"/>
          </DetailsBlock>
        </DetailsWrapper>
    )
  }
}

export default Details;


