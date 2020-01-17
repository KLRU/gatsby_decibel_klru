import React from 'react';
//import BioElementsGrid from '../BioElements/BioElementsGrid';
import styled from 'styled-components';

const BioElementsGridFrame = styled.div`

`


const ContentfulBiographyElement = props => {
  return (
    <BioElementsGridFrame> 
      <div class='imageDiv'> 
      <img src={`https:${props.bioImage.file.url}`} alt={props.bioName} />
      </div>
     <div>
      <h2>{props.bioName[0]}</h2>
      <p dangerouslySetInnerHTML={{__html:props.bioText.childMarkdownRemark.html}}></p>
    </div>
    </BioElementsGridFrame>
  )
};

export default ContentfulBiographyElement;
