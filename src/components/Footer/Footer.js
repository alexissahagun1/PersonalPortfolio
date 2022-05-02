import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Button from '../../styles/GlobalComponents/Button';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import GoogleMapReact from 'google-map-react';
import { ImLocation2 } from "react-icons/im";


const defaultProps = {
  center: {
    lat: 20.68761,
    lng: -103.4158081
  },
  zoom: 10
};




const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle></LinkTitle>
          <a href="ResumeAlexis.pdf" download>
            <Button>Download my CV</Button>
            </a>
        </LinkColumn>
        <LinkColumn style={{marginLeft: '10rem'}}>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="https://www.google.com/maps/@20.6662162,-103.4184034,12z">
            Guadalajara, Jalisco, Mexico
          </LinkItem>
        </LinkColumn>
        {/* <LinkColumn style={{marginLeft: '10rem'}}>
        <div style={{height: '40vh', width: '40vh'}}>
            <GoogleMapReact
              bootstrapURLKeys={{key: "AIzaSyBLNpXSgAaKaMpGLxl7DrWaYkj3Qc2-McE"}}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              >
              </GoogleMapReact>
          </div>
        </LinkColumn> */}
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>creating solutions for your ideas</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/alexissahagun1">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/alexissahagun1/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};



export default Footer;