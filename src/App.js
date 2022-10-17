import React from "react";
import CreditCard from "./CreditCard";

function App() {
  const bankName = "Big Bank, Inc.";
  const year = "08/23";
  const name = "ANTONIO MENA";
  const creditNum = {
    p1: 1234,
    p2: 5678,
    p3: 5664,
    p4: 8878,
  };
  return (
    <div className="App">
      <CreditCard
        bankName={bankName}
        expiricy={year}
        personaName={name}
        num={creditNum}
      />
    </div>
  );
}

export default App;
