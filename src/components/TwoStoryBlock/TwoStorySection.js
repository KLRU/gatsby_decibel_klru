import React from 'react';
//import { Link } from 'gatsby';
import styled from 'styled-components';


const TwoStoryDiv = styled.div`
  width: 100%;
  margin: 0;
  display:grid;
  grid-template-columns: 100%;
  @media screen and (max-width: 750px){
    grid-template-columns: 1fr;
  }
  .blockTitle{
    color:#fff;
    background-color: #003946;
    padding: 10px;
  }

`
const TwoStorySection = props => {
  //const twoStory = props;
  //const twoStoryPosts = twoStory.secondaryFeaturedPost

  // function AddPlayButton(){
  //   if(twoStory.featuredVideo){
  //     return <span><img src={BlackPlayButton} alt={'play button'}/></span>
  //   }else{
  //     return <span></span>
  //   }
  // }


  return(
    <TwoStoryDiv>{props.children}</TwoStoryDiv>
  )
};

export default TwoStorySection;
