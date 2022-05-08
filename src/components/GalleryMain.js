import React from 'react';
import Image from './Image';

export default function GalleryMain(props) {
  const { images } = props;
  return (
    <div className = 'container ' >
      <h2>Gallery</h2>
      <div className="row">
        {images.map((image) => (
          <Image key={image.id} image={image}></Image>
          ))}
        </div>
    </div>
  );
}