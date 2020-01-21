import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Logo from '../../images/Decibel-Logo-AustinPBS-Blue.png'
import MobileNav from './MobileNav';

const HeaderMainDiv = styled.div`
  display:grid;
  width:100%;
  z-index: 100;
  border-bottom: 1px solid #ccc;
  grid-template-columns: minmax(min-content, 125px) 1fr;
  .logoImage{
    width: 100%;
    height:auto;
    padding-left:0px;
  }
  .topicsDiv{
    display:grid;
    text-align: end;
    align-content:end;
    position:relative;
    @media screen and (max-width: 675px){
      margin-bottom: 50px;
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
        margin-top: 300px;
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
        {/* <div className='linksDiv'> */}
        {/* <div className="navDiv">
       
        
        </div> */}
        
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
    </HeaderMainDiv>
    )
  }
  
}

export default Header