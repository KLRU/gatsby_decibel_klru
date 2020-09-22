import React from 'react';
import { graphql } from 'gatsby';
import '../styles/global.css'
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-gtag'
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import Footer from '../components/Footer/Footer'
import styled from 'styled-components';
import SEO from '../components/SEO';

//import TagCards from '../components/TagCards/tagCards';

const BlogPost =styled.div`
display:grid;
width:100%;
max-width: 1100px;
justify-items:center;
margin: 10px auto;
padding: 10px;
border: 1px solid #E7E9E9;
box-shadow: 0px 2px 4px #eee;
h2{
  margin:10px 0 0 0;
  font-size:30px;
}
p{
  margin-top:0;
}
img{
  width:100%;
}
.blogBody{
  width:100%;
  margin-top:20px;
  font-size:18px;
  a{
    color: #003946;
    font-weight:400;
    text-decoration:underline;
  }
}
.donateDiv{
  margin: 10px auto;
  border: 1px solid #003946;
  padding: 20px;
  button{
    width:100%;
    max-width: 200px;
    background-color:#009AA6;
    color:#fff;
    font-size: 18px;
    border-radius: 5px;
    a{
      color:#fff;
      font-size: 24px;
    }
  }
  button: hover{
    background-color:#003946;
  }
}
`

const BlogTemplate = ({data, pageContext}) =>{
  const {title, author, date, blogPostBody, image, tags}=data.contentfulBlogPost;
  const tags2 = data.allContentfulTag.edges;
 // const [ ...relatedPosts ] = data.allContentfulPost.edges;
  //const { tag, tagTitle } = pageContext;


  return(
  
    <div>
       <Header>
         <SEO 
         title={title}/>
      <TagList>
         {tags2.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
          <Link to={'/topics'}><p>+ More Topics</p></Link>
      </TagList>
      </Header>
      <BlogPost>
     
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{author}</p>
      <div className='imageDiv'>
      <img src={`https:${image.file.url}`} alt={image.description}/>
      <p>{image.description}</p>
      </div>
      <div className='blogBody' dangerouslySetInnerHTML={{__html:blogPostBody.childMarkdownRemark.html}}></div>
      <div className='donateDiv'>
          <h2>Our reporting doesn’t happen without you.</h2>
          <p>Decibel’s mission is to amplify voices in our community through quality, in-depth reporting. If you support that mission please consider making a donation to Austin PBS. As a nonprofit newsroom, we rely on support from our community to keep our content free and not hidden behind a paywall. We view our work as an important service to Central Texas. Your gift makes this possible.</p>
          <button><OutboundLink href="https://austinpbs.org/donate">Donate</OutboundLink></button>
        </div>
    <div>
    <p>Related Decibel Topics:
    {tags.map((tag) => {
        return <TagItem {...tag} key={tag.id} />
      })}
      
    </p>
    </div>
      </BlogPost>
      
      <Footer />
      </div>
  
  )
}

export default BlogTemplate;

export const query = graphql`
  query($slug: String!){
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author
      date(formatString: "MMMM D, YYYY")
      blogPostBody{
        childMarkdownRemark{
          html
        }
      }
      image{
        title
        description
        file{
          url
        }
        fluid{
          src
        }
      }
      tags{
        id
        title
        slug
      }
    },
    allContentfulTag(
      limit: 10
      sort: { fields: title, order: ASC  }
    ){
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`