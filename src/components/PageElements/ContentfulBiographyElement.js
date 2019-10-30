import React from 'react';
//import BioElementsGrid from '../BioElements/BioElementsGrid';
import styled from 'styled-components';

const BioElementsGridFrame = styled.div`
display:grid;
grid-template-columns: 1fr 3fr;
text-align:center;
align-items:center;
border: 1px solid #ccc;
grid-gap:20px;
margin-top:30px;
img{
  width:100%;
}
`


const ContentfulBiographyElement = props => {
  return (
    <BioElementsGridFrame> 
      <div> 
      
      <img src={`https:${props.bioImage.file.url}`} alt={props.bioName} />
      </div>
     <div>
       <h2>{props.bioName}</h2>
      <p dangerouslySetInnerHTML={{__html:props.bioText.childMarkdownRemark.html}}></p>
    </div>
    </BioElementsGridFrame>
  )
};

export default ContentfulBiographyElement;
