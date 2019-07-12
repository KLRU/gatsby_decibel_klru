import React from 'react';
import BioElementsGrid from '../BioElements/BioElementsGrid'

const ContentfulBiographyElement = props => {
  return (
    <div>
      <img src={`https:${props.bioImage.file.url}`} alt={props.bioName} />
      <span>
      <p>{props.bioName}</p>
      <p dangerouslySetInnerHTML={{__html:props.bioText.childMarkdownRemark.html}}></p>
      </span>
    </div>
  )
};

export default ContentfulBiographyElement;
