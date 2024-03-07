import { useWindowSize } from "@uidotdev/usehooks";
import styled from 'styled-components'
import Button from './Button'

export default function Navbar() {
  const { width, height } = useWindowSize();
  
  const Body = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: #FFF0DB;
    padding: 50px 0px 60px 0px;
    border-bottom: solid #30363d;
    width: 100vw;
  `
  
  return (
    <>
      <Body>
        <Button title="about" href="/"/>
        <Button title="projects" href="/projects"/>
        <Button title="resume" href="https://drive.google.com/file/d/1O-Y3JFY3qOQgkJKyvnJ190INVgNGs4pK/view?usp=sharing"/>
      </Body>
    </>
  )
}