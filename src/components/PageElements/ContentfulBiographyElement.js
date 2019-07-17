import React from 'react';
import BioElementsGrid from '../BioElements/BioElementsGrid';


const ContentfulBiographyElement = props => {
  return (
    <BioElementsGrid>
      <img src={`https:${props.bioImage.file.url}`} alt={props.bioName} />
     <div>
      <p>{props.bioName}</p>
      <p dangerouslySetInnerHTML={{__html:props.bioText.childMarkdownRemark.html}}></p>
    </div>
    </BioElementsGrid>
  )
};

export default ContentfulBiographyElement;
