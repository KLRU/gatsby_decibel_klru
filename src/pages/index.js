import React from "react"
import{graphql} from 'gatsby'
import { Link } from 'gatsby'
import "../styles/main.css"
import Container from "../components/Container/Container"
import TagList from '../components/TagList'
import FeaturedHero from "../components/FeaturedHero/FeaturedHero"
import LatestNews from "../components/LatestNews/LatestNews"


const IndexPage = ({data}) => {
  const posts=data.allContentfulPost.edges
  const tags=data.allContentfulTag.edges
  const mainPosts=data.featuredMainPost.edges
  const sidePosts=data.featuredSidePost.edges
  //const featuredPost=posts[0].node
  return(
    <Container>
      <FeaturedHero className='mainPostDiv'>
      <div className='topImageDiv'>
        {mainPosts.map(({node:mainPost})=>(
          <div >
          <img src={mainPost.heroImage.fluid.src} alt={mainPost.title}/>
          <h2><Link to={mainPost.slug}>{mainPost.title}</Link></h2>
          </div>
        ))}
        </div>
        <div className='sidePostDiv'>
        {sidePosts.map(({node:sidePost})=>(
          <div>
          <img src={sidePost.heroImage.fluid.src} alt={sidePost.title}/>
          <h2><Link to={sidePost.slug}>{sidePost.title}</Link></h2>
        </div>
        ))}
      </div>
      </FeaturedHero>
      <TagList>
        {tags.map(({node:tag})=>(
          <li key={tag.id}><Link to={`/${tag.slug}/`}>{tag.title}</Link></li>
        ))}
      </TagList>
      
    <div>
      <LatestNews>
      {posts.map(({node:post}) =>(
        <div key={post.id}>
          <img className='latestNewsImage' src={post.heroImage.fluid.src} alt={post.title}/>
          <div className='latestNewsText'>
            <h1><Link to={post.slug}>{post.title}</Link></h1>
            <p>{post.publishDate}</p>
            <p dangerouslySetInnerHTML={{__html:post.body.childMarkdownRemark.excerpt}}></p>
          </div>   
          </div>
      ))}
      </LatestNews>
    </div>
    </Container>
  )
}

export const query = graphql`
query{
  allContentfulPost( sort: { fields: [publishDate], order: DESC }
    filter:{
      featured:{
          eq:"Not_Featured"
          }
         }){
    edges{
      node{
        title
        slug
        id
        heroImage{
          fluid{
            src
          }
        }
        publishDate(formatString: "MMMM DD, YYYY")
        featuredVideo{
          title
          embedCode
          source
        }
        body{
          childMarkdownRemark{
            html
            excerpt(
              format: HTML
              pruneLength: 140)
          }
        }
        tags{
          title
          slug
        }
        featured
      }
    }
  },
  featuredMainPost: allContentfulPost(
    filter:{
      featured:{
          eq:"Main_Featured"
          }
         }
    ){
      edges{
        node{
          title
          slug
          id
          heroImage{
            fluid{
              src
            }
          }
          publishDate(formatString: "MMMM DD, YYYY")
          featuredVideo{
            title
            embedCode
            source
          }
          body{
           body
          }
          tags{
            title
            slug
          }
          featured
        }
      }
    },
    featuredSidePost: allContentfulPost(
      filter:{
        featured:{
            eq:"Side_Featured"
            }
           }
      ){
        edges{
          node{
            title
            slug
            id
            heroImage{
              fluid{
                src
              }
            }
            publishDate(formatString: "MMMM DD, YYYY")
            featuredVideo{
              title
              embedCode
              source
            }
            body{
             body
            }
            tags{
              title
              slug
            }
            featured
          }
        }
      },
  allContentfulTag(
    limit: 10
    sort: { fields: [post___publishDate], order: DESC }
  ){
    edges{
      node{
        title
        slug
      }
    }
  }
}
`

export default IndexPage
