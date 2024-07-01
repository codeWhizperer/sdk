"use client";
import React from "react";

import { mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors,
  starkscan,
} from "@starknet-react/core";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "random",
  });

  return (
    <StarknetConfig
      chains={[mainnet]}
      provider={publicProvider()}
      connectors={connectors}
      explorer={starkscan}
      autoConnect={true}
    >
      {children}
    </StarknetConfig>
  );
}

export default StarknetProvider