import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../../images/Decibel-Logo-AustinPBS-Blue.png'
import MobileMenu from '../../images/MobileMenu.png'

const HeaderMainDiv = styled.div`
  display:grid;
  width:100%;
  //z-index: 100;
  border-bottom: 1px solid rgba(0, 57, 70, .25);
  grid-template-columns: minmax(min-content, 125px) 1fr;
  .logoImage{
    width: 100%;
    height:auto;
    padding-left:0px;
    @media screen and (max-width: 675px){
      width:100px;
    }
  }
  .topicsDiv{
    display:grid;
    text-align: end;
    align-content:end;
    position:relative;
    @media screen and (max-width: 750px){
      display:none;
      margin-top: 0px;
    }
    div{
      height:100%;
      display:grid;
    }
    ul{
      display:block;
      list-style-type: disc;
      padding:0;
      .topicLink{
        display:inline-block;
        padding: 20px 20px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
      }
      .topicLink:hover {
        background-color: #009AA6;
      }
      span{
        padding-left: 10px;
      }
    }
    .allTopicsDrop{
      text-align:center;
      //margin-right:25px;
      margin-left:0;
      //margin-top:30px;
      padding:0;
    }
    .dropdownMenu{
      margin-right:0;
      @media screen and (max-width: 675px){
        //margin-top: 300px;
      }
       a{
      width: 300px;
      max-width: 300px;
      color: #000
      text-decoration:none;
      display:block;
      padding: 10px;
      background-color: #fff;
      z-index: 100;
      text-align:center;
   }
   a:hover {
    background-color: #009AA6;
  }
    }
  }
  }
  
`

const MobileNavDiv = styled.div`
    display:none;
    @media screen and (max-width: 750px){
      display:grid;
      text-align: end;
      align-content:end;
      width:100%;
      background-color: #009AA6;
      z-index: 500;
      position:relative;
    h2{
       padding-right: 10px;
       color:#fff;
    }
    .dropdownNavigation{
      position:absolute;
      z-index: 1000;
      p{
          text-align:left;
          padding: 0 20px;
          z-index:2000;
        }
      ul{
        margin-bottom:0;
        padding-inline-start:0;
        box-shadow: 0px 1px 3px 2px rgba(0, 57, 70, .25);
          a{
            width: 300px;
            color: #000
            text-decoration:none;
            display:block;
            padding: 20px 20px;
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            background-color: #fff;
            z-index: 100;
            text-align:left;
            border-bottom:1px solid rgba(0, 57, 70, .25);
         }
         a:hover {
          background-color: #009AA6;
        }
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

  closeMenu = () =>{
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
        
        <div className='topicsDiv'>
         <div>
            <ul>
              <Link className='topicLink' to={'/episodes'}>Episodes</Link>  
              {/* <Link className='topicLink' to={`/decibel-dialogue`}>Decibel Dialogue</Link> */}
              <Link className='topicLink'to={`/blog`}>Judy's Blog</Link> 
              <li className='allTopicsDrop topicLink' onClick={this.handleDropdown}>Topics<span>+</span></li>
              <Link className='topicLink' to={'/about'}>About Us</Link> 
           </ul>
        
           {this.state.open && (
            <div className='dropdownMenu'>
            {this.props.children}
            </div>
           )}  
           </div>
        </div>

        <MobileNavDiv>
            <h2 onClick={this.handleDropdown}>Menu</h2>
            {this.state.open && (
            <div className='dropdownNavigation'>
              <p onClick={this.closeMenu}>X Close</p>
            <ul>
              <Link to={'/episodes'}>Episodes</Link>  
              <Link to={`/blog`}>Judy's Blog</Link> 
              <Link to={'/about'}>About Us</Link> 
              <Link >Topics<span>:</span></Link> 
              {this.props.children} 
              </ul>
              </div>
              )}
        </MobileNavDiv>
    </HeaderMainDiv>
    )
  }
  
}

export default Header