import { StyledAppBarDiv } from "./AppBar.styled";
import { MatchMediaWrapper } from "components/MatchMediaWrapper/MatchMediaWrapper";
export const AppBar = ({showModal, handleModal, handleModalScreen}) => {

    return (
        <StyledAppBarDiv>
            <MatchMediaWrapper showModal={showModal} handleModal={handleModal} />
        </StyledAppBarDiv>
      
    )
}