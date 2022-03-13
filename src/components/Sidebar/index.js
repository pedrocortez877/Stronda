import {
  SideBar,
  LogoContent,
  Logo,
  NavList,
  ItemList,
  LinkToPage,
  LinksName,
  Icons,
} from "./styles";

import LogoImage from "../../assets/logo.png";

export function Sidebar() {
  return (
    <SideBar>
      <LogoContent>
        <Logo src={LogoImage} width="250" height="100" />
      </LogoContent>
      <NavList>
        <ItemList>
          <LinkToPage>
            <Icons className="bx bx-cart" />
            <LinksName>Operações</LinksName>
          </LinkToPage>
        </ItemList>
        <ItemList>
          <LinkToPage>
            <Icons className="bx bx-line-chart" />
            <LinksName>Relatórios</LinksName>
          </LinkToPage>
        </ItemList>
        <ItemList>
          <LinkToPage>
            <Icons className="bx bx-box" />
            <LinksName>Produtos</LinksName>
          </LinkToPage>
        </ItemList>
        <ItemList>
          <LinkToPage>
            <Icons className="bx bxs-truck" />
            <LinksName>Fornecedores</LinksName>
          </LinkToPage>
        </ItemList>
        <ItemList>
          <LinkToPage>
            <Icons className="bx bx-user" />
            <LinksName>Clientes</LinksName>
          </LinkToPage>
        </ItemList>
      </NavList>
    </SideBar>
  );
}
