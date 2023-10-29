import styled from "styled-components"

export default function Button({content}) {
  return <ButtonStyled>{content}</ButtonStyled>
}


const ButtonStyled = styled.button`
background: linear-gradient(to right, #14163c, #03217b 79%);
text-transform: uppercase;
letter-spacing: 0.2rem;
width: 65%;
height: 3rem;
border: none;
color: white;
border-radius: 2rem;
cursor: pointer;

`;