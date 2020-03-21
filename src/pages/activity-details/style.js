import styled from 'styled-components';

export const ActivityDetailsWrapper = styled.div`
    position: relative;
    overflow-x: hidden;
`;

export const ActivityDetailsHeader = styled.div`
    margin: 0px 20px 20px 20px;
    padding-top: 65px;
`;

export const ActivityDetailsTitile = styled.h1`
    color: #453257;
    font-size: 20px;
`

export const ActivityCreatorMessage = styled.div`
    position: relative;
    height: 50px;
    margin: 20px 0px;
    img{
        height: 45px;
        width: 45px;
    }
`

export const CreateMessage = styled.div`
    display: inline-block;
    margin-left: 20px;
    p{
        margin: 0px;
    }
    .userName {
        margin-top: 10px;
        font-size: 14px;
        color: #67616D;
    }
    .createTime{
        margin-top: 5px;
        font-size: 12px;
        color: #BABABA;
    }
`

export const ActivityDetailsContent = styled.div`
    width: 100%;
`;

export const ActivityButtons = styled.div`
    height: 60px;
    width: 100%;
    font-size: 14px;
    svg{
        width: 24px;
        height: 24px;
    }
    .purple {
        background-color: #8560A9;
        width: 28%;
        height: 60px;
        border: none;
        margin: -1px;
        svg{
            fill: #463258;
        }
        .liked{
            fill: #D5EF7F;
        }
    }
    .yellow {
        background-color: #D5EF7F;
        width: 45%;
        height: 60px;
        border: none;
        color: #788C36;
        font-weight: bold;
        svg{
            fill: #788C36;
            margin-right: 10px;
        }
        .joined {
            fill: #8560A9;
        }
        .btnText {
            position: relative;
            top: -5px;
        }
    }
    
`;
