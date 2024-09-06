import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../../images/DecibelLogo200X100.png'
import SmallLogo from '../../images/DecibelLogo150x75.png'
//import MobileMenu from '../../images/MobileMenu.png'

const HeaderMainDiv = styled.nav`
  display:grid;
  width:100%;
  //z-index: 100;
  border-bottom: 1px solid rgba(0, 57, 70, .25);
  grid-template-columns: minmax(min-content, 200px) 1fr;
  //grid-template-rows: 115px;
  @media screen and (max-width: 675px){
    grid-template-columns: minmax(min-content, 150px) 1fr;
    grid-template-rows: 70px;
  }
  .logoDiv{
    background-color: #003946;
    @media screen and (max-width: 850px){
      display:none;
    }
  }
  .logoDiv:hover{
    background-color: #009AA6;
  }
  .logoImage{
    width: 100%;
    height:auto;
    padding-left:0px;
    @media screen and (max-width: 675px){
       width:150px;
      height: 100px;
    }
  }
  .smallLogoDiv{
    display: none;
    @media screen and (max-width: 850px){
      display:block;
      background-color: #003946;
      .smallLogoImage{
        width: 100%;
        height:70px;
        padding-left:0px;
        // @media screen and (max-width: 675px){
        //   width:150px;
        //   height: 100px;
        // }
      }
    }

  }
  .topicsDiv{
    display:grid;
    background-color: #003946;
    text-align: end;
    align-content:end;
    position:relative;
    @media screen and (max-width: 950px){
      display:none;
      margin-top: 0px;
    }
    div{
      height:100%;
      display:grid;
    }
    ul{
      display:block;
      box-shadow: 0px 1px 3px 2px rgba(0, 57, 70, .25);
      list-style-type: disc;
      //margin: 0;
      padding:0;
      padding-inline-start: 0;
      .topicLink {
        display:inline-block;
        padding: 10px 20px;
        font-family: 'PT Sans' sans-serif;
        font-weight: 400;
        color:#fff;
        a{
          color:#fff;
          font-weight: 400;
        }
      }
      .topicLink:hover {
        background-color: #009AA6;
      }
      span{
        padding-left: 10px;
      }
    }
    .allTopicsDrop{
      posiiton: relative;
      text-align:center;
      //margin-right:25px;
      margin-left:0;
      //margin-top:30px;
      padding:0;
    }

    .topicsDiv:focus{
      outline:3px solid #000;
    }


    .dropdownMenu{
      position:absolute;
      margin-right:30px;
      @media screen and (max-width: 750px){
        margin-top: 300px;
      }
      .topicTag a{
      width: 100%;
      //max-width: 300px;
      margin-top:0;
      color: #000
      text-decoration:none;
      display:block;
      padding: 10px 30px;
      background-color: #fff;
      z-index: 100;
      text-align:left;
   }

   .topicTagLink{
    color: #000;
   }
   a:hover {
    background-color: #009AA6;
  }
    }
  }
  }
  
`

const MobileNavDiv = styled.nav`
    display:none;
    @media screen and (max-width: 950px){
      display:grid;
      text-align: end;
      align-content:end;
      width:100%;
      background-color: #003946;
      z-index: 500;
      position:relative;
   
    h2{
       padding-right: 10px;
       color:#FFF;
        transition-duration: 5000ms;
    }
    .dropdownNavigation{
      position:absolute;
      z-index: 1000;
      width:100%;
      max-width:400px;
      right:0%;
      p{
          text-align:left;
          padding: 0 20px;
          z-index:2000;
          //color: #FFF;
        }
      .closeMenu{
        color: #fff;
        font-size: 18px;
      }
      ul{
        margin-bottom:0;
        width:100%;
        padding-inline-start:0;
          .mobileNavLink{
            width:100%;
            max-width:400px;
            color: #000;
            margin-top:0px;
            text-decoration:none;
            display:block;
            padding: 5px 20px;
            font-family: 'PT Sans', sans-serif;
            font-weight: 400;
            background-color: #fff;
            z-index: 100;
            text-align:left;
            //border-bottom:1px solid rgba(0, 57, 70, .25);
            border-left:1px solid rgba(0, 57, 70, .25)
         }
         a:hover {
          background-color: #009AA6;
        }
        .dropdownNavMobile{
          a{
            width: 100%;
            //max-width: 300px;
            margin-top:0;
            color: #000
            text-decoration:none;
            display:block;
            padding: 2px 5px;
            background-color: #fff;
            z-index: 100;
            text-align:left;
            p{
              margin:10px;
            }
         }
         a:hover {
          background-color: #009AA6;
        }
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

  handleDropdownMobile = () =>{
    this.setState(state =>{
      return{
        open: state.open,
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
        <div className="logoDiv" aria-label="Decibel Logo">
        <Link to={'/'} aria-label="Decibel Homepage Link"><img src={Logo} alt='Logo' className='logoImage' /></Link>
        </div>

        <div className="smallLogoDiv" aria-label="Decibel Logo">
        <Link to={'/'} aria-label="Decibel Homepage Link" ><img src={SmallLogo} alt='Logo' className='smallLogoImage' /></Link>
        </div> 
        
        <div className='topicsDiv' aria-label='Navigation Menu'>
         <div>
            <ul>
              <li className='allTopicsDrop topicLink' onClick={this.handleDropdown} onKeyDown={this.handleClick} >Topics<span>+</span>
              {this.state.open && (
              <div className='dropdownMenu'>
              {this.props.children}
              </div>
            )} 
              </li>
              <li className='topicLink'><a  href={'https://decibelatx.org/culture/our-mission/'} >Our Mission</a></li>
              <li className='topicLink'><Link  to={'/resources'} >Resources</Link></li>
              <li className='topicLink'><Link  to={'/contenido-en-espanol'} >Contenido en Español</Link></li>
              <li className='topicLink'><Link  to={'/about'}>Staff</Link></li> 
              <li className='topicLink'><Link  to={'/search'}>Search</Link></li>
           </ul>
        
           {/* {this.state.open && (
            <div className='dropdownMenu'>
            {this.props.children}
            </div>
           )}   */}
           </div>
        </div>

        <MobileNavDiv>
            <h2 onClick={this.handleDropdown} aria-label='Navigation Menu'>Menu</h2>
            {this.state.open && (
            <div className='dropdownNavigation'>
              <p className='closeMenu' onClick={this.closeMenu} >X Close</p>
            <ul> 
              <li><a className='mobileNavLink' href={'https://decibelatx.org/culture/our-mission/'} role="menuitem">Our Mission</a></li>
              <li><Link className='mobileNavLink' to={'/resources'} role="menuitem">Resources</Link></li>
              <li><Link className='mobileNavLink' to={'/contenido-en-espanol'} role="menuitem">Contenido en Español</Link></li>
              <li><Link className='mobileNavLink' to={'/about'} role="menuitem">Staff</Link></li> 
              <li><Link className='mobileNavLink' to={'/search'} role="menuitem">Search</Link></li>
              <li className='mobileNavLink topicsDropMobile' onClick={this.handleDropdownMobile}>Topics<span>:</span>
              {this.state.open && (
                <div className='dropdownNavMobile' role="menuitem">{this.props.children}</div>
              )}
              </li> 
              {/* {this.state.open && (
                <div>{this.props.children}</div>
              )} */}
              </ul>
              </div>
              )}
        </MobileNavDiv>
    </HeaderMainDiv>
    )
  }
  
}

export default Header