import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby'
import '../styles/global.css'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import ContactForm from '../components/ContactForm/ContactForm';
import Container from '../components/Container/Container';
import HeroGrid from '../components/HeroGrid';
import MainGrid from '../components/MainGrid';
import Header from '../components/Header/Header';
import TagList from '../components/TopicList/TagList';
import TagItem from '../components/TopicList/TagItem';
//import MainStory from '../components/MainStory/MainStory';
import FacebookLive from '../components/FacebookLive/FacebookLive';
import FeaturedStoryBlock from '../components/FeaturedStoryBlock/FeaturedStoryBlock';
import FeaturedTopicBlock from '../components/FeaturedTopicBlock/FeaturedTopicBlock'
//import DropDownMenu from '../components/Navigation/DropdownMenu/Dropdown';
import ContentfulPhotoElement from '../components/PageElements/ContentfulPhotoElement';
import ContentfulVideoElement from '../components/PageElements/ContentfulVideoElement';
import SecondaryStory from '../components/SecondaryStory/SecondaryStory';
import SecondaryStoryGrid from '../components/SecondaryStory/SecondaryStoryGrid'
import LatestNews from '../components/LatestNews/LatestNews';
import LatestNewsItem from "../components/LatestNews/LatestNewsItem"
import LatestNewsList from "../components/LatestNews/LatestNewsList"
import Footer from '../components/Footer/Footer';
import TexasMutual from '../components/LatestNews/TexasMutual'
import TwoStoryBlock from '../components/TwoStoryBlock/TwoStoryBlock';

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPost.edges;
  const { title, mainStory} = data.allContentfulHomepage.edges[0].node;
  const featuredStory = data.contentfulFeaturedStoryBlock;
  const featuredTopic = data.contentfulFeaturedTopicBlock;
  const facebookLive = data.contentfulFacebookLiveEvent;
  const twoStoryBlock = data.contentfulTwoStoryBlock;
  const [ ...tags ] = data.allContentfulTag.edges;
  const divStyle = {
    display: 'grid',
    gridTemplateColumns:'70% 30%',
    width:'100%',
    margin: '20px auto',
    //marginTop: '20px',
    alignContent:'center',
    justifyItems:'center',
    fontSize:'18px'
  };
  return (
    <Container>
      <Header>
      <TagList>
         {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
           <Link to={'/topics'}><p>+ All Topics</p></Link>
      </TagList>
      </Header>
      {/* <DropDownMenu>
          {tags.map(({node:tag})=>(
           <TagItem key={tag.id} {...tag}/>
           ))}
      </DropDownMenu> */}
      <FacebookLive {...facebookLive} key={facebookLive.id}/>
      {/* <iframe src={facebookLive.iFrameSrc}></iframe> */}
      <HeroGrid>
        {/* <MainStory {...mainStory} key={mainStory.id} />  */}
        <FeaturedStoryBlock {...featuredStory} key={featuredStory.id}/>
      </HeroGrid>
      <MainGrid>
        <section>
        <FeaturedTopicBlock {...featuredTopic} key={featuredTopic.id}/>
        <TwoStoryBlock {...twoStoryBlock} key={twoStoryBlock.id}/>
        <LatestNews>
          <LatestNewsList>
            {posts.map(({node:post})=>(
              <LatestNewsItem key={posts.id} {...post}/>
            ))}
          </LatestNewsList> 
        </LatestNews>   
        </section>
        <aside>
           <TexasMutual /> 
           <ContactForm />
           <div>
            <div>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="DecibelAtx"
                options={{height: 600}}
                //onComplete={action}
                />
            </div>
          </div> 
         
        </aside>
      </MainGrid>
           
    <Footer />
    </Container>
  )
};

export const query = graphql`
  query {
    allContentfulPost( 
      sort: { fields: [publishDate], order: DESC }
      limit: 5
     ) {
      edges {
        node {
          title
          slug
          id
          heroImage {
            fluid {
              src
            }
          }
          publishDate(formatString: "MMMM DD, YYYY")
          featuredVideo {
            title
            embedCode
            source
          }
          body {
            childMarkdownRemark {
              html
              excerpt(
                format: HTML
                pruneLength: 140)
            }
          }
          tags {
            title
            slug
            topicDescription{
              childMarkdownRemark{
                html
              }
            }
          }
        }
      }
    },
    allContentfulTag(
      limit: 10
      sort: { fields: title, order: ASC  }
      filter:{
        title:{
          ne:"Episodes"
        }
      }
    ){
      edges {
        node {
          title
          slug
          topicDescription{
            childMarkdownRemark{
              html
            }
          }
        }
      }
    },
    allContentfulHomepage {
      edges {
        node {
          title
          mainStory {
            id
            title
            slug
            publishDate(formatString: "MMMM DD, YYYY")
            heroImage {
              fluid {
                src
              }
              description
            }
            featuredVideo{
              embedCode
              source
            }
            body {
              childMarkdownRemark {
                html
                excerpt(
                  format: HTML
                  pruneLength: 140)
              }
            }
            tags {
              title
              slug
              topicDescription{
                childMarkdownRemark{
                  html
                }
              }
            }
          }
        }
      }
    },
    contentfulFeaturedTopicBlock{
      title
      id
      featuredTopicImage{
        fluid{
          src
        }
      }
      featuredTopicTag{
        title
        slug
      }
      shortTopicDescription{
        childMarkdownRemark{
          html
        }
      }
      associatedTopicPost{
        id
        slug
        title
        publishDate(formatString: "MMMM DD, YYYY")
      }
    },
    contentfulFeaturedStoryBlock{
      id
      title
      storyPostDate(formatString: "MMMM DD, YYYY")
      shortDescription{
        childMarkdownRemark{
          html
        }
      }
      heroImage{
        fluid{
          src
        }
      }
      associatedPost{
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage{
          fluid{
            src
          }
        }
        featuredVideo{
          title
          embedCode
          source
        }
        tags{
          slug
          title
        }
      }
    },
    contentfulFacebookLiveEvent{
      title
      embedCode
      isLive
      iFrameSrc
    },
    contentfulTwoStoryBlock{
      title
      secondaryFeaturedPost{
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage{
          fluid{
            src
          }
        }
        tags{
          slug
          title
        }
      }
    }
  }
`

export default IndexPage;