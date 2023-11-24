import styled, {keyframes}  from "styled-components";
import { ReactComponent as MailSvg } from 'img/mail.svg'
import TextField from '@mui/material/TextField';

const float  = keyframes`
  0% {
    transform: translate(-100px,-160px);
  }
  50% {
    transform: translate(-100px,-210px);
  }
  100% {
    transform: translate(-100px,-160px);
  }
`

export const StyledMailSvg = styled(MailSvg)`
#envelope {
    transform: translate(-100px,-200px);
    animation: ${float} 2s ease-in-out infinite;
    }

@media screen and (min-width: 568px) {
    display:none;
}`

export const FormControlWrap = styled.div`
position:relative;
width: 100%;
`

export const StyledContainer = styled.div`
padding: 10px 30px;
`

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
width: 300px;
margin: 0 auto;
gap: 30px;
// height: 200px;
.submit-btn {
    margin: 0 auto;
    width: 240px;
        cursor: pointer;
    color: #FFF;
text-align: center;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.48px;
display:flex;
justify-content: center;
align-items:center;
border-radius: 7px;
padding: 14px 8px;
border-color: transparent;
background: linear-gradient(#009999, #006666, #00cccc);

transition: all 300ms linear;
&:hover {
//    background: linear-gradient(#00cccc, #006666, #009999);
   box-shadow: 0 0 5px 5px rgba(0, 215, 255, 0.4);
}
}

.error-message{
    color:#ff00ff;
    position: absolute;
    bottom: -22px;
}
`

export const StyledInputsBlock = styled.div`
position: relative;
display: flex;
flex-direction: column;
gap: 20px;
`

export const CssTextField = styled(TextField)({
    '& label': {
        fontSize: '20px',
        color: '#009999',
    },
    '& label.Mui-focused': {
        fontSize: '20px',
        color: '#00D7FF',
    },
    '& input': {
        fontSize: '24px',
        height: '24px',
        color: '#00D7FF',
    },
    '& .MuiInput-underline:before': {
         borderBottom: '2px solid #009999',
        
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#00D7FF',
    },
         });