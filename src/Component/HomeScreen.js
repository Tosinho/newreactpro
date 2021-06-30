import React, {useState,useEffect, useRef}from 'react'
import styled from "styled-components"

const HomeScreen =()=>{
  const textColor1=useRef();
  const textColor2=useRef();
  const textColor3=useRef();
  const [counter,setCounter]=useState(0);

const mycolor1=["blue","black","black"]
const mycolor2=["black","orange","black"]
const mycolor3=["black","black","purple"]

useEffect(()=>{
  textColor1.current.style.color= mycolor1[counter % mycolor1.length];
  textColor1.current.style.transition = 'all 350ms'
  textColor2.current.style.color= mycolor2[counter % mycolor2.length];
  textColor2.current.style.transition = 'all 350ms'

  textColor3.current.style.color= mycolor3[counter % mycolor3.length];
  textColor3.current.style.transition = 'all 350ms'
},[counter]);


  useEffect(()=>{
    setInterval(()=>{
      setCounter((el)=> el + 1);
    }, 3000)
  },[]);

  return(
    <Container>
      <Wrapper>
        <div> {counter}</div>
        <Text1 ref={textColor1}>Home Screen</Text1>
        <Text2 ref={textColor2}>Develop</Text2>
        <Text3 ref={textColor3}>ship</Text3>
<Block>Peter</Block>
      </Wrapper> 
    </Container>
  );
  };

  

export default HomeScreen


const Text1= styled.div`
font-size:150px;
font-weight:bold;
font-family:poppins
letter-spacing:8px

`;
const Text2= styled.div`
font-size:150px;
font-weight:bold;
font-family:poppins
letter-spacing:8px
background
`;
const Text3= styled.div`
font-size:150px;
font-weight:bold;
font-family:poppins
letter-spacing:8px
`;

const Block= styled.div`
height70%:;
width:60%;
// background: linear-CanvasGradient(90deg,red,blue);
`;
const Container= styled.div`
display:flex;
width:100%;
height:50rem;
justify-content:center;
align-items:center;
`;
const Wrapper= styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100%;
align-items:center;
justify-content:canter;
`;

const Text= styled.div`
font-size:100px;
font-weight:bold;
background:bold
color:linear-gradient;
color:black;

`;
