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
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem 0 6rem 0; /* Add bottom padding for dock space */
  overflow-y: auto;
  
  @media (min-width: 768px) {
    padding: 1rem 0 6rem 0;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 60rem;
  padding: 0 0.5rem;
  
  @media (min-width: 768px) {
    width: clamp(30rem, 80vw, 60rem);
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.h2`
  color: #c9cbdb;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  padding: 0;
  border-left: 4px solid #2a69c2;
  padding-left: 1rem;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AboutSection = styled.div`
  background: rgba(32, 33, 39, 0.25);
  box-shadow: inset 0 0 0.1em rgb(255 255 255 / 50%);
  border: solid 1px rgba(40, 40, 40, 0.175);
  border-radius: 0.5rem;
  margin: 0.75rem 0;
  padding: 1rem;

  @media (min-width: 768px) {
    margin: 1.25rem 0;
    padding: 1.5rem;
  }

  p {
    color: #c9cbdb;
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin: 0.75rem 0;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    gap: 1.5rem;
    margin: 1.25rem 0;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 1000px;
    margin: 1.25rem auto;
  }
`;

const ProjectCard = styled.div`
  background: rgba(32, 33, 39, 0.25);
  box-shadow: inset 0 0 0.1em rgb(255 255 255 / 50%);
  border: solid 1px rgba(40, 40, 40, 0.175);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: fadeInUp 0.6s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    background: rgba(42, 105, 194, 0.1);
    border-color: #2a69c2;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(42, 105, 194, 0.2);
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    height: 100%;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ProjectIcon = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.5rem;
  background: #fff;
  padding: 0rem;
  box-sizing: border-box;
  flex-shrink: 0;
  object-fit: contain;
`;

const ProjectTitleSection = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  color: #c9cbdb;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
`;

const ProjectStatus = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const StatusBadge = styled.span`
  background: ${props => props.variant === 'live' ? '#28a745' : props.variant === 'demo' ? '#17a2b8' : '#6c757d'};
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const ProjectDescription = styled.p`
  color: #a7a7a7;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechBadge = styled.span`
  background: rgba(42, 105, 194, 0.2);
  color: #5ba7f7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(42, 105, 194, 0.3);
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
`;

const ActionButton = styled.a`
  background: ${props => props.primary ? '#2a69c2' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#c9cbdb'};
  border: 1px solid ${props => props.primary ? '#2a69c2' : '#555'};
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.primary ? '#1e5bb8' : 'rgba(42, 105, 194, 0.1)'};
    border-color: #2a69c2;
    color: #fff;
  }
`;

const text = "Hi! I’m Alejandro Muñoz Shimano from Querétaro, México. I’m studying Computer Technologies Engineering at ITESM and a Master’s in Information Technology in Cybersecurity at Macquarie Uni. I’m a creative and persistent person with strong leadership skills, able to build solid relationships and communicate effectively in multidisciplinary teams. I enjoy learning on my own initiative and constantly look for ways to grow and add value. Currently, I apply these skills in software development and technology projects, focusing on quality, efficiency, and delivering a great user experience.";

const projects = [
  { 
    name: "Notarías 38 y 76", 
    description: "Digital transformation platform for legal services that reduced paper usage by 30,000 sheets monthly and streamlined client-lawyer interactions.", 
    link: "https://www.notarias38y76.com/", 
    icon: notarias38y76Icon,
    status: "live",
    tech: ["React", "Node.js", "MySQL", "Express"],
    type: "Live Site"
  },
  { 
    name: "Saca la Bici", 
    description: "Mobile app promoting sustainable urban mobility with real-time route planning, social features, and cycling activity tracking in Querétaro.", 
    link: "https://play.google.com/store/apps/details?id=com.kotlin.sacalabici&pcampaignid=web_share", 
    icon: sacaLaBiciIcon,
    status: "live",
    tech: ["Kotlin", "Android", "Mapbox API", "Firebase"],
    type: "Mobile App"
  },
  { 
    name: "ViaPago", 
    description: "University payment portal that consolidated financial information management and streamlined administrative processes for students and staff.", 
    link: "https://www.youtube.com/watch?v=30KhGPoSm20&ab_channel=Aleyuki", 
    icon: viaPagoIcon,
    status: "live", 
    tech: ["Node.js", "MySQL", "Express"],
    type: "Demo Video",
    actionText: "🎥 Watch Demo" 
  },
  { 
    name: "Australiapp", 
    description: "Full-stack budget management application with automatic currency conversion and real-time exchange rate updates for international users.", 
    link: "https://github.com/alexmushi/Australiapp", 
    icon: australiappIcon,
    status: "code",
    tech: ["React", "MySQL", "Sequelize", "ExchangeRate API"],
    type: "Source Code"
  }
];

const ProjectsContent = () => {
  return (
    <BodyContent>
      <Wrapper>
        <Container>
          <SectionHeader>About</SectionHeader>
          <AboutSection>
            <p>{text}</p>
          </AboutSection>
          
          <SectionHeader>Featured Projects</SectionHeader>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={project.name} index={index}>
                <ProjectHeader>
                  <ProjectIcon src={project.icon} alt={`${project.name} icon`} />
                  <ProjectTitleSection>
                    <ProjectTitle>{project.name}</ProjectTitle>
                    <ProjectStatus>
                      <StatusBadge variant={project.status}>
                        {project.status === 'live' ? 'Live' : project.status === 'demo' ? 'Demo' : 'Open Source'}
                      </StatusBadge>
                    </ProjectStatus>
                  </ProjectTitleSection>
                </ProjectHeader>
                
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechBadge key={techIndex}>{tech}</TechBadge>
                  ))}
                </TechStack>
                
                <ProjectActions>
                  <ActionButton 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    primary
                  >
                    {/* --- ✅ MODIFIED: Use custom actionText if it exists, otherwise use default logic --- */}
                    {project.actionText || 
                     (project.status === 'live' ? '🚀 Visit Site' : 
                      project.status === 'demo' ? '🎥 Watch Demo' : 
                      '💻 View Code')}
                  </ActionButton>
                </ProjectActions>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Container>
      </Wrapper>
    </BodyContent>
  );
};

export default ProjectsContent;