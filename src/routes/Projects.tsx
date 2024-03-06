import Navbar from "../components/Navbar";
import styled from 'styled-components'
import Project from "../components/Project";

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
        <Project 
          title="EasySpeak"
          description="A modern AAC that utilizes AI to speed up communication for people with speach related disabilities."
          href="https://easyspeak-aac.com/"
          popout="Try out Demo"
          color="#7323f5"
          secondary="black"/>
        <Project 
          title="HomeCooked"
          description="Social media platform for celebrating cooking at home and teaching individuals the basics of food science."
          href="https://github.com/BrendanIzu/homecooked"
          popout="View on Github"
          color="#33B42C"
          secondary="black"/>
        <Project 
          title="JerryIzuMPC"
          description="Active website for a physicians office in Southern California."
          href="https://jerry-izu-medical-pc.vercel.app/"
          popout="Visit Site"
          color="#e07cd4"
          secondary="black"/>
        <Project 
          title="Plannr"
          description="Full-stack mobile application for planning and rsvping for user-generated events."
          href="https://github.com/BrendanIzu/Plannr"
          popout="View on Github"
          color="#FB2808"
          secondary="black"/>
        <Project 
          title="Tweeter"
          description="Complete Twitter clone, which includes all basic functionalities of Twitter (X) app."
          href="https://github.com/BrendanIzu/Tweeter"
          popout="View on Github"
          color="#0883FB"
          secondary="black"/>
      </Body>
    </>
  )
}