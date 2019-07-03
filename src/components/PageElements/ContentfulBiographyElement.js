import React from 'react';

const ContentfulBiographyElement = props => {
  return (
    <div>
      <p>{props.bioName}</p>
      <p dangerouslySetInnerHTML={{__html:props.bioText.childMarkdownRemark.html}}></p>
      <img src={`https:${props.bioImage.file.url}`} alt={props.bioName} />
    </div>
  )
};

export default ContentfulBiographyElement;
