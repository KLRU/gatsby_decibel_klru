import React from 'react';
import { graphql } from 'gatsby';
import TagList from '../components/TagList';
import Iframe from 'react-iframe';

function determineVideoElement(videoSource, videoCode) {
  videoSource = videoSource.toLowerCase();
  let videoUrl;
  if (videoSource === 'youtube') {
    videoUrl = `https://www.youtube.com/embed/${videoCode}`;
  } else if (videoSource === 'media manager') {
    videoUrl = `https://video.klru.tv/widget/partnerplayer/${videoCode}`;
  } else if (videoSource === 'vimeo') {
    videoUrl = `http://player.vimeo.com/video/${videoCode}`;
  } else if (videoSource === 'facebook') {
    videoUrl = `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/decibelatx/videos/${videoCode}/`;
  }
  return <Iframe url={videoUrl}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
}

const PostTemplate = ({data, pageContext}) =>{
  const{
    title,
    slug,
    publishDate,
    heroImage,
    featuredVideo,
    body,
    tags,
  }=data.contentfulPost
  const postNode = data.contentfulPost
  return(
    <div>
      <img src={heroImage.fluid.src} />
      <h1>{title}</h1>
      {determineVideoElement(featuredVideo.source, featuredVideo.embedCode)}
      <p dangerouslySetInnerHTML={{__html:body.childMarkdownRemark.html}}></p>
      {tags && <TagList tags={tags} />}
     
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      title
      slug
      publishDate(formatString: "MMMM DD YYYY")
      heroImage {
        fluid {
          src
        }
      }
      featuredVideo {
        title
        embedCode
        source
      }
      body {
       childMarkdownRemark{
         html
         excerpt(pruneLength: 320)
       }
      }
      tags{
        title
        slug
      }
    }
  }
`
export default PostTemplate