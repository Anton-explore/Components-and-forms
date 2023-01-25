import { StyledHeader } from './Header.styles'
import React from 'react';
import { Props } from '../Main/Main';

const Header = ({ title = 'Header title' }: Props) => {

    return (
        <StyledHeader>
            <h2>{ title }</h2>
        </StyledHeader>
    );
}


export default Header;