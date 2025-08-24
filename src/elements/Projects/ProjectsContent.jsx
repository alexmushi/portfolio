import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";
import theme from "@styles/theme";

// Import project icons
import notarias38y76Icon from "@static/notarias38y76.jpeg";
import sacaLaBiciIcon from "@static/SLB.png";
import viaPagoIcon from "@static/viapago.png";
import australiappIcon from "@static/australiapp.png";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  max-width: 100%;
  height: 100%;
  border-radius: 0 0 0.6rem 0.6rem;
  border: 1px solid ${theme.bodyBorder};
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  width: clamp(20rem, 30rem, 85vw);
`;

const MainSection = styled.ol`
  list-style: none;
  padding: 0.5rem;
  font-size: 1rem;

  background: rgba(32, 33, 39, 0.25);
  box-shadow: inset 0 0 0.1em rgb(255 255 255 / 50%);
  border: solid 1px rgba(40, 40, 40, 0.175);
  border-radius: 0.5rem;
  margin: 1.25rem 1rem;

  a {
    color: #c9cbdb;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 0.75rem;
  }

  li {
    padding: 0.25rem 0.75rem;
    cursor: pointer;
    display: flex;
    border-radius: 0.25rem;
  }

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  li:hover,
  li:active {
    background: #2a69c2;
    & a {
      color: #fff;
    }
  }

  span {
    vertical-align: baseline;
    font-weight: 600;
  }

  p {
    margin: 0.15rem 0 0;
    font-size: 0.85rem;
    color: #a7a7a7;
  }
`;

const ProjectIcon = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  background: #fff;
  padding: 0rem;
  box-sizing: border-box;
  flex-shrink: 0;
  object-fit: contain;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const text = "Hi! I’m Alejandro Muñoz Shimano from Querétaro, México. I’m studying Computer Technologies Engineering at ITESM and a Master’s in Information Technology in Cybersecurity at Macquarie Uni. I’m a creative and persistent person with strong leadership skills, able to build solid relationships and communicate effectively in multidisciplinary teams. I enjoy learning on my own initiative and constantly look for ways to grow and add value. Currently, I apply these skills in software development and technology projects, focusing on quality, efficiency, and delivering a great user experience.";

const projects = [
  { name: "Notarías 38 y 76", description: "An online portal for Notarías 38 y 76 in Querétaro that enables clients to start legal processes online and upload documents for lawyer review, reducing the need for in-person visits and saving 30,000 sheets of paper each month.", link: "https://www.notarias38y76.com/", icon: notarias38y76Icon },
  { name: "Saca la Bici", description: "Mobile app for Saca la Bici focused on promoting sustainable urban mobility through safe routes and cycling activities in Querétaro. Some of the main functionalities include a social media platform for announcements and events and a map to plan and see in real time the routes.", link: "https://play.google.com/store/apps/details?id=com.kotlin.sacalabici&pcampaignid=web_share", icon: sacaLaBiciIcon },
  { name: "ViaPago", description: "Viapago is a payment portal designed to be efficient, maintainable, and intuitive. Its main purpose is to consolidate the financial information management for the Via Diseño's (a university in Querétaro) administration, facilitate access to this information for students, and streamline related processes for both.", link: "https://www.youtube.com/watch?v=30KhGPoSm20&ab_channel=Aleyuki", icon: viaPagoIcon },
  { name: "Australiapp", description: "Full-stack React/Node.js application for managing personal budgets and expenses with automatic currency conversion and daily exchange-rate updates.", link: "https://github.com/alexmushi/Australiapp", icon: australiappIcon }
];

const ProjectsContent = () => {
  return (
    <BodyContent>
      <Wrapper>
        <Container>
          <MainSection>
            <p>{text}</p>
            {projects.map((p) => (
              <li key={p.name}>
                <a href={p.link} target="_blank" rel="noreferrer">
                  <ProjectIcon src={p.icon} alt={`${p.name} icon`} />
                  <ProjectContent>
                    <span>{p.name}</span>
                    <p>{p.description}</p>
                  </ProjectContent>
                </a>
              </li>
            ))}
          </MainSection>
        </Container>
      </Wrapper>
    </BodyContent>
  );
};

export default ProjectsContent;