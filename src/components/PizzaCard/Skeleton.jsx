import React from 'react';

import ContentLoader from 'react-content-loader';

import './pizzacard.scss';

const Skeleton = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={332}
      height={576}
      viewBox="0 0 332 576"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="pizza-block"
      {...props}>
      <rect x="3" y="0" rx="10" ry="10" width="330" height="212" />
      <rect x="41" y="282" rx="12" ry="12" width="251" height="33" />
      <rect x="63" y="234" rx="12" ry="12" width="207" height="29" />
      <rect x="121" y="345" rx="12" ry="12" width="90" height="29" />
      <rect x="15" y="345" rx="12" ry="12" width="90" height="29" />
      <rect x="221" y="346" rx="12" ry="12" width="90" height="29" />
      <rect x="197" y="398" rx="12" ry="12" width="110" height="29" />
      <rect x="20" y="398" rx="12" ry="12" width="110" height="29" />
      <rect x="19" y="447" rx="12" ry="12" width="110" height="29" />
      <rect x="198" y="447" rx="12" ry="12" width="110" height="29" />
      <rect x="154" y="504" rx="12" ry="12" width="162" height="46" />
      <rect x="97" y="556" rx="0" ry="0" width="3" height="34" />
      <rect x="23" y="514" rx="12" ry="12" width="100" height="29" />
    </ContentLoader>
  );
};

export default Skeleton;
