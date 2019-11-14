import React from 'react'
//import {Link} from 'gatsby'
import styled from 'styled-components'

const StoryDiv= styled.div`
  display:grid;
  //width:100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-column-gap:50px;
  grid-row-gap:20px;
  // @media only screen and (max-width: 1170px){
  //   display:none;
  // }
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

//export default SecondaryStoryGrid;