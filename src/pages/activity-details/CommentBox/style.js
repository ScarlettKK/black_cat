import styled from 'styled-components';

export const CommentBoxWrapper = styled.div`
    width: 100%;
    height: 60px;
    button{
        width: 60px;
        height: 60px;
    }
`;

export const Purple = styled.div`
    display: inline-block;
    width: calc(100% - 60px);
    background-color: #8560A9;
    height: 60px;
    svg{
        width: 20px;
        height: 20px;
        fill: #D5EF7F;
        padding: 5px;
    }
    input {
        width: calc(100% - 90px);
        height: 32px;
        position: relative;
        top: -10px;
        border-radius: 18px;
        border: none;
        padding-left: 16px;
        font-size: 14px;
        color: #D3C1E5;
    }
`;

export const Yellow = styled.div`
    display: inline-block;
    width: 60px;
    background-color: #D5EF7F;
    height: 60px;
    svg{
        width: 30px;
        height: 30px;
        fill: #8560A9;
    }
`;
