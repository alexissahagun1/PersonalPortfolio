import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { SocialIcons } from '../Header/HeaderStyles';



const Projects = () => (
  <Section no padding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit,})=> (
        <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>
                {title}
              </HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>
                {description}
              </CardInfo>
              <br/>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              <UtilityList>
                <SocialIcons href={visit}>
                <AiFillGithub size="3rem"/>
                </SocialIcons>
              </UtilityList>
        </BlogCard>
      


      ))}
    </GridContainer>
  </Section>
);

export default Projects;