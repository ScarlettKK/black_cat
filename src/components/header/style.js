import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: #8560A9;
    position: absolute;
`;

export const SearchButton = styled.button`
    background: transparent;
    border: none;
    height: 50px;
    width: 50px;
    position: absolute;
    left: 5px;
    svg{
        width: 25px;
        height: 25px;
        fill: #453257;
        margin-top: 5px;
    }
`;

export const Logo = styled.span`
    display: inline-block;
    height: 26px;
    width: 26px;
    position: absolute;
    left: calc(50% - 15px);
    top: 10px;
    svg{
        fill: #D5EF7F
    }
`;

export const AvatarWrapper = styled.div`
    position: absolute;
    right: 15px;
`;
