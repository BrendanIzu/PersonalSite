import Navbar from "../components/Navbar";
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  width: auto;
  gap: 100px;
  padding: 80px 40px 120px 40px;
  background-size: 15px 15px;
  background-image: linear-gradient(to right, lightgrey 0.5px, transparent 0.5px), linear-gradient(to bottom, lightgrey 0.5px, transparent 0.5px);
`

const Note = styled.div`
  width: auto;
  max-width: 400px
  height: auto;
  max-width: 410px;
  box-sizing: border-box;
  padding: 50px 60px 130px 60px;
  font-family: "Permanent Marker", cursive;
  background: #feea79;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

const Links = styled.div`
  display: flex;
  padding: 20px;
  gap: 30px;
`

const Image = styled.img`
  box-shadow: 6px 6px;
  max-width: 300
`

const Link = styled.h1`
  &:hover {
    color: lightgrey;
  }
`

export default function Home() {
  return (
    <>
      <Navbar/>
      <Body>
        <Image src={process.env.PUBLIC_URL +"/me.jpeg"} width="400" height="300"></Image>
        <div>
          <Note>
            <p>
              Hey, I'm Brendan, I'm a Filipino American, software engineer, and aspring TFT player.
              <br/><br/>
              I enjoy skiing, watching movies, legos, hanging out with friends, and building cool stuff. 
            </p>
          </Note>
          <Links>
            <a href="https://www.linkedin.com/in/BrendanIzu/"><Link>linkedin</Link></a>
            <a href="https://github.com/BrendanIzu"><Link>github</Link></a>
            <a href="https://letterboxd.com/brendan_izu/"><Link>letterboxd</Link></a>
            <a href="https://lolchess.gg/profile/na/Bubs-4444/set10"><Link>lolchess</Link></a>
          </Links>
        </div>
      </Body>
    </>
  );
}