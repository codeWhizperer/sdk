import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StarknetProvider from "./starknetProvider";
import { useEffect, useState } from "react";


export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return(
<StarknetProvider>
  {
    isClient ? <Component {...pageProps} /> : ""
  }
</StarknetProvider>
  )
}
