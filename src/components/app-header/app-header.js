import React from "react";

import appHeaderStyles from "./app-header.module.css";

import {
  Box,
  Button,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

class AppHeader extends React.Component {
  render() {
    return (
      <header className={appHeaderStyles.header}>
        <NavBar />
        <Logo />
        <PersonalAccount />
      </header>
    );
  }
}

class NavBar extends React.Component {
  render() {
    return <nav className="navBar">{this.props.children}</nav>;
  }
}

class PersonalAccount extends React.Component {
  render() {
    return (
      <Button htmlType="button" type="primary" size="medium">
        <div>
          <ProfileIcon type="primary" />
          <text>Личный кабинет</text>
        </div>
      </Button>
    );
  }
}

export default AppHeader;
