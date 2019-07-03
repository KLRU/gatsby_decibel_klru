import React from "react"
import{graphql} from 'gatsby'
import { Link } from 'gatsby'
import "../styles/main.css"
import Container from "../components/Container/Container"
import TagList from '../components/TopicList/TagList'
import TagItem from '../components/TopicList/TagItem'
import FeaturedHero from "../components/FeaturedHero/FeaturedHero"
import LatestNewsItem from "../components/LatestNews/LatestNewsItem"
import LatestNewsList from "../components/LatestNews/LatestNewsList"


const IndexPage = ({data}) => {
  const posts=data.allContentfulPost.edges
  const tags=data.allContentfulTag.edges
  const mainPosts=data.featuredMainPost.edges
  const sidePosts=data.featuredSidePost.edges
  const heroPosts=data.allContentfulHomepage.edges
  //const sidePosts=heroImages.secondaryStories
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
{/* 
      <div>
        <div>
          {heroPosts.map(({node:heroPost})=>(
            <div>{heroPost.secondaryStories.title}</div>
          ))}
        </div>
      </div> */}
 
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
      </TagList>
    <div>
      <Link to={'/about'}>About Page</Link>
      <Link to={'/topics'}>Topics</Link>
      <LatestNewsList>
       {posts.map(({node:post})=>(
         <LatestNewsItem key={posts.id} {...post}/>
       ))}
      </LatestNewsList>


      
    </div>
    </Container>
  )
}

export const query = graphql`
query{
  allContentfulPost( sort: { fields: [publishDate], order: DESC }
    skip:3){
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
  },
  
  allContentfulHomepage{
    edges{
      node{
        title
        mainStory{
          title
          heroImage{
            fluid{
              src
            }
          }
        }
        secondaryStories{
          title
          heroImage{
            fluid{
              src
            }
          }
        }
      }
    }
  }
}
`

export default IndexPage
