import React from 'react'
//import {Link} from 'gatsby'
import styled from 'styled-components'

const StoryDiv= styled.div`
  display:grid;
  grid-template-columns:50% 50%;
  grid-gap:1px;
`

const SecondaryStoryGrid = props =>{
  return(
  <StoryDiv>{props.children}</StoryDiv>
  // <List>
  //   {props.tags.map(tag =>(
  //     <li key={tag.id}>
  //       <Link to={`/${tag.slug}`}>{tag.title}</Link>
  //     </li>
  //   ))}
  // </List>
  )
};

export default SecondaryStoryGrid;