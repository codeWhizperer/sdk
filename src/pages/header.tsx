import React from 'react'
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";

function Header() {
    const { connect, connectors } = useConnect();
    const { isConnected, address, account } = useAccount();
    const { disconnect } = useDisconnect();
  return (
    <header className="flex justify-between p-2">
    <div className="">
      <h1 className="text-2xl">
        {" "}
        TBA<a href="/">LAUNCHPAD </a>
      </h1>
    </div>

    <nav>
      <ul className='flex space-x-4'>
        <li><a href="/create">Create</a></li>
        <li><a href="/account">Account</a></li>
        <li><a href="/status">Status</a></li>
        <li><a href="/transfer">Transfer</a></li>
      </ul>
    </nav>

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
  )
}

export default Header