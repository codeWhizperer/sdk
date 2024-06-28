"use client";

import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { TokenboundClient, WalletClient, Call } from "starknet-tokenbound-sdk";
import {
  IMPLEMENTATION_HASH,
  JSON_RPC,
  REGISTRY_ADDRESS,
  TOKEN_CONTRACT,
  TOKEN_ID,
} from "./constants";
import { useState } from "react";
import { num } from "starknet";

function App() {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected, address, account } = useAccount();
  const [tba, setTba] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [owner, setOwner] = useState("");
  const [nft, setNft] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  

  const options = {
    account: account,
    registryAddress: REGISTRY_ADDRESS,
    implementationAddress: IMPLEMENTATION_HASH,
    jsonRPC: JSON_RPC,
  };

  let tokenboundClient: any;

  if (account) {
    tokenboundClient = new TokenboundClient(options);
  }

  // Get Account

  const getAccount = async () => {
    try {
      const account = await tokenboundClient?.getAccount({
        tokenContract: TOKEN_CONTRACT,
        tokenId: TOKEN_ID,
      });
      setTba(num.toHex(account));
    } catch (error) {
      console.error(error);
    }
  };

  // Get Deployment Status
  const deployAccount = async () => {
    try {
      await tokenboundClient?.createAccount({
        tokenContract: TOKEN_CONTRACT,
        tokenId: TOKEN_ID,
        salt: 4005,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const GetDeploymentStatus = async () => {
    try {
      const status = await tokenboundClient?.checkAccountDeployment({
        tokenContract: TOKEN_CONTRACT,
        tokenId: TOKEN_ID,
      });
      setStatus(status?.deployed);
    } catch (error) {
      console.log(error);
    }
  };

  // get account owner(breaks the code)
  const getAccountOwner = async () => {
    const nftowner = await tokenboundClient?.getOwner({
      tbaAddress: tba,
      tokenContract:  TOKEN_CONTRACT,
      tokenId: TOKEN_ID,
    })
    setOwner(num.toHex(nftowner))
  }


  const getNFT = async () => {
    try {
      const nftowner = await tokenboundClient.getOwnerNFT(tba);
      setNft(num.toHex(nftowner[0]));
    } catch (error) {
      console.error(error);
    }
  };

  const getLockStatus = async () => {
    try {
      const lockStatus = await tokenboundClient.is_locked(tba as string)
     setIsLocked(lockStatus[0])
    } catch (error) {
      console.error(error);
    }
  };

  const Lock = async () => {
    try {
      await tokenboundClient.lock({ tbaAddress: tba, duration_in_sec: 300 });
    } catch (error) {
      console.error(error);
    }
  };

  if (account) {
    GetDeploymentStatus();
    getAccount();
    getLockStatus()
  }

  if (status){
    // getAccountOwner();
    getNFT();
  }

  const transferToken = async() =>{
    try {
      await tokenboundClient?.transferERC20({
        tbaAddress: tba,
        contractAddress: `0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d`,
        recipient: "0x010f7970496Dc785b89fb692cD80a2d8591ee6C2616C0C331Ae9Cf36D77CC135",
        amount: "400000000000000000"
      })
    } catch (error) {
      console.log(error)
    }
  }
  // execute
  const execute = async () => {
    const call1: Call = {
      to: "0x077e0925380d1529772ee99caefa8cd7a7017a823ec3db7c003e56ad2e85e300",
      selector:
        "0x7a44dde9fea32737a5cf3f9683b3235138654aa2d189f6fe44af37a61dc60d",
      calldata: [],
    };
    const call2: Call = {
      to: "0x077e0925380d1529772ee99caefa8cd7a7017a823ec3db7c003e56ad2e85e300",
      selector:
        "0x03a0b04fad2d45d81641f40c55ee13e701dacd4a99cbf4d6ed1e231d717b3e4e",
      calldata: [],
    };
    try {
      await tokenboundClient.execute(tba as string, [call1, call2]);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <header className="flex justify-between p-2">
        <div className="">
          <h1 className="text-2xl">
            {" "}
            SDK<a href="#">EXAMPLE </a>
          </h1>
        </div>

        {isConnected ? (
          <button
            onClick={() => disconnect()}
            className="bg-gray-400 p-2 rounded-lg"
            type="button"
          >
            Disconnect
          </button>
        ) : (
          <div className="flex justify-between ">
            {connectors.map((connector) => (
              <div className="mr-2" key={connector.id}>
                <button onClick={() => connect({ connector })}>
                  {connector.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </header>
      <main>
        <div>
          <p>Tba Account: {tba}</p>
          <p className="text-red-500">Status Account: {String(status)}</p>
          <p className="text-red-500">Owner: {owner}</p>
          <p className="text-red-500">NFT Owner: {nft}</p>
          <p className="text-red-500">Lock-Status: {String(isLocked)}</p>
        </div>
        <div className="flex space-x-4">
        <div className="my-2">
          <button
            disabled={status}
            className="bg-green-300 rounded-lg p-2"
            onClick={deployAccount}
            type="button"
          >
            Deploy TBA
          </button>
        </div>
        <div className="my-2">
          <button
            className="bg-red-300 rounded-lg p-2"
            onClick={execute}
            type="button"
          >
            Execute
          </button>
        </div>

        <div className="my-2">
          <button
            className="bg-blue-300 rounded-lg p-2"
            onClick={Lock}
            type="button"
          >
            Lock
          </button>
        </div>

        <div className="my-2">
          <button
            className="bg-orange-300 rounded-lg p-2"
            onClick={transferToken}
            type="button"
          >
            Transfer ERC20
          </button>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;
