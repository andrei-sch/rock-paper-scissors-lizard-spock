import React from 'react'

function ImageGetter({name,classStyle}) {
    //import image
    const image = require(`../../Assets/${name}.svg`)
    if (!image) console.log(`Image ${name} doesn't exist`)
  return <img src={image} alt={name} className={classStyle}/>
}

export default ImageGetter