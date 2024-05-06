import { http, createConfig, createStorage, cookieStorage } from "wagmi";
import { scrollSepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [scrollSepolia],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors: [injected()],
  transports: {
    [scrollSepolia.id]: http(),
  },
});
