import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StarknetProvider from "./starknetProvider";
import { useEffect, useState } from "react";
import Layout from "./layout";


export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return(
<StarknetProvider>
  {
    isClient ? (<Layout>
      <Component {...pageProps} /> 
    </Layout>) : ""
  }
</StarknetProvider>
  )
}
