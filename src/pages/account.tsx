import React, { useState } from 'react'
import { useTokenBoundSDK } from './hook';
import { num } from 'starknet';
import { shortenAddress } from './constants';

function Owner() {

  const { tokenbound } = useTokenBoundSDK();
  const [token_contract_address, set_token_contract_address] =
    useState<string>("");
  const [token_id, set_token_id] = useState<string>("");
  const [loading, setLoading] = useState(false)
  const [account, setAccount] = useState("")

  const handleAddressChange = (e: any) => {
    set_token_contract_address(e.target.value);
  };
  const handleTokenChange = (e: any) => {
    set_token_id(e.target.value);
  };

  const handleGetAccount = async () => {
    if (token_id.trim() === "" || token_contract_address.trim() === "") {
      alert("Input fields cannot be empty");
      setLoading(false);
      return; 
    }
    
    setLoading(true); 
    try {
    const result =  await tokenbound?.getAccount({
        tokenContract: token_contract_address,
        tokenId: token_id,
      });
      if (result){
        setAccount(num.toHex(result))
      }
      set_token_contract_address("")
      set_token_id("")

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <form>
      <div className='text-center'>
      <h1> Account: {loading? 'loading.....': shortenAddress(account)}</h1>
      </div>
    <div className='mb-2'>
    <label htmlFor="address" className='block'>Contract Address</label>
    <input type="text" name="contract_address" id="address" className='outline-none  rounded-sm w-64 p-1' onChange={handleAddressChange}  />
    </div>
    <div className='mb-2'>
    <label htmlFor="address" className='block'>Token ID</label>
    <input type="text" name="token_id" id="tokenId" className='outline-none  rounded-sm w-64 p-1' onChange={handleTokenChange} />
    </div>

    <div>
        <button disabled={!!loading} type="button" className='bg-green-300 w-full' onClick={handleGetAccount}>Get account</button>
    </div>
</form>
  )
}

export default Owner