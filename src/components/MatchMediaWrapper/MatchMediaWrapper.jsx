import { useState, useEffect } from 'react';
import { NavBar } from 'components/NavBar/NavBar';
import { MobileMenuButton} from 'components/MobileMenuButton/MobileMenuButton';

export const MatchMediaWrapper = ({showModal, handleModal}) => {
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
   
     useEffect(() => {
       const mediaWatcher = window.matchMedia("(min-width: 600px)");
       setIsNarrowScreen(mediaWatcher.matches);
     
       function updateIsNarrowScreen(e) {
         setIsNarrowScreen(e.matches);
         handleModal(false)
                }
       if(mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
      }
    } else {
      mediaWatcher.addEventListener(updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeEventListener(updateIsNarrowScreen)
      }
    }
    
     }, [handleModal, isNarrowScreen]);
  return isNarrowScreen ? <NavBar /> : <MobileMenuButton showModal={showModal} handleModal={handleModal} />;
}