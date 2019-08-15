import React from 'react'
//import {Link} from 'gatsby'
import styled from 'styled-components'

const StoryDiv= styled.div`
  display:grid;
  width:1150px;
  grid-template-columns:550px 550px;
 
  grid-gap:50px;
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