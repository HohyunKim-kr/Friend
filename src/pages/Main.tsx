import { useState } from "react";
import { Wallet } from "../components/wallet";
import { MintAndTransfer } from "./MintAndTransfer";
import { useConnect } from "wagmi";
import styled from "styled-components";

export const Main = () => {
  const [account, setAccount] = useState("");
  return (
    <div>
      <WalletName />
      <Wallet account={account} setAccount={setAccount}></Wallet>
      <MintAndTransfer
        account={account}
        setAccount={setAccount}
      ></MintAndTransfer>
    </div>
  );
};

function WalletName() {
  //어떤 wallet에 연결되었는지를 보여줌.
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <Inside>
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </Inside>
  );
}

const Inside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
  margin: 1rem;
`;
