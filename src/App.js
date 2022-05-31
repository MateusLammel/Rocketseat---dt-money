import React from "react";
import { useState } from "react";

import Modal from "react-modal";
import Dashboard from "./components/dashboard";
import Header from "./components/Header";
import NewTransactionModal from "./components/NewTransactionModal";
import {
  TransactionContext,
  TransactionProvider,
} from "./hooks/useTransactions";
import GlobalStyle from "./styles/global";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
}

export default App;
