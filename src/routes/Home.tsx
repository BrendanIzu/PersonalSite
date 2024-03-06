import Navbar from "../components/Navbar";
import styled from 'styled-components'
import me from "../assets/images/me.jpeg";

const Body = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  gap: 100px;
  padding: 80px 40px 20px 40px;
  background-size: 15px 15px;
  background-image: linear-gradient(to right, lightgrey 0.5px, transparent 0.5px), linear-gradient(to bottom, lightgrey 0.5px, transparent 0.5px);
`

const Note = styled.div`
  width: 400px;
  height: 410px;
  box-sizing: border-box;
  padding: 60px;
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
        <Image src={me} width="600px" height="450px"></Image>
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