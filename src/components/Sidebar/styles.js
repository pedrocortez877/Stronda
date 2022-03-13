import styled from "styled-components";

export const SideBar = styled.div`
  height: 100%;
  width: 300px;
  background: var(--background_dark);
  padding: 30px 50px;
  z-index: 99;
`;

export const LogoContent = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20px;
`;

export const Logo = styled.img`
  opacity: 1;
  transition: all 0.5s ease;
`;

export const NavList = styled.ul`
  margin-top: 55px;
`;

export const ItemList = styled.li`
  position: relative;
  margin: 8px 0;
  list-style: none;
`;

export const Icons = styled.i`
  height: 50px;
  line-height: 50px;
  font-size: 36px;
  border-radius: 12px;
`;

export const LinkToPage = styled.a`
  font-family: Roboto, sans-serif;
  font-size: 32px;
  color: var(--primary);
  cursor: pointer;

  &:hover {
    color: var(--primary);
  }
`;

export const LinksName = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  color: var(--gray);
  transition: 0.2s;
  padding-left: 8px;
  &:hover {
    color: var(--gray-light);
  }
`;
