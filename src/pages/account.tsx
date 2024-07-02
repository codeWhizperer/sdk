import React, { useState } from "react";
import { num } from "starknet";
import { shortenAddress } from "./constants";

function Owner() {
  const [token_contract_address, set_token_contract_address] =
    useState<string>("");
  const [token_id, set_token_id] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState("");
  const [timer, setTimer] = useState<string>("");
  const [tba, setTba] = useState<string>("");
  const [tbaLock, setTbaLock] = useState<string>("");
  const [lock, setLock] = useState<boolean>(false);

  const handleAddressChange = (e: any) => {
    set_token_contract_address(e.target.value);
  };
  const handleTokenChange = (e: any) => {
    set_token_id(e.target.value);
  };

  const handleTimerChange = (e: any) => {
    setTimer(e.target.value);
  };

  const handleTbaChange = (e: any) => {
    setTba(e.target.value);
  };
  const handleTbaLockChange = (e: any) => {
    setTbaLock(e.target.value);
  };
  const handleGetAccount = async () => {};

  const handleLock = async () => {};

  const handleGetIsLocked = async () => {};

  console.log(tbaLock);
  return (
    <div>
      <div className="grid grid-cols-2 gap-6 items-center">
        <form>
          <div className="text-center">
            <h1>
              {" "}
              Account: {loading ? "loading....." : shortenAddress(account)}
            </h1>
          </div>
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
              disabled={!!loading}
              type="button"
              className="bg-green-300 w-full"
              onClick={handleGetAccount}
            >
              Get account
            </button>
          </div>
        </form>

        <div className="mt-4">
          <form>
            <div className="text-center"></div>
            <div className="mb-2">
              <label htmlFor="address" className="block">
                Tokenbound Address
              </label>
              <input
                type="text"
                name="contract_address"
                value={tba}
                id="address"
                className="outline-none  rounded-sm w-64 p-1"
                onChange={handleTbaChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="timer" className="block">
                Timer
              </label>
              <input
                type="text"
                name="duration"
                id="timer"
                value={timer}
                className="outline-none  rounded-sm w-64 p-1"
                onChange={handleTimerChange}
              />
            </div>

            <div>
              <button
                disabled={!!loading}
                type="button"
                className="bg-green-300 w-full"
                onClick={handleLock}
              >
                Lock Account
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-12">
        <form>
          <div className="text-center">Account Lock Status: {String(lock)}</div>
          <div className="mb-2 ">
            <label htmlFor="address" className="block">
              Tokenbound Address
            </label>
            <input
              type="text"
              name="contract_address"
              id="address"
              value={tbaLock}
              className="outline-none  rounded-sm w-full p-1"
              onChange={handleTbaLockChange}
            />
          </div>
          <div>
            <button
              disabled={!!loading}
              type="button"
              className="bg-green-300 w-full"
              onClick={handleGetIsLocked}
            >
              {" "}
              Get Account Status
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Owner;
