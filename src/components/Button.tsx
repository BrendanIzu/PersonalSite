import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// #FFC700


const Body = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 40px 20px 40px;
  background: #20a4fc;
  border: solid #08040c 2px;
  box-shadow: 6px 6px;
  top: 0;
  &:hover {
    margin-top: -10px;
  }
`

interface Props {
  title: string
  href: string
}

export default function Button({ title, href } : Props) {
  return (
    <>
      <a href={href}>
        <Body>
          <h1>{title}</h1>
        </Body>
      </a>
    </>
  )
}