import React from 'react';
import styled from 'styled-components';
//import ImageGallery from 'react-image-gallery';

// class Slideshow extends React.Component {
  
//   render() {
//     const imageGroup = this.props;

//     return <ImageGallery items={images} />;
//   }
// }

const Slideshow = props => {
  return(
    <div>{props.children}</div>
  )
};

//export default Slideshow;


{/* <Slideshow>
{slideshowHeroImages.map((slideshowHeroImage)=>(
  <li>{slideshowHeroImage.title}</li>
))}
</Slideshow> */}