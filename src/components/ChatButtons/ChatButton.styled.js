import { styled } from "styled-components";
import { ReactComponent as ChatSvg } from 'img/chat.svg'

export const StyledContainer = styled.div`
position: fixed;
bottom:25px;
right:20px;

.main-button{
    position:relative;
    border: none;
    border-radius: 50%;
    padding:10px;
    background-color: #009999;
    z-index: 999;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 3px 3px rgba(0, 153, 153, 0.5);
}

.secondary-button{
    position: absolute;
    top:0;
    left: 0;
     border: none;
    border-radius: 50%;
    padding:10px;
    // background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 3px 3px rgba(0, 153, 153, 0.5);
}
.viber-button {
    background-color:#7360f2;
}
.telegram-button {
    background-color:#54a7e5;
}

.facebook-button {
    padding:0;
}
.insta-button {
    padding:0;
}
.svg{
    width:30px;
    height: 30px;
}
.insta-svg {
   width:50px;
    height: 50px; 
}
.facebook-svg{
      width:50px;
    height: 50px; 
    fill: #3B579D !important;
}
`

export const StyledChatSvg = styled(ChatSvg)`

`