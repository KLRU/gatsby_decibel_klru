import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'


const LatestNewsDiv = styled.div`
box-sizing: border-box;
width:80%;
.news_item {
  display:grid;
  grid-template-columns: 1fr 3fr;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  .latestNewsImage{
    img{
      width:100%;
      height:100%;
    }
  }
  .story{
    padding-left:20px;
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
  console.log(props);
  return(
    <LatestNewsDiv>
    <div className="news_item">
      <div className='latestNewsImage'>
      <img src={props.heroImage.fluid.src} alt={props.title} />
      </div>
      <div className='story'>
      <h1><Link to={props.slug}>{props.title}</Link></h1>
            <p className='date'>{props.publishDate}</p>
            <p className='excerpt' dangerouslySetInnerHTML={{__html:props.body.childMarkdownRemark.excerpt}}></p>
      </div>
    </div>
    
    </LatestNewsDiv>
  )
}

export default LatestNewsItem