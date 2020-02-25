import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./MainNav.css"

const MainNavWrapper = styled.div`
    width: 100%;
    background-color: rgba(0,0,0,0.8);
`;

const StyledNav = styled.nav`
    margin: 0 auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 1.5% 0;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #f5f5f7
`;

const MainNav = () => {
    return (
        <MainNavWrapper>
            <StyledNav className="main-nav">
                <StyledNavLink to="/"><img src="https://www.apple.com/ac/globalnav/5/en_US/images/globalnav/apple/image_large.svg" alt="Apple Logo" /></StyledNavLink>
                <StyledNavLink to="/mac">Mac</StyledNavLink>
                <StyledNavLink to="/ipad">iPad</StyledNavLink>
                <StyledNavLink to="/iphone">iPhone</StyledNavLink>
                <StyledNavLink to="/watch">Watch</StyledNavLink>
                <StyledNavLink to="/tv">TV</StyledNavLink>
                <StyledNavLink to="/music">Music</StyledNavLink>
                <StyledNavLink to="/support">Support</StyledNavLink>
            </StyledNav>
        </MainNavWrapper>
    );
}

export default MainNav;