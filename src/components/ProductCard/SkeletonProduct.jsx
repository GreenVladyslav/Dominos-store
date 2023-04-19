import React from 'react';
import ContentLoader from 'react-content-loader';

import './productcard.scss';

const SkeletonProduct = (props) => (
  <ContentLoader
    speed={2}
    width={332}
    height={441}
    viewBox="0 0 332 441"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="product-block"
    {...props}>
    <rect x="3" y="0" rx="10" ry="10" width="330" height="212" />
    <rect x="291" y="206" rx="0" ry="0" width="1" height="1" />
    <rect x="347" y="233" rx="0" ry="0" width="15" height="6" />
    <rect x="104" y="102" rx="0" ry="0" width="1" height="0" />
    <rect x="104" y="102" rx="0" ry="0" width="1" height="0" />
    <rect x="63" y="234" rx="12" ry="12" width="207" height="29" />
    <rect x="105" y="285" rx="12" ry="12" width="110" height="29" />
    <rect x="164" y="340" rx="12" ry="12" width="162" height="46" />
    <rect x="97" y="556" rx="0" ry="0" width="3" height="34" />
    <rect x="14" y="348" rx="12" ry="12" width="100" height="29" />
  </ContentLoader>
);

export default SkeletonProduct;
