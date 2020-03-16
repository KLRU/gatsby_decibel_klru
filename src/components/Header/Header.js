import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../../images/DecibelLogo200X100.png'
//import MobileMenu from '../../images/MobileMenu.png'

const HeaderMainDiv = styled.div`
  display:grid;
  width:100%;
  //z-index: 100;
  border-bottom: 1px solid rgba(0, 57, 70, .25);
  grid-template-columns: minmax(min-content, 200px) 1fr;
  grid-template-rows: 115px;
  @media screen and (max-width: 675px){
    grid-template-columns: minmax(min-content, 150px) 1fr;
    grid-template-rows: 115px;
  }
  .logoDiv{
    background-color: #003946;
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
  .topicsDiv{
    display:grid;
    background-color: #003946;
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
      box-shadow: 0px 1px 3px 2px rgba(0, 57, 70, .25);
      list-style-type: disc;
      //margin: 0;
      padding:0;
      .topicLink{
        display:inline-block;
        padding: 10px 20px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        color:#fff;
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
      margin-right:30px;
      @media screen and (max-width: 675px){
        //margin-top: 300px;
      }
       a{
      width: 100%;
      //max-width: 300px;
      margin-top:0;
      color: #000
      text-decoration:none;
      display:block;
      padding: 2px 30px;
      background-color: #fff;
      z-index: 100;
      text-align:left;
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
        //box-shadow: 0px 1px 3px 2px rgba(0, 57, 70, .25);
          a{
            width:100%;
            color: #000;
            margin-top:0;
            text-decoration:none;
            display:block;
            padding: 5px 20px;
            font-family: 'Lato', sans-serif;
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
        <div className="logoDiv">
        <Link to={'/'}><img src={Logo} alt='Logo' className='logoImage' /></Link>
        </div>
        
        <div className='topicsDiv'>
         <div>
            <ul>
              <Link className='topicLink' to={'/episodes'}>Episodes</Link>
              <Link className='topicLink' to={`/decibel-dialogue`}>Live</Link>
              <li className='allTopicsDrop topicLink' onClick={this.handleDropdown}>Topics<span>+</span></li>
              <Link className='topicLink'to={`/blog`}>Judy's Journal</Link> 
              <Link className='topicLink' to={'/about'}>About Us</Link> 
              <Link className='topicLink' to={'/search'}>Search</Link>
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
              <p className='closeMenu' onClick={this.closeMenu} >X Close</p>
            <ul> 
              <Link to={`/episodes`}>Episodes</Link>
              <Link to={`/decibel-dialogue`}>Live</Link>
              <Link to={`/blog`}>Judy's Journal</Link> 
              <Link to={'/about'}>About Us</Link> 
              <Link to={'/search'}>Search</Link>
              <Link onClick={this.handleDropdownMobile}>Topics<span>:</span></Link> 
              {this.state.open && (
                <div>{this.props.children}</div>
              )}
              </ul>
              </div>
              )}

             
        </MobileNavDiv>
    </HeaderMainDiv>
    )
  }
  
}

export default Header