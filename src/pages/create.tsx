"use client";
import React, { useState } from "react";

function Create() {
  const [token_contract_address, set_token_contract_address] =
    useState<string>("");
  const [token_id, set_token_id] = useState<string>("");
  const [loading, setLoading] = useState(false)

  const handleAddressChange = (e: any) => {
    set_token_contract_address(e.target.value);
  };
  const handleTokenChange = (e: any) => {
    set_token_id(e.target.value);
  };
  const handleCreateAccount = async () => {
  };
  


  return (
    <form>
      <div className="mb-2">
        <label htmlFor="address" className="block">
          Contract Address
        </label>
        <input
          type="text"
          name="contract_address"
          id="address"
          value={token_contract_address}
          className="outline-none  rounded-sm w-64 p-1"
          onChange={handleAddressChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="address" className="block">
          Token ID
        </label>
        <input
          type="text"
          name="token_id"
          id="tokenId"
          value={token_id}
          className="outline-none  rounded-sm w-64 p-1"
          onChange={handleTokenChange}
        />
      </div>

      <div>
        <button
          type="button"
          className={`bg-green-300 w-full ${loading? `bg-green-100`: ''}`}
          onClick={handleCreateAccount}
          disabled={!!loading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Create;
