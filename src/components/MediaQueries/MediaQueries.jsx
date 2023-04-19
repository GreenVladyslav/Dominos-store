import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import MediaHeader from '../Header/MediaHeader';

import MediaSideBar from '../SideBar/MediaSideBar';
import SideBar from '../SideBar/SideBar';

function MediaQueriesHeader() {
  const [maxWidth, setMaxWidth] = useState(false);

  useEffect(() => {
    function handleResize() {
      setMaxWidth(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [maxWidth]);

  return (
    <>
      {maxWidth ? (
        <MediaHeader />
      ) : (
        <>
          <Header /> <Categories />
        </>
      )}
      {maxWidth ? <MediaSideBar /> : <SideBar />}
    </>
  );
}

export default MediaQueriesHeader;
