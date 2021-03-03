import React from 'react';
//style
import { ContactDiv, ContactWrapper, Info } from './style';
//materila ui
import { Email, Language } from '@material-ui/icons';

const Contact = () => {
  return (
    <ContactDiv>
      <ContactWrapper>
        <span className="border"></span>
        <span className="border"></span>
        <span className="border"></span>
        <span className="border"></span>
        <Info>
          <span>
            <Email style={{ fontSize: '1.5rem' }} />
          </span>
          <span>minwork1016@outlook.com</span>
        </Info>
        <Info>
          <span>
            <Language style={{ fontSize: '1.5rem' }} />
          </span>
          <span>https://github.com/yiminprogram</span>
        </Info>
      </ContactWrapper>
    </ContactDiv>
  );
};

export default Contact;
