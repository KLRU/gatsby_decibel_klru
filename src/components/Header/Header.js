import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../../images/DesktopLoGo200px.png'

const HeaderMainDiv = styled.div`
  display:grid;
  width:100%;
  z-index: 2;
  border-bottom: 1px solid #ccc;
  grid-template-columns: 1fr 3fr;
  height:125px;
  .logoImage{
    width: 100%;
    height:100%;
    padding-left:50px;
  }
  .linksDiv{
    display:grid;
    .navDiv{
    text-align:end;
    a{
      padding:10px;
      padding:25px;
      margin-top: 40px;
      font-size: 1.5rem;
      color: rgb(44, 43, 43);
    }
  }
  .topicsDiv{
    display:inline-block;
    text-align: end;
    align-items: start;
    position:relative;
    ul{
      margin:0;
      margin-top:30px;
    }
   .topicLink{
      display: inline;
      text-align:end;
      padding: 0 10px;
    }
    .allTopicsDrop{
      text-align:end;
      margin-right:25px;
      margin-left:0;
      padding:0;
    }
    a{
      color: #000
      text-decoration:none;
      display:block;
      padding: 10px;
      background-color: #fff;
   }
  }
  }
  
`


class Header extends React.Component {
  state={
    open:false,
  }
  handleDropdown = () =>{
    this.setState(state =>{
      return{
        open: !state.open,
      }
    })
  }

  render(){
    // function showTopics(e){
    //   console.log(e.target)
    //   const x= document.getElementById('topicsDiv');
    //   x.style.display='block'
    // }
    return(
      <HeaderMainDiv className="headerMainDiv">
        <div className="logoDiv">
        <Link to={'/'}><img src={Logo} alt='Logo' className='logoImage' /></Link>
        </div>
        <div className='linksDiv'>
        <div className="navDiv">
        <Link to={'/about'}>About Us</Link>
        
        </div>
        
        <div className='topicsDiv'>
          <div>
            <ul>
              <Link className='topicLink' to={`/decibel-dialogue`}>Decibel Dialogue</Link>
              <Link className='topicLink' to={`/episodes`}>Episodes</Link>
              <Link className='topicLink'to={`/blog`}>Blog</Link>
             <li className='allTopicsDrop topicLink' onClick={this.handleDropdown}>All Topics + </li>
           </ul>
           </div>
           {this.state.open && (
               <div className='dropdownMenu'>
            {this.props.children}
            </div>
           )}
         
        </div>
        </div>
    </HeaderMainDiv>
    )
  }
  
}

export default Header