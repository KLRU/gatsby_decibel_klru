import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
//import PlayButton from '../../images/PlayButtonWhite.png'
import BlackPlayButton from '../../images/BlackPlayButton.png'

const TagCardDiv= styled.div`
  width: 300px;
  max-height: 300px;
  margin: 10px auto;
  padding:10px;
  border: 1px solid rgba(0, 57, 70, .25);
  box-shadow: 0px 2px 3px rgba(0, 57, 70, .25);
  @media screen and (max-width: 675px){
    margin: 5px 0;
    width: 275px;
  }
  .mediaDiv{
    width:100%; 
    height:0;
    padding-bottom: 56.25%;
    position:relative;
    img{
      position:absolute;
      width:100%;
      height:100%;
      border:none;
    }
  }
 
  h2 {
    margin: 0;
    margin-top: 10px;
    width: 100%;
    padding-left: 0px;
    color: #000;
    //font-size: 20px;
    span{
      padding: 0 5px;
      img{
        width:20px;
      }
    }
   
  }
`
const TagCards = props => {

  function AddPlayButton(){
    if(props.featuredVideo){
      return <Link to={`/${props.tag}/${props.slug}`}><h2><span><img src={BlackPlayButton} alt={"Play Button"}/></span>{props.title}</h2></Link>
    }else{
      return  <Link to={`/${props.tag}/${props.slug}`}><h2>{props.title}</h2></Link>
    }
  }
  return (
    <TagCardDiv>
      <div className='mediaDiv'>
      <img src={props.heroImage.fluid.src} alt={props.heroImage.title} />
      </div>

      {/* <Link to={`/${props.tag}/${props.slug}`}><img src={BlackPlayButton} alt={"Play Button"}/><h2>{props.title}</h2></Link> */}
      <AddPlayButton />
    </TagCardDiv>
  )
};

export default TagCards;
