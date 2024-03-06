import styled from "styled-components"

interface Props {
  title: string
  description: string
  href: string
  popout: string
  color: string
  secondary: string
}

export default function Project({ title, description, href, popout, color, secondary } : Props) {
  const Wrapper = styled.div`
  `
  
  const Body = styled.div`
    background: ${color};
    height: 100px;
    width: 300px;
    padding: 20px 40px 20px 40px;
    border: solid #08040c 2px;
    box-shadow: 6px 6px;
    ${Wrapper}:hover & {
      margin-right: -20px;
    }
  `
  
  const Title = styled.h1`
    position: absolute;
    margin-top: -65px;
    font-size: 35px;
    font-family: "Permanent Marker", cursive;
  `
  
  const Desc = styled.p`
    color: ${secondary};
    font-size: 18px;
  `
  
  const Popout = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  color: transparent;
  
  ${Wrapper}:hover & {
    color: black;
  }
`
  
  return (
    <>
      <a href={href}>
        <Wrapper>
          <Body>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
          </Body>
          <Popout>{popout}</Popout>
        </Wrapper>
      </a>
    </>
  )
}