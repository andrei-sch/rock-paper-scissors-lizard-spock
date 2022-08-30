import React from 'react'

// fetches the image from the /Assets folder and sets its style

function ImageGetter({name,classStyle}) {
    //import image
    const image = require(`../../Assets/${name}.png`)
    if (!image) console.log(`Image ${name} doesn't exist`)
  return <img src={image} alt={name} className={classStyle}/>
}

export default ImageGetter