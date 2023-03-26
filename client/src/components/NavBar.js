import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Navbar, Nav, Container} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>МойМагазин</NavLink>
        {user.isAuth ?
          <Nav style={{color: 'white'}}>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ-панель
            </Button>
            <Button
              variant={"outline-light"}
              className={"ml-2"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Выйти
            </Button>
          </Nav>
          :
          <Nav style={{color: 'white'}}>
            <Button variant={"outline-light"}>Админ-панель</Button>
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        }
      </Container>
    </Navbar>
  );
})

export default NavBar;