import { StyledButton} from "./MobileMenuButton.styled";
import { useEffect } from "react";
import { motion,useAnimation  } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MobileMenuButton = ({ showModal, handleModal }) => {
  const controls = useAnimation();

  useEffect(() => {
  controls.start(!showModal ? "closed" : "open");
},[controls, showModal])

  return (
  
    // !showModal ? <StyledButton type='button' onClick={() => handleModal(true)}><StyledBurgerSvg /></StyledButton>
    //   : <StyledButton type='button' onClick={() => handleModal(false)}><StyledCloseSvg /></StyledButton>
    <StyledButton type="button" onClick={() => handleModal(!showModal)}>
      <motion.svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        initial={false}
        animate={controls}
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </motion.svg>
      </StyledButton>
      
   
    )
}