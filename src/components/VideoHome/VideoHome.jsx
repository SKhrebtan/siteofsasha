import { StyledDiv, StyledVideo } from "./VideoHome.styled"
export const VideoHome = () => {

    return (
        <StyledDiv>
        <StyledVideo width="100%" height='auto' autoPlay loop muted>
            <source src='https://res.cloudinary.com/dwzeqka9z/video/upload/v1700685226/kmzqqfnodaapgk5nnnoz.mp4' type='video/mp4'></source>
          
            </StyledVideo>
              <p className="videotext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, id mollitia. Nemo, perferendis expedita ipsa ullam enim beatae aliquam fugit fuga adipisci vitae reprehenderit, culpa excepturi exercitationem, voluptate magnam at!</p>
        </StyledDiv>
    )
}

