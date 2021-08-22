import React, { useState } from 'react';
import Loading from './Loading';
import Transition from './Transition';

export default function Inicio() {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      {showContent ? (
        <>
          <Transition />
        </>
      ) : (
        <Loading setShowContent={setShowContent} />
      )}
    </div>
  );
}

