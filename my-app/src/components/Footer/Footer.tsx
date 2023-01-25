import { StyledFooter } from './Footer.styles'
import React from 'react';
import { Props } from '../Main/Main';

const Footer = ({ title = 'Footer title' }: Props) => {

    return (
        <StyledFooter>
            <h2>{ title }</h2>
        </StyledFooter>
    );
}


export default Footer;