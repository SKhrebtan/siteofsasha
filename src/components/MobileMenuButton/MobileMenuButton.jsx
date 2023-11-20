import { StyledButton,StyledBurgerSvg, StyledCloseSvg } from "./MobileMenuButton.styled";

export const MobileMenuButton = ({ showModal, handleModal }) => {

  
  return (
    !showModal ? <StyledButton type='button' onClick={() => handleModal(true)}><StyledBurgerSvg /></StyledButton>
      : <StyledButton type='button' onClick={() => handleModal(false)}><StyledCloseSvg /></StyledButton>

      // <StyledButton type='button' onClick={() =>  handleModal()}>{!showModal ? <StyledBurgerSvg /> : <StyledCloseSvg />}</StyledButton>
    )
}