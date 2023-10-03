import { ethers } from "ethers";
import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import styled from "styled-components";

interface WalletProps {
  account: string;
  setAccount: (account: string) => void;
}

export const Wallet = ({ account, setAccount }: WalletProps) => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  setAccount(address!);

  return (
    <>
      {isConnected ? (
        <>
          <Inside>
            <div>Connected to {address}</div>
            <button onClick={() => disconnect()}>Disconnect</button>
          </Inside>
        </>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
    </>
  );
};

const Inside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
  margin: 1rem;
`;
