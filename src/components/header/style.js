/*
 * @Author: your name
 * @Date: 2020-03-17 16:00:31
 * @LastEditTime: 2020-03-19 11:19:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /black_cat/src/components/header/style.js
 */
import styled from 'styled-components';
import searchLogo from '../../static/svg/search.svg'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    background-color: #8560A9;
    position: absolute;
`;

export const SearchButton = styled.button`
    background: url(${searchLogo}) no-repeat;
    background-size: 26px 26px;
    background-position:center;
    border: none;
    height: 50px;
    width: 50px;
    position: absolute;
    left: 5px;
`;

export const Logo = styled.img`
    height: 26px;
    width: 26px;
    position: absolute;
    left: calc(50% - 15px);
    top: 10px;
`;

export const AvatarWrapper = styled.div`
    position: absolute;
    right: 15px;
`;
