import React from 'react';

import './Avatar.css';

type Props = {
  className?: string;
  image: string;
  altText: string;
  width?: string;
};

function Avatar(props: Props) {
  const { className, image, altText, width } = props;
  return (
    <div className={`avatar ${className}`}>
      <img src={image} alt={altText} style={{ width, height: width }} />
    </div>
  );
}

export default Avatar;
