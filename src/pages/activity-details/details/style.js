import styled from 'styled-components';

export const DetailsWrapper = styled.div`
	margin: 20px;
`;

export const Images = styled.div`
	height: 110px;
	width: 100%;
	overflow: auto;
	white-space: nowrap;
	img{
		width:180px;
		height: 100px;
		display:inline;
		margin-right: 10px;
		border-radius: 10px;
	}
`;

export const Description = styled.div`
	font-size: 14px;
	color: #67616D;
`;


export const DetailsBlock = styled.div`
	padding: 10px 0px;	
	border-bottom: 1px solid #E8E8E8;
`;

export const Titile = styled.h1`
	font-size: 16px;
	color: #8560A9;
	border-left: 5px solid #8560A9;
	padding-left: 5px;
`;

export const WhenContent =  styled.div`
	height: 120px;
	width: 100%;
	.begin_time {
		border-right: 1px solid #E8E8E8;
	}
`

export const Date =  styled.div`
	display: inline-block;
	font-size: 16px;
	color: #67616D;
	width: 49%;
	text-align: center;
	height: 100px;
	vertical-align: middle;
	margin-top: 10px;
	svg{
		width: 16px;
		height: 16px;
		fill: #D5EF7F;
		margin-right: 5px;
	}
`

export const Time =  styled.div`
	font-size: 32px;
	color: #AECB4F;
	margin-top: 15px;
`

export const Address =  styled.div`
	font-size: 14px;
	color: #67616D;
	p{
		margin: 3px 0px;
	}
	.location {
		font-weight: bold;
	}
`

export const LocationImg =  styled.img`
	width: 100%;
	height: 150px;
`