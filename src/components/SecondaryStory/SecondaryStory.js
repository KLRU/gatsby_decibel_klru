import React from 'react';
import { Link } from 'gatsby';
import Container from '../Container/Container';

const SecondaryStory = props => {
  const secondaryStory = props;
  return (
    <Container>
      <Link to={`/${secondaryStory.tags[0].slug}/${secondaryStory.slug}`}><img src={`http:${secondaryStory.heroImage.fluid.src}`} alt={secondaryStory.heroImage.title} className='latestNewsImage' /></Link>
      <Link to={`/${secondaryStory.tags[0].slug}/${secondaryStory.slug}`}><h2>{secondaryStory.title}</h2></Link>
    </Container>
  )
};

export default SecondaryStory;
