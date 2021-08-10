import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (

  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      Hello there! <br/>
      I'm Alexis
      </SectionTitle>
      <SectionText>
         a web developer enthusiast that creates solutions for your ideas
      </SectionText>
      <Button onClick={() => window.location = 'https://mail.google.com/mail/?view=cm&fs=1&to=alexissahagunitj7a@gmail.com'}>Let's do something</Button>
    </LeftSection>
  </Section>

);

export default Hero;