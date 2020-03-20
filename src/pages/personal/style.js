/*
 * @Author: your name
 * @Date: 2020-03-19 17:59:57
 * @LastEditTime: 2020-03-20 10:58:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /black_cat/src/pages/personal/style.js
 */
import styled from 'styled-components';

export const PersonalWrapper = styled.div`
    overflow-x: hidden;
`;

export const PersonalMessage = styled.div`
    padding-top: 85px;
    text-align: center;
    padding-bottom: 20px;
    span{
        width: 80px;
        height: 80px;
    }
	img {
        width: 80px;
        height: 80px;
        border: 3px solid #d3c1e5;
        margin-left: -45px;
    }
`;

export const UserName = styled.p`
    font-size: 24px;
    color: #67616D;
    margin-top: 35px;
    margin-bottom: 0px;
`;

export const Email = styled.p`
    font-size: 14px;
    color: #8560A9;
    margin: 10px;
`;

export const PersonalActivity = styled.div`
`;
