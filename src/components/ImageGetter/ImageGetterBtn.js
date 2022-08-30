import React from "react";

// fetches the image from the /Assets folder, transforms it into a Button and sets its style

function ImageGetter({ name, classStyle,classStyleBtn, handleClick }) {
  //import image
  const image = require(`../../Assets/${name}.svg`);
  if (!image) console.log(`Image ${name} doesn't exist`);
  return (
    <button className={classStyleBtn} onClick={handleClick}>
      <img src={image} alt={name} className={classStyle} />
    </button>
  );
}

export default ImageGetter;
