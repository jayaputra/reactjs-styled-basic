import { useState } from "react";
import styled from "styled-components";
import {Link as ReactRouterDomLink, useLocation} from 'react-router-dom';

const HeaderWrapper = styled.header `
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background-color: #eee;
    border-bottom: 3px solid red;
`;

const Mobilemenu = styled.div`
margin: auto 0 auto auto;
width: 25px;
min-width: 25px;
padding: 5px;

>div {
    width: 100%;
    height: 3px;
    background-color: black;
    margin: 5px 0;
}

@media (min-width: 768px){
    display: none;
}
`;

const Menu = styled.menu `
    display: ${p => p.buka ? 'block' : 'none'};
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 3px solid red;
    background-color: white;
    
    @media (min-width: 768px) {
        display: flex;
        background: none;
        left: initial;
        top: initial;
        position: relative;
        width: initial;
        border-bottom: none;
        margin: auto 0 auto auto;
    }
`;

// const MenuAlt = styled(Menu) `
//     border-top: 3px solid red;
// `;

const Link = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    );
};

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'};
    color: #000;
`;

export function Header(){
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderWrapper>
            <Mobilemenu onClick={() => setMenuOpen(s => !s)}>
                <div />
                <div />
                <div />
            </Mobilemenu>
            <Menu buka={menuOpen}>
            <StyledLink to="/" isActive={pathname === '/'}>
                Home
            </StyledLink>
            <StyledLink to="/login" isActive={pathname === '/login'}>
                Login
            </StyledLink>
            </Menu>
            
        </HeaderWrapper>
    )
}