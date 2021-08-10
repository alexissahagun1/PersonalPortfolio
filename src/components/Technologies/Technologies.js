import React from 'react';
import { DiFirebase, DiReact, DiZend, DiNodejsSmall, DiPython, DiSass, DiMysql, DiJsBadge} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FaVuejs } from "react-icons/fa";
import {SiCplusplus } from "react-icons/si";



const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've used various technologies in my projects, mainly Front-End focused.
    </SectionText>
    <List>
      <ListItem>
        <div style={{display: 'inline-block'}}>
        <DiReact size="3rem" style={{marginRight: '1rem'}}/>
        <FaVuejs size="3rem" style={{marginRight: '1rem'}}/>
        <DiSass size="3rem" style={{marginRight: '1rem'}}/>
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js, Vue, Quasar, Sass
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{display: 'inline-block'}}>
        <DiNodejsSmall size="3rem" style={{marginRight: '1rem'}}/>
        <DiMysql size="3rem" style={{marginRight: '1rem'}}/>
        </div>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Currently learning <br/>
            Node.js and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{display: 'inline-block', }}>
        <DiPython size="3rem" style={{marginRight: '1rem'}}/>
        <SiCplusplus size="3rem" style={{marginRight: '1rem'}}/>
        <DiJsBadge size="3rem" style={{marginRight: '1rem'}}/>
        </div>
        <ListContainer>
          <ListTitle>Software Dev</ListTitle>
          <ListParagraph>
            Experience with <br/>
            C++, Python and Javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
