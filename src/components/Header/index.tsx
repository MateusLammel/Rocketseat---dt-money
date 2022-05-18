import React from "react";
import { Container } from "./styles";
import logoImg from "../../assets/logo.svg";

const Header = () => {
  return (
    <Container>
      <div>
        <img src={logoImg} alt="kogo" />
      </div>
    </Container>
  );
};

export default Header;
