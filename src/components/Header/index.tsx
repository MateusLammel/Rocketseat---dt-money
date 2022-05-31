import React from "react";
import { Container } from "./styles";
import Modal from 'react-modal'
import logoImg from "../../assets/logo.svg";
import { useState } from "react";

interface Props {
  onOpenNewTransactionModal: () =>{};
}

const Header = ({ onOpenNewTransactionModal }: Props) => {
  return (
    <Container>
      <div>
        <img src={logoImg} alt="kogo" />
        <button onClick={onOpenNewTransactionModal}>Nova transação</button>
      </div>
    </Container>
  );
};

export default Header;
