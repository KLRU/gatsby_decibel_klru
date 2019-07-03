import React from 'react';

const ContentfulTextElement = props => {
  return (
    <p dangerouslySetInnerHTML={{__html:props.childContentfulTextElementBodyTextNode.childMarkdownRemark.html}}></p>
  )
};

export default ContentfulTextElement;
