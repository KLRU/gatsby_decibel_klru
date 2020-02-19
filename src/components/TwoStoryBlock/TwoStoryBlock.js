import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
//import PlayButton from '../../images/PlayButtonWhite.png'
import BlackPlayButton from '../../images/BlackPlayButton.png'

const TwoStoryBlockDiv = styled.div`
  width:100%;
  margin: 50px 0;
  display:grid;
  grid-gap: 5px 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  @media screen and (max-width: 750px){
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
`
const PostDiv = styled.div`
  width:100%; 
  display: block;
  height:100%;
  border: 1px solid rgba(0, 57, 70, .25);
  //align-items: end;
  //justify-content: end;
  .imageDiv{
    width:100%; 
    height:0;
    padding-bottom:56.25%;
    position:relative;
  }
  .imageDiv img{
    position:absolute;
    width:100%;
    height:100%;
    border:none;
  }
  .infoDiv{
    padding:10px;
  }
  .postTitle{
    //position:absolute;
    //padding-left:10px;
    margin-bottom:5px;
    color:#000;
    //text-shadow: 1px 1px #003946;
  }
`

class TwoStoryBlock extends React.Component{

    render(){
      const twoStory = this.props;
      const twoStoryPosts = twoStory.secondaryFeaturedPost
      //const playButton = twoStoryPosts.featuredVideo;

      function AddPlayButton(){
        if(twoStory.featuredVideo){
          return <span><img src={BlackPlayButton}/></span>
        }else{
          return <span></span>
        }
      }

      return(
        <TwoStoryBlockDiv>
       {twoStoryPosts.map((twoStoryPost)=>( 
         <Link to={`${twoStoryPost.tags[0].slug}/${twoStoryPost.slug}/`}>
         <PostDiv>
           <div className='imageDiv'>
           <img src={`http:${twoStoryPost.heroImage.fluid.src}`} alt={twoStoryPost.heroImage.description} />
           </div>
           <div className='infoDiv'>
           <h2 className='postTitle'><AddPlayButton/>{twoStoryPost.title}</h2> 
           <p dangerouslySetInnerHTML={{__html:twoStoryPost.body.childMarkdownRemark.excerpt}}></p>
           </div> 
         </PostDiv>
         </Link>
          ))} 
         </TwoStoryBlockDiv> 
      )
    }


}
  

  // function AddPlayButton(){
  //   if(playButton){
  //     return <h2 className='postTitle'><span><img src={BlackPlayButton} alt={"Play Button"}/></span>{twoStoryPosts.title}</h2>
  //   }else{
  //     return <h2 className='postTitle'>{twoStoryPosts.title}</h2>
  //   }
  // }
  // return(
  //   <div>
        
  //   </div>
  // )


export default TwoStoryBlock;