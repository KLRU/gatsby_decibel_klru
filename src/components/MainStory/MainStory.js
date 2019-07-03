import React from 'react';
import { Link } from 'gatsby';
import Container from '../Container/Container';

const MainStory = props => {
  const mainStory = props;
  return(
    <Container>
      <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}><img src={`http:${mainStory.heroImage.fluid.src}`} alt={mainStory.heroImage.title} className='latestNewsImage' /></Link>
      <Link to={`/${mainStory.tags[0].slug}/${mainStory.slug}/`}><p>{mainStory.title}</p></Link>
    </Container>
  )
};

export default MainStory;
