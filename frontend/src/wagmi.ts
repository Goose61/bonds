import { createConfig, fallback, http } from 'wagmi'
import { injected } from 'wagmi/connectors'
import { appChain, rpcUrl } from './config'

const sepoliaFallbacks = [
  rpcUrl,
  'https://ethereum-sepolia.publicnode.com',
  'https://rpc.sepolia.org',
  'https://1rpc.io/sepolia',
].filter((url, index, list) => list.indexOf(url) === index)

export const wagmiConfig = createConfig({
  chains: [appChain],
  connectors: [injected()],
  transports: {
    [appChain.id]: fallback(sepoliaFallbacks.map((url) => http(url))),
  },
})
