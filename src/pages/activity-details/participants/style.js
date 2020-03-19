import styled from 'styled-components';

export const ParticipantsWrapper = styled.div`
	margin: 20px;
	.likes{
		margin-top: 15px;
	}
`;

export const ParticipantsContent = styled.div`
	font-size: 12px;
	color: #67616D;
	padding-bottom: 15px;
	padding-left: 10px;
	border-bottom: 1px solid #E8E8E8;
	position: relative;
`;

export const Number = styled.span`
	position: absolute;
	margin-top: 10px;
`;

export const Users = styled.div`
	display: inline-block;
	margin-left: 45px;
	span{
		margin-left: 10px;
		margin-bottom: 10px;
		width: 30px;
		height: 30px;
	}
	img{
		width: 30px;
		height: 30px;
	}
`;

