import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
import Footer from '../components/Footer/Footer'
import styled from 'styled-components';
import SEO from '../components/SEO';

//import TagCards from '../components/TagCards/tagCards';

const BlogPost =styled.div`
display:grid;
justify-items:center;
margin: 10px auto;
padding: 10px;
border: 1px solid #E7E9E9;
box-shadow: 0px 2px 4px #eee;
width: 1100px;
h2{
  margin:10px 0 0 0;
  font-size:30px;
}
p{
  margin-top:0;
}
.blogBody{
  width:800px;
  margin-top:20px;
  font-size:22px;
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
      <img src={`https:${image.fluid.src}`} alt={image.description}/>
      <p className='blogBody' dangerouslySetInnerHTML={{__html:blogPostBody.childMarkdownRemark.html}}></p>
    
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