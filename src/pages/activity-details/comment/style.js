import styled from 'styled-components';

export const CommentsWrapper = styled.div`
	margin-top: -20px;
	padding: 10px 0px;
	background-color: #fafafa;
`;

export const CommentWrapper = styled.div`
	padding: 10px 20px;
`;

export const CommentMessage = styled.div`
	display: inline-block;
	width: calc(100% - 70px);
	margin-left: 10px;	
	vertical-align: top;
	padding-top: 5px;
`;

export const UserName = styled.span`
	font-size: 12px;
	color: #8560A9;
`;

export const CreateTime = styled.span`
	font-size: 10px;
	color: #BABABA;
	margin-left: 15px;
`;

export const Comment = styled.p`
	font-size: 14px;
	color: #67616D;
	margin: 0px;
	margin-top: 5px;
`

export const Reply = styled.div`
	display: inline-block;
	width: 25px;
	height: 25px;
	vertical-align: top;
	margin-top: 5px;
	button{
		width: 25px;
		height: 25px;
		padding: 0px;
	}
	svg{
		fill: #D5EF7F;
	}
`