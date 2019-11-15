import React from 'react';
//import BioElementsGrid from '../BioElements/BioElementsGrid';
import styled from 'styled-components';

const BioElementsGridFrame = styled.div`
display:grid;
grid-template-columns: 30% 70%;
grid-template-rows: minmax(min-content, 175px) 1fr;
@media screen and (max-width: 500px){
  grid-template-columns: 1fr;
}
text-align:center;
align-items:center;
border: 1px solid #ccc;
grid-gap:20px;
margin-top:30px;
.imageDiv{
  //width:100%; 
  //height:0;
  //padding-bottom:56.25%;
  //position:relative;
  img{
    //position:absolute;

    width:200px;
    height:200px;
    border:none;
    }
}
`


const ContentfulBiographyElement = props => {
  return (
    <BioElementsGridFrame> 
   
      <div class='imageDiv'> 
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
