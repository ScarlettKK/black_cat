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
    opacity:0.8; 
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
        font-size: 17px;
    }
    h1{
        margin-top: 25px;
        font-size: 24px;
    }
    .circle-outer {
        margin-top: 25px;
        display: inline-block;
        width: 72px;
        height: 72px;
        border: 1px solid rgba(213,239,127,0.5);
        border-radius: 50%;
        text-align:center;
    }
    .circle-inner {
        border: 1px solid #D5EF7F;
        border-radius: 50%;
        padding: 7px;
        width: 54px;
        height: 54px;
        display: inline-block;
        text-align:center;
        position: relative;
        top: 1px;
    }
    svg {
        fill: #D5EF7F;
        width: 50px;
        height: 50px;
        text-align:center;
    }
`;

export const LoginBox = styled.div`
    z-index: 2;
    position: absolute;
    width: 100%;
    bottom: 0px;
    svg {
        fill: #D3C1E5;
        width: 20px;
        height: 20px;
        position: absolute;
        margin-left: 59px;
        margin-top: 12px;
        z-index: 10;
    }
    .user {
        margin-top: 32px;
    }
`;

export const Input = styled.input`
    font-size: 16px;
    display: block;
    margin: 20px auto;
	width: 240px;
	height: 40px;
    line-height: 40px;
    border-radius: 23px;
    background-color: transparent;
    border:1.3px solid rgba(255, 255, 255, 0.5);
    padding-left: 35px;
    color: #453257;
    ::-webkit-input-placeholder{
　　　　color: #AC8EC9;
　　　}
    :focus{
        background-color: rgba(211, 193, 229, 0.5);
        color: #453257;
    }
    :-webkit-autofill , textarea:-webkit-autofill, select:-webkit-autofill {
        -webkit-text-fill-color: #ededed !important;
        -webkit-box-shadow: 0 0 0px 1000px transparent  inset !important;
        background-color:transparent;
        background-image: none;
        transition: background-color 50000s ease-in-out 0s;
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
    font-weight: bold;
`;