import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useState } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Layout = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = (data) => {
    setShowModal(data)
  }

  return (
      <div >
      <AppBar showModal={showModal} handleModal={handleModal} />
      <Suspense fallback={null}>
        <div style={{width: '100%', overflowX: 'hidden'}}>
          {showModal ? <MobileMenu handleModal={handleModal} /> :<Outlet />}
        </div>
               
    </Suspense>
    </div>
  );
};