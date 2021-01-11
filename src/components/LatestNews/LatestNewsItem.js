import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
//import Img from 'gatsby-image'
//import PlayButton from '../../images/PlayButtonWhite.png'
import BlackPlayButton from '../../images/BlackPlayButton.png'


const LatestNewsDiv = styled.div`
box-sizing: border-box;
display: grid;
width:100%; 
border-bottom: 1px solid rgba(0, 57, 70, .25);
.news_item {
  display:grid;
  width:100%;
  grid-template-columns: minmax(min-content, 275px) 1fr;
  //grid-template-rows: minmax(min-content, 175px) 1fr;
  @media screen and (max-width: 500px){
    grid-template-columns: 1fr;
  }
  height:100%;
  margin-bottom: 10px;
  padding-top: 20px;
  //justify-items:center;
  .latestNewsImage{
    width:100%; 
    height:0;
    padding-bottom:56.25%;
    position:relative;
    img{
      position:absolute;
      width:100%;
      height:100%;
      border:none;
    }
  }
  .story{
    padding-left:10px;
    h1{
      margin:0;
      span{
        padding-right: 5px;
        img{
          width: 20px;
        }
      }
    }
    p{
      margin:0;
    }
    .date{
      margin:10px 0;
    }
  }
}
   
`
const LatestNewsItem = props => {
  function AddPlayButton(){
    if(props.featuredVideo){
      return <h1><Link to={`/${props.tags[0].slug}/${props.slug}`}><span><img src={BlackPlayButton} alt={"Play Button"}/></span>{props.title}</Link></h1>
    }else{
      return <h1><Link to={`/${props.tags[0].slug}/${props.slug}`}>{props.title}</Link></h1>
    }
  }

  function AddAuthor(){
    if(props.author){
      return <div><span>By {props.author} | {props.publishDate} </span></div>
    }
    return <div className='date'>{props.publishDate}</div>
  }
  //console.log(props);
  return(
    <LatestNewsDiv>
    <div className="news_item">
      <div className='latestNewsImage'>
      <img src={props.heroImage.fluid.src} alt={props.title} />
      </div>
      <div className='story'>
      {/* <h1><Link to={`/${props.tags[0].slug}/${props.slug}`}>{props.title}</Link></h1> */}
      <AddPlayButton />
            <AddAuthor /> 
            <div className='excerpt' dangerouslySetInnerHTML={{__html:props.body.childMarkdownRemark.excerpt}}></div>
      </div>
    </div>
    
    </LatestNewsDiv>
  )
}

export default LatestNewsItem