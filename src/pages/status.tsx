import React, { useState } from 'react'
import { num } from 'starknet';
import { shortenAddress } from './constants';

function Status() {

  const [token_contract_address, set_token_contract_address] =
    useState<string>("");
  const [token_id, set_token_id] = useState<string>("");
  const [loading, setLoading] = useState(false)
  const [status, setState] = useState<boolean>(false)

  const handleAddressChange = (e: any) => {
    set_token_contract_address(e.target.value);
  };
  const handleTokenChange = (e: any) => {
    set_token_id(e.target.value);
  };

  const handleGetStatus= async () => {
  };


  return (
    <form>
      <div className='text-center'>
      <h1 className='mb-4'>Check Deployment Status: {loading? 'loading.....': String(status)}</h1>
      </div>
    <div className='mb-2'>
    <label htmlFor="address" className='block'>Contract Address</label>
    <input type="text" name="contract_address" id="address" value={token_contract_address} className='outline-none  rounded-sm w-64 p-1' onChange={handleAddressChange}  />
    </div>
    <div className='mb-2'>
    <label htmlFor="address" className='block'>Token ID</label>
    <input type="text" name="token_id" id="tokenId" value={token_id} className='outline-none  rounded-sm w-64 p-1' onChange={handleTokenChange} />
    </div>

    <div>
        <button disabled={!!loading} type="button" className='bg-green-300 w-full' onClick={handleGetStatus}>Get TBA Status</button>
    </div>
</form>
  )
}

export default Status