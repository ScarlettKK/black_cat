import styled from 'styled-components';

export const ActivityItemWrapper = styled.div`
	padding: 20px;
	border-bottom: 1px solid #E8E8E8;
`;

export const ActivityHeader = styled.div`
	position: relative;
	height: 40px;
	.username{
		font-size: 12px;
		color: #67616D;
		margin-left: 45px;
		display: inline-block;
		height: 50px;
		text-align: center;
		line-height: 50px;
	}
`;

export const ChannelNameWrapper = styled.div`
	position: absolute;
	right: 0px;
	display: inline-block;
	height: 40px;
	vertical-align: middle;
	padding-top: 10px;
`;

export const ActivityTitle = styled.h1`
	font-size: 18px
`;

export const ActivityTime = styled.p`
	color: #8560A9;
	font-size: 12px;
`;

export const ActivityContent = styled.p`
	width: 100%;
	overflow: hidden;
	word-break: break-all;  
	text-overflow: ellipsis;
	display: -webkit-box; 
	-webkit-line-clamp: 3; 
	-webkit-box-orient: vertical;
`;

export const ActivityFooter = styled.div`
	
`;
