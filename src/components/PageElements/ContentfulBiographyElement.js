import React from 'react';
import BioElementsGrid from '../BioElements/BioElementsGrid';


const ContentfulBiographyElement = props => {
  return (
    <BioElementsGrid>  
      <p>{props.bioName}</p>
      <img src={`https:${props.bioImage.file.url}`} alt={props.bioName} />
     <div>
      <p dangerouslySetInnerHTML={{__html:props.bioText.childMarkdownRemark.html}}></p>
    </div>
    </BioElementsGrid>
  )
};

export default ContentfulBiographyElement;
