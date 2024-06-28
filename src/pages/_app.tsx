import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StarknetProvider from "./starknetProvider";

type IApp = {
  children: React.ReactNode
}
export default function App({ Component, pageProps }: AppProps) {
  return(
<StarknetProvider>
<Component {...pageProps} />;
</StarknetProvider>
  )
}
