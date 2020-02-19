import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components'

const ContactFormDiv = styled.div`
width:100%;
margin-top: 40px;
box-sizing:border-box;
h1{
  text-align:center;
}
form{
  display:block;
  width:100%;
  box-sizing:border-box;
  input{
    width: 100%;
    padding: 10px 5px;
    margin: 20px 0;
    border-radius: 3px;
    box-shadow: none;
    border: 1px solid rgba(0, 57, 70, .25);
    //border-width:1px;
    box-sizing:border-box;
  }
  textarea{
    width: 100%;
    height: 200px;
    padding: 10px 5px;
    margin: 20px 0;
    border: 1px solid rgba(0, 57, 70, .25);
    border-radius: 5px;
    border-width:1px;
    box-sizing:border-box;
  }
  button{
    width: 100%;
    padding: 10px 5px;
    margin: 20px 0;
    background-color: #009AA6;
    border-radius: 3px;
    border: 1px solid rgba(0, 57, 70, .25);
    a{
      color:#fff;
      font-size: 18px;
    }
  }
}

`

const ContactForm = props =>{
  return(
    <ContactFormDiv>
      <h1>Contact The Decibel Team</h1>
      <form>
      <input type='text' name='fullname' placeholder='Full Name'></input>
      <br/>
      <input type='email' name='email' placeholder='Email'></input>
      <br/>
      <textarea type='text' name='message' placeholder="Your message for Decibel"></textarea>
      <br/>
      <button><a>Submit</a></button>
      </form>
    </ContactFormDiv>
  )
}

//export default ContactForm;