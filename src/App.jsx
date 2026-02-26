import '@rainbow-me/rainbowkit/styles.css'

import {
  RainbowKitProvider,
  getDefaultConfig,
  ConnectButton,
} from '@rainbow-me/rainbowkit'

import { WagmiProvider } from 'wagmi'
import { mainnet, polygon, bsc } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const config = getDefaultConfig({
  appName: 'Multi Wallet dApp',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
  chains: [mainnet, polygon, bsc],
  transports: {
    [mainnet.id]: {
      type: 'http',
      url: `https://eth-mainnet.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`,
    },
    [polygon.id]: {
      type: 'http',
      url: `https://polygon-mainnet.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`,
    },
    [bsc.id]: {
      type: 'http',
      url: `https://bnb-mainnet.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API_KEY}`,
    },
  },
})

const queryClient = new QueryClient()

export default function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <h1>Multi Wallet dApp</h1>

            <ConnectButton />
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}