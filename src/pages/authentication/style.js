import styled from 'styled-components';
import backgroundImg from '../../static/Street-Dance-01.jpg'

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
    background: url(${backgroundImg}) no-repeat;
    background-size: 170% 90%;
    background-position: 47% 0%;
`;

export const Mask = styled.div`
    height: 100%;
    width: 100%;
    z-index: 1;
    position: absolute;
    opacity:0.7; 
    background-color:#8560A9;
`;

export const TitileBox = styled.div`
    z-index: 2;
    position: absolute;
    width: 100%;
    color: #D5EF7F;
    font-style: SourceSansPro-Bold;
    text-align: center;
    top: 63px;
    p{
        font-size: 16px;
    }
    h1{
        margin-top: 25px;
        font-size: 24px;
    }
`;

export const LoginBox = styled.div`
    z-index: 2;
    position: absolute;
    width: 100%;
    bottom: 0px;
`;

export const Input = styled.input`
    display: block;
    margin: 20px auto;
	width: 240px;
	height: 40px;
    line-height: 40px;
    border-radius: 20px;
    background-color: rgba(211, 193, 229, 0.5);;
    border:1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    ::-webkit-input-placeholder{
　　　　color: #fff;
　　　}
`;

export const Button = styled.div`
	width: 100%;
	height: 64px;
	line-height: 64px;
	color: #453257;
	background: #D5EF7F;
    text-align: center;
    margin-top: 100px;
    font-size: 16px;
`;