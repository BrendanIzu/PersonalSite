import styled from 'styled-components'
import Button from './Button'

const Body = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  background: white;
  padding: 50px 40px 60px 40px;
  border-bottom: solid #30363d;
`

export default function Navbar() {
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