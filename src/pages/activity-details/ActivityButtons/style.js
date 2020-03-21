import styled from 'styled-components';

export const ActivityButtonsWrapper = styled.div`
    height: 60px;
    width: 100%;
    font-size: 14px;
    svg{
        width: 24px;
        height: 24px;
    }
    .purple {
        background-color: #8560A9;
        width: 28%;
        height: 60px;
        border: none;
        margin: -1px;
        svg{
            fill: #463258;
        }
        .liked{
            fill: #D5EF7F;
        }
    }
    .yellow {
        background-color: #D5EF7F;
        width: 45%;
        height: 60px;
        border: none;
        color: #788C36;
        font-weight: bold;
        svg{
            fill: #788C36;
            margin-right: 10px;
        }
        .joined {
            fill: #8560A9;
        }
        .btnText {
            position: relative;
            top: -5px;
        }
    }
`;
