import { useAccount } from "@starknet-react/core";
import { TokenboundClient } from "starknet-tokenbound-sdk";
import { IMPLEMENTATION_HASH, REGISTRY_ADDRESS } from "./constants";

export const useTokenBoundSDK = () => {
    const { account } = useAccount();
    const options = {
      account: account,
      registryAddress:  REGISTRY_ADDRESS,
      implementationAddress: IMPLEMENTATION_HASH,
      jsonRPC: `https://starknet-mainnet.g.alchemy.com/starknet/version/rpc/v0_7/YLzkDbFjxig2SRh_ZniVZROre_E31D79`,
    };
  
    let tokenbound: any;
  
    if (account) {
      tokenbound = new TokenboundClient(options);
    }
    return { tokenbound };
  };