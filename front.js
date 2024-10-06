import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';

function App() {
  const clickHandler = async () => {
    const provider = new ethers.BrowserProvider(
      window.ethereum
    );
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    console.log("Signer address : ", await signer.getAddress());

  }

  // todo : view balance 
  return (
    <div className='App'>
      <button onClick={clickHandler}>
        connect
      </button>
    </div>
  );
}

export default App;
