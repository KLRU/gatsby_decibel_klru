import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'


const LatestNewsDiv = styled.div`
box-sizing: border-box;
display: 'grid';
width:'100%'; 
border-bottom: 1px solid #ccc;
.news_item {
  display:grid;
  grid-template-columns: minmax(min-content, 275px) 1fr;
  grid-template-rows: minmax(min-content, 175px) 1fr;
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
  //console.log(props);
  return(
    <LatestNewsDiv>
    <div className="news_item">
      <div className='latestNewsImage'>
      <img src={props.heroImage.fluid.src} alt={props.title} />
      </div>
      <div className='story'>
      <h1><Link to={`/${props.tags[0].slug}/${props.slug}`}>{props.title}</Link></h1>
            <p className='date'>{props.publishDate}</p>   
            <p className='excerpt' dangerouslySetInnerHTML={{__html:props.body.childMarkdownRemark.excerpt}}></p>
      </div>
    </div>
    
    </LatestNewsDiv>
  )
}

export default LatestNewsItem