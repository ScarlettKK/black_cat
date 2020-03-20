import styled from 'styled-components';

export const SearchWrapper = styled.div`
    position: absolute;
    width: 75%;
    height: 100%;
    background-color: #453257;
    left: -75%;
    transition: left 0.5s;  
`;

export const DateWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
    .dateBtns {
        padding: 0px 10px;
    }
`;

export const DateBtns = styled.button`
    color: #E8E8E8;
    font-size: 14px;
    margin: 5px 5px 15px 0px;
`;

export const ChannelWrapper = styled.div`
    width: 100%;
    .channelBtns {
        padding: 0px 10px;
    }
`;

export const ChannelBtns = styled.button`
    color: #E8E8E8;
    font-size: 14px;
    font-weight: normal;
    border: 1px solid #E8E8E8;
    border-radius: 15px;
    background-color: transparent;
    padding: 5px 10px;
    margin-right: 20px;
    margin-bottom: 10px;
`;

export const Header = styled.h1`
   color: #AC8EC9;
   font-size: 12px;
   text-align: center;
   margin: 20px 0px;
   span {
       border-bottom: 1px solid #AC8EC9;
       padding-bottom: 3px;
   }
`;

export const SearchBtnWrapper = styled.div`
    width: 100%; 
    height: 70px;
    background-color: #D5EF7F;
    position: absolute;
    bottom: 0px;
    font-size: 18px;
    color: #453257;
    font-weight: bold;  
    text-align: center;
    line-height: 70px; 
`;