import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const HeaderWrapper = styled.header`
    background-color: ${isScrolled ? '#ffffff' : 'transparent'};
    box-shadow: ${isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
    padding: 20px 0;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  `;

  const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  `;

  const Title = styled.h1`
    margin: 0;
    font-size: 24px;
    color: '#333333';
    font-family: 'Tajawal', sans-serif;
  `;

  const NavLink = styled.a`
    text-decoration: none;
    color: ${'#333333'};
    font-size: 16px;
    margin-left: 20px;
    transition: color 0.3s ease;
    font-family: 'Tajawal', sans-serif;

    &:hover {
      color: ${'#007bff'};
    }
  `;

  const Nav = styled.nav`
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
  `;
  
  return (
    <HeaderWrapper>
      <ContentWrapper>
        <Title>Medico</Title>
        <Nav>
          <ul>
            <li><NavLink href="./pages/about.jsx">المزيد من المعلومات</NavLink></li>
            <li><NavLink href="Footer">اتصل بنا</NavLink></li>
          </ul>
        </Nav>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
