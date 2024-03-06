import Navbar from "../components/Navbar";
import styled from 'styled-components'
import Project from "../components/Project";

import resume from "../assets/resume.jpg";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  height: 1500px;
  padding: 20px 40px 20px 40px;
  background-size: 15px 15px;
  background-image: linear-gradient(to right, lightgrey 0.5px, transparent 0.5px), linear-gradient(to bottom, lightgrey 0.5px, transparent 0.5px);
`

export default function Projects() {
  return (
    <>
      <Navbar/>
      <Body>
        
      </Body>
    </>
  )
}