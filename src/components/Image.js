import React from 'react';
import ModalImage from "react-modal-image";


export default function Image(props) {
  const { image} = props;
  return (
    <div className = "col-md-4 col-xl-3 column" >
        {/* <img className="contain" src={image.largeImageURL} alt={image.tag}/> */}
        <ModalImage className="contain" small={image.largeImageURL} large={image.largeImageURL}alt={image.tag}/>
     </div>
  );
}