import styled from 'styled-components';

export const SearchWrapper = styled.div`
    position: absolute;
    width: 75%;
    height: 100%;
    background-color: #453257;
    left: -75%;
    transition: left 0.5s;  
    .selected {
        background-color: #E5F7A9;
        color: #453257;
        border-radius: 15px;
        padding: 5px 10px;
        border: none;
    }
    .canStartSearch {
        background-color: #D5EF7F;
        color: #453257;
        span{
            margin-top: 15px;
            display: inline-block;
        }
    }
`

export const DateWrapper = styled.div`
    width: 100%;
    margin-bottom: 10px;
    .dateBtns {
        padding: 0px 5px;
    }
`;

export const DateBtns = styled.button`
    color: #E8E8E8;
    font-size: 14px;
    margin: 5px 2px;;
    padding: 5px 10px;
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
    height: 90px;
    background-color: #BABABA;
    position: absolute;
    bottom: 0px;
    font-size: 18px;
    color: #666666;
    font-weight: bold;  
    text-align: center; 
    span{
        margin-top: 33px;
        display: inline-block;
    }
`;

export const SearchValue = styled.div`
    font-size: 10px;
    color: #8560A9;
`;

export const SearchResultWrapper = styled.div`
    position: absolute;
    top: 50px;
    width: 100%;
    height: 100px;
    background-color: #FAF9FC;
    padding: 0px 35px;
`;

export const SearchResultCount = styled.h1`
    font-size: 16px;
    color: #8560A9;
    margin-top: 20px;
    margin-bottom: 8px;
`;

export const SearchContent = styled.p`
    font-size: 12px;
    color:#67616D;
    margin-top: 8px;
`;

export const ClearSearch = styled.button`
    font-size: 10px;
    color: #67616D;
    background-color: #D5EF7F;
    border: none;
    padding: 5px 10px;
    border-radius: 10px;
    position: absolute;
    top: 18px;
    margin-left: 200px;
`;