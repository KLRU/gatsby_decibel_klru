import React from 'react';
import styled from 'styled-components';
//import ImageGallery from 'react-image-gallery';

class Slideshow extends React.Component{
render(){
  const slideshowImages=this.props;
  const allImages=slideshowImages.allContentfulSlideshow.edges.node.images;

  return(
    <div>
  {allImages.map((allImage)=>(
    <h1>{allImage.title}</h1>
  ))}
  </div>
  );

}

}

//export default Slideshow;