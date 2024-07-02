"use client";
import React, { useState } from "react";
import { cairo } from "starknet";

function TransferERC20() {
  const [token_contract_address, set_token_contract_address] =
    useState<string>("");
  const [amount, set_amount] = useState<string>("");
  const [recipient, setRecipient] = useState<string>("");
  const [tba, setTba] = useState<string>("")
  
  const [loading, setLoading] = useState(false)


  const handleAddressChange = (e: any) => {
    set_token_contract_address(e.target.value);
  };
  const handleTokenChange = (e: any) => {
    set_amount(e.target.value);
  };

  const handleTbaChange = (e: any) => {
    setTba(e.target.value);
  };

  const handleRecipientChange = (e: any) => {
    setRecipient(e.target.value);
  };

  const handleTransfer = async () => {

  };


return (
    <form>
      <div className="mb-2">
        <label htmlFor="address" className="block">
          TBA Address
        </label>
        <input
          type="text"
          name="contract_address"
          id="address"
          value={tba}
          className="outline-none  rounded-sm w-64 p-1"
          onChange={handleTbaChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="address" className="block">
          ContractAddress
        </label>
        <input
          type="text"
          name="token_id"
          value={token_contract_address}
          id="tokenId"
          className="outline-none  rounded-sm w-64 p-1"
          onChange={handleAddressChange}
        />
      </div>

      <div className="mb-2">
        <label htmlFor="address" className="block">
          Recipient
        </label>
        <input
          type="text"
          name="token_id"
          id="tokenId"
          value={recipient}
          className="outline-none  rounded-sm w-64 p-1"
          onChange={handleRecipientChange}
        />
      </div>

      <div className="mb-2">
        <label htmlFor="address" className="block">
          Amount
        </label>
        <input
          type="text"
          name="token_id"
          value={amount}
          id="tokenId"
          className="outline-none  rounded-sm w-64 p-1"
          onChange={handleTokenChange}
        />
      </div>

      <div>
        <button
          type="button"
          className={`bg-green-300 w-full ${loading? `bg-green-100`: ''}`}
          onClick={handleTransfer}
          disabled={!!loading}
        >
          Transfer Token
        </button>
      </div>
    </form>
  );
}

export default TransferERC20;
