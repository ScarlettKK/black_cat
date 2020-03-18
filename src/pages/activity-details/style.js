import styled from 'styled-components';

export const ActivityDetailsWrapper = styled.div`
	positon: relative;
`;

export const ActivityDetailsHeader = styled.div`
    margin: 70px 20px 20px 20px;
    position: absolute;
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
    margin-left: 60px;
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
    position: absolute;
    top: 250px;
    width: 100%;
`;

