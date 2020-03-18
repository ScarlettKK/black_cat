import React, { Component } from 'react';
import { 
  DetailsWrapper, 
  Images,
  Description,
  Titile,
  DetailsBlock,
  Time,
  WhenContent,
  Address,
  LocationImg
} from './style'
import locationImg from '../../../static/gmap.png'

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
              <Time className="begin_time">{begin_time}</Time>
              <Time>{end_time}</Time>
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


