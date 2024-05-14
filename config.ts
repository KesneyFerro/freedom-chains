import { http, createConfig, createStorage, cookieStorage } from "wagmi";
import { scrollSepolia, sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [scrollSepolia, sepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors: [injected()],
  transports: {
    [scrollSepolia.id]: http(),
    [sepolia.id]: http(),
  },
});
