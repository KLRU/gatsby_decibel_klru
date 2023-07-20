import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/DecibelLogo200X100.png'
import styled from 'styled-components';

const Header = styled.header`
display:grid;
width:100%;
border-bottom: 1px solid rgba(0, 57, 70, .25);
grid-template-columns: minmax(min-content, 200px) 1fr;
@media screen and (max-width: 675px){
  grid-template-columns: minmax(min-content, 150px) 1fr;
  grid-template-rows: 70px;
`


class NavBar extends React.Component{
  render(){
    const pageContent = this.props;
    return(
      <Header>
      <h2>Hello</h2>
      <nav>
        <li>Hello</li>
      </nav>
    </Header>
    )
  }
}

// export default NavBar;