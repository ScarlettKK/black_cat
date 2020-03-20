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
		display: inline-block;
		height: 50px;
		text-align: center;
		line-height: 50px;
		position: absolute;
		margin-left: 10px;
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
	font-size: 18px;
	color: #453257;
`;

export const ActivityTime = styled.p`
	color: #8560A9;
	font-size: 12px;
	svg{
		width: 13px;
		height: 13px;
		fill: #8560A9;
		position: relative;
		top: 1.5px;
		margin-right: 5px;
	}
`;

export const ActivityContent = styled.p`
	width: 100%;
	overflow: hidden;
	word-break: break-all;  
	text-overflow: ellipsis;
	display: -webkit-box; 
	-webkit-line-clamp: 3; 
	-webkit-box-orient: vertical;
	color: #67616D;
`;

export const ActivityFooter = styled.div`
	font-size: 12px;
	color: #453257;
`;

export const Going = styled.span`
	
`;

export const Like = styled.span`
	margin-left: 30px;
`;

export const UnGoUnLike = styled.span`
	color: #AC8EC9;
	svg {
		width: 13px;
		height: 13px;
		fill: #AC8EC9;
		position: relative;
		top: 2px;
		margin-right: 5px;
	}
`;